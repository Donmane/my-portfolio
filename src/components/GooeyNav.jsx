import { useRef, useEffect, useState, useCallback } from 'react';

const GooeyNav = ({
  items,
  animationTime = 500,
  particleCount = 12,
  particleDistances = [70, 10],
  particleR = 90,
  timeVariance = 200,
  colors = ['#FFB547', '#8FB8FF', '#F5F5F7', '#18181B'],
  activeSectionIndex = 0,
  onItemClick = null
}) => {
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const particlesContainerRef = useRef(null);
  const [pillStyle, setPillStyle] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    opacity: 0
  });

  const noise = (n = 1) => n / 2 - Math.random() * n;
  const getXY = (distance, pointIndex, totalPoints) => {
    const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };

  const createParticle = (i, t, d, r) => {
    const rotate = noise(r / 10);
    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10
    };
  };

  const spawnParticlesAtElement = (element) => {
    if (!particlesContainerRef.current || !containerRef.current || !element) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const elemRect = element.getBoundingClientRect();
    const centerX = elemRect.left - containerRect.left + elemRect.width / 2;
    const centerY = elemRect.top - containerRect.top + elemRect.height / 2;

    const d = particleDistances;
    const r = particleR;

    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t, d, r);

      const particle = document.createElement('span');
      const point = document.createElement('span');
      particle.className = 'gooey-particle';
      particle.style.left = `${centerX - 8}px`;
      particle.style.top = `${centerY - 8}px`;
      particle.style.setProperty('--start-x', `${p.start[0]}px`);
      particle.style.setProperty('--start-y', `${p.start[1]}px`);
      particle.style.setProperty('--end-x', `${p.end[0]}px`);
      particle.style.setProperty('--end-y', `${p.end[1]}px`);
      particle.style.setProperty('--time', `${p.time}ms`);
      particle.style.setProperty('--scale', `${p.scale}`);
      particle.style.setProperty('--color', p.color);
      particle.style.setProperty('--rotate', `${p.rotate}deg`);

      point.className = 'gooey-point';
      particle.appendChild(point);
      particlesContainerRef.current.appendChild(particle);

      setTimeout(() => {
        try {
          if (particlesContainerRef.current?.contains(particle)) {
            particlesContainerRef.current.removeChild(particle);
          }
        } catch {
          // ignore cleanup errors
        }
      }, t);
    }
  };

  const updatePillPosition = useCallback(() => {
    if (!navRef.current || !containerRef.current) return;
    const listItems = navRef.current.querySelectorAll('li');
    const targetLi = listItems[activeSectionIndex];

    if (targetLi) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const pos = targetLi.getBoundingClientRect();

      setPillStyle({
        left: pos.left - containerRect.left,
        top: pos.top - containerRect.top,
        width: pos.width,
        height: pos.height,
        opacity: 1
      });
    }
  }, [activeSectionIndex]);

  useEffect(() => {
    updatePillPosition();

    const handleResize = () => {
      updatePillPosition();
    };

    window.addEventListener('resize', handleResize);
    const resizeObserver = new ResizeObserver(() => {
      updatePillPosition();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
    };
  }, [updatePillPosition]);

  const handleClick = (e, index) => {
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
    }

    const liEl = navRef.current?.querySelectorAll('li')[index];
    if (liEl) {
      spawnParticlesAtElement(liEl);
    }

    if (onItemClick) {
      onItemClick(items[index], index);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(e, index);
    }
  };

  return (
    <>
      <style>
        {`
          .gooey-particle {
            position: absolute;
            pointer-events: none;
            width: 16px;
            height: 16px;
            border-radius: 9999px;
            transform-origin: center;
            will-change: transform, opacity;
            z-index: 20;
            animation: gooeyParticleAnim calc(var(--time)) cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          }
          .gooey-point {
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 9999px;
            background: var(--color);
            box-shadow: 0 0 10px var(--color);
            transform-origin: center;
            will-change: transform, opacity;
            animation: gooeyPointAnim calc(var(--time)) cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          }
          @keyframes gooeyParticleAnim {
            0% {
              transform: translate3d(var(--start-x), var(--start-y), 0) rotate(0deg);
              opacity: 1;
            }
            65% {
              transform: translate3d(calc(var(--end-x) * 1.15), calc(var(--end-y) * 1.15), 0) rotate(calc(var(--rotate) * 0.6));
              opacity: 1;
            }
            100% {
              transform: translate3d(calc(var(--end-x) * 0.6), calc(var(--end-y) * 0.6), 0) rotate(var(--rotate));
              opacity: 0;
            }
          }
          @keyframes gooeyPointAnim {
            0% {
              transform: scale(0.2);
              opacity: 0;
            }
            25% {
              transform: scale(calc(var(--scale) * 0.7));
              opacity: 1;
            }
            65% {
              transform: scale(var(--scale));
              opacity: 1;
            }
            100% {
              transform: scale(0);
              opacity: 0;
            }
          }
        `}
      </style>
      <div className="relative isolate" ref={containerRef}>
        {/* Animated Single Sliding Active Pill Indicator */}
        <span
          className="absolute rounded-full pointer-events-none transition-all duration-300 ease-out z-[1]"
          style={{
            left: `${pillStyle.left}px`,
            top: `${pillStyle.top}px`,
            width: `${pillStyle.width}px`,
            height: `${pillStyle.height}px`,
            opacity: pillStyle.opacity,
            background: '#18181B',
            border: '1px solid rgba(143, 184, 255, 0.35)',
            boxShadow: '0 0 15px rgba(255, 181, 71, 0.25), inset 0 1px 1px rgba(245, 245, 247, 0.15)',
          }}
        />

        {/* Particles Container */}
        <div ref={particlesContainerRef} className="absolute inset-0 pointer-events-none overflow-visible z-20" />

        {/* Navigation List */}
        <nav className="flex relative z-10">
          <ul
            ref={navRef}
            className="flex gap-1.5 sm:gap-2.5 list-none p-1 m-0 relative"
          >
            {items.map((item, index) => {
              const isActive = activeSectionIndex === index;
              return (
                <li
                  key={index}
                  className="rounded-full relative cursor-pointer select-none"
                >
                  <a
                    onClick={(e) => handleClick(e, index)}
                    href={item.href}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className={`block outline-none py-1.5 px-3.5 text-xs sm:text-sm tracking-wide rounded-full transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? 'text-[#F5F5F7] font-bold drop-shadow-[0_0_8px_rgba(255,181,71,0.35)]'
                        : 'text-neutral-400 hover:text-[#F5F5F7] hover:bg-neutral-800/40 font-medium'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default GooeyNav;

