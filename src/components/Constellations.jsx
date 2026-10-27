import { useEffect, useRef } from 'react';

export default function Constellations() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId = null;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
      if (prefersReducedMotion) {
        drawFrame();
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Mouse coordinates
    const mouse = {
      x: null,
      y: null,
      radius: 130
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (prefersReducedMotion) {
        drawFrame();
      }
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
      if (prefersReducedMotion) {
        drawFrame();
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // Strict palette: Amber #FFB547, Starlight Blue #8FB8FF, and Soft White #F5F5F7
    const AMBER_TINT = { r: 255, g: 181, b: 71, isBright: true };     // Sun Amber #FFB547
    const BLUE_TINT = { r: 143, g: 184, b: 255, isBright: false };    // Starlight Blue #8FB8FF
    const WHITE_TINT = { r: 245, g: 245, b: 247, isBright: false };   // Soft White #F5F5F7

    let particles = [];
    const maxConnectionDistance = 110;

    // Density calculation with a strict cap for high performance
    function initParticles() {
      const calculated = Math.floor((width * height) / 22000);
      const count = Math.min(Math.max(calculated, 25), 50); // Capped particle count
      particles = [];

      for (let i = 0; i < count; i++) {
        // ~20% of stars are brightest amber stars
        const isAmber = Math.random() < 0.22;
        const tint = isAmber ? AMBER_TINT : (Math.random() < 0.5 ? BLUE_TINT : WHITE_TINT);

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.28,
          vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.28,
          radius: isAmber ? Math.random() * 0.8 + 1.4 : Math.random() * 0.9 + 0.6,
          baseAlpha: isAmber ? 0.75 : Math.random() * 0.35 + 0.25,
          tint: tint,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulseAngle: Math.random() * Math.PI * 2
        });
      }
    }

    initParticles();

    function drawFrame() {
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          // Wrap edges smoothly
          if (p.x < -10) p.x = width + 10;
          else if (p.x > width + 10) p.x = -10;
          if (p.y < -10) p.y = height + 10;
          else if (p.y > height + 10) p.y = -10;

          // Gentle pulsing
          p.pulseAngle += p.pulseSpeed;
        }

        const currentAlpha = p.baseAlpha + Math.sin(p.pulseAngle) * 0.15;

        // Draw star node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.tint.r}, ${p.tint.g}, ${p.tint.b}, ${Math.max(0.15, currentAlpha)})`;
        ctx.fill();

        // Subtle glow around brightest amber stars
        if (p.tint.isBright) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 181, 71, 0.12)`;
          ctx.fill();
        }

        // Connect nearby particles: recolored strictly to starlight blue #8FB8FF
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxConnectionDistance * maxConnectionDistance) {
            const dist = Math.sqrt(distSq);
            // Low opacity: max 0.16 starlight blue line
            const alpha = (1 - dist / maxConnectionDistance) * 0.16;

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(143, 184, 255, ${alpha})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }

        // Connect to mouse if nearby: starlight blue
        if (mouse.x !== null && mouse.y !== null) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const mDistSq = mdx * mdx + mdy * mdy;

          if (mDistSq < mouse.radius * mouse.radius) {
            const mDist = Math.sqrt(mDistSq);
            const mAlpha = (1 - mDist / mouse.radius) * 0.22;

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(143, 184, 255, ${mAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
    }

    function loop() {
      drawFrame();
      animationFrameId = requestAnimationFrame(loop);
    }

    if (!prefersReducedMotion) {
      loop();
    } else {
      drawFrame();
    }

    // Pause when tab is hidden
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      } else if (!prefersReducedMotion && !animationFrameId) {
        loop();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[1]"
      style={{ opacity: 0.9 }}
      aria-hidden="true"
    />
  );
}
