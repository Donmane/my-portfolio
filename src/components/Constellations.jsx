import { useEffect, useRef } from 'react';

export default function Constellations() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Mouse coordinates
    const mouse = {
      x: null,
      y: null,
      radius: 140
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // Particle Palette: subtle cyan, teal, warm amber, and soft starlight white
    const tints = [
      { r: 6, g: 182, b: 212 },    // Cyan #06b6d4
      { r: 20, g: 184, b: 166 },   // Teal #14b8a6
      { r: 245, g: 158, b: 11 },   // Amber #f59e0b
      { r: 244, g: 63, b: 94 },    // Soft Rose #f43f5e
      { r: 255, g: 255, b: 255 },  // White
      { r: 228, g: 228, b: 231 }   // Silver Zinc
    ];

    let particles = [];
    const maxConnectionDistance = 115;
    
    // Density calculation based on screen area
    function initParticles() {
      const particleCount = Math.floor((width * height) / 18000);
      particles = [];

      for (let i = 0; i < Math.min(Math.max(particleCount, 40), 90); i++) {
        const tint = tints[Math.floor(Math.random() * tints.length)];
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 1.4 + 0.6,
          baseAlpha: Math.random() * 0.4 + 0.25,
          tint: tint,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulseAngle: Math.random() * Math.PI * 2
        });
      }
    }

    initParticles();

    function render() {
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges smoothly
        if (p.x < -10) p.x = width + 10;
        else if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        else if (p.y > height + 10) p.y = -10;

        // Gentle pulsing
        p.pulseAngle += p.pulseSpeed;
        const currentAlpha = p.baseAlpha + Math.sin(p.pulseAngle) * 0.15;

        // Draw star node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.tint.r}, ${p.tint.g}, ${p.tint.b}, ${Math.max(0.1, currentAlpha)})`;
        ctx.fill();

        // Connect nearby particles (inter-particle constellations)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxConnectionDistance * maxConnectionDistance) {
            const dist = Math.sqrt(distSq);
            // Low opacity: max 0.14 (14%) to keep background subtle & refined
            const alpha = (1 - dist / maxConnectionDistance) * 0.14;

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${p.tint.r}, ${p.tint.g}, ${p.tint.b}, ${alpha})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }

        // Connect to mouse if hovering nearby
        if (mouse.x !== null && mouse.y !== null) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const mDistSq = mdx * mdx + mdy * mdy;

          if (mDistSq < mouse.radius * mouse.radius) {
            const mDist = Math.sqrt(mDistSq);
            // Low opacity: max 0.18 (18%) on mouse connection
            const mAlpha = (1 - mDist / mouse.radius) * 0.18;

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            // Cyan/teal gradient accent line to mouse
            ctx.strokeStyle = `rgba(6, 182, 212, ${mAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    }

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
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
