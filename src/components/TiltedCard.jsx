import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

const springValues = {
  damping: 30,
  stiffness: 120,
  mass: 1.5
};

export default function TiltedCard({
  imageSrc,
  altText = 'Tilted card image',
  captionText = '',
  containerHeight = '230px',
  containerWidth = '100%',
  imageHeight = '230px',
  imageWidth = '100%',
  scaleOnHover = 1.04,
  rotateAmplitude = 10,
  showTooltip = false,
  overlayContent = null,
  displayOverlayContent = false
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1
  });

  const [lastY, setLastY] = useState(0);

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className="relative w-full h-full [perspective:900px] flex flex-col items-center justify-center overflow-hidden rounded-xl bg-zinc-950/60 border border-white/10 group/card"
      style={{
        height: containerHeight,
        width: containerWidth
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d]"
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX: isVisible ? rotateX : 0,
          rotateY: isVisible ? rotateY : 0,
          scale: isVisible ? scale : 1,
          willChange: 'transform'
        }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-top rounded-xl brightness-105 contrast-105 filter transition-all duration-300 group-hover/card:brightness-110"
        />

        {/* Subtle Gradient Shadow Overlay at bottom of image */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent rounded-xl pointer-events-none" />

        {displayOverlayContent && overlayContent && (
          <motion.div className="absolute top-0 left-0 z-[2] will-change-transform [transform:translateZ(30px)]">
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

      {showTooltip && (
        <motion.figcaption
          className="pointer-events-none absolute left-3 top-3 rounded-full bg-zinc-900/90 border border-zinc-700 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur-md opacity-0 z-[3] hidden sm:block shadow-lg"
          style={{
            x: isVisible ? x : 0,
            y: isVisible ? y : 0,
            opacity: isVisible ? opacity : 0,
            rotate: isVisible ? rotateFigcaption : 0,
            willChange: 'transform'
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
}
