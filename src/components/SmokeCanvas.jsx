import { useEffect, useRef, useCallback } from 'react';

/**
 * SmokeCanvas — renders steam/smoke particles that follow the cursor
 * when hovering over food images (.smoke-trigger elements).
 * Canvas overlays the entire viewport but is pointer-events: none.
 */
export default function SmokeCanvas() {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: -100, y: -100, active: false });
  const raf = useRef(null);

  const createParticle = useCallback((x, y) => {
    const count = 2 + Math.floor(Math.random() * 2);
    for (let i = 0; i < count; i++) {
      particles.current.push({
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 10,
        vx: (Math.random() - 0.5) * 1.2,
        vy: -(1.5 + Math.random() * 2),
        size: 15 + Math.random() * 25,
        opacity: 0.35 + Math.random() * 0.25,
        life: 1,
        decay: 0.008 + Math.random() * 0.012,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.04,
      });
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // Check if hovering a smoke-trigger element
      const el = document.elementFromPoint(e.clientX, e.clientY);
      mouse.current.active = !!(
        el && (el.closest('.smoke-trigger') || el.classList?.contains('smoke-trigger'))
      );
    };

    const handleMouseLeave = () => {
      mouse.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    let lastEmit = 0;
    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Emit new particles when hovering triggers
      if (mouse.current.active && time - lastEmit > 40) {
        createParticle(mouse.current.x, mouse.current.y);
        lastEmit = time;
      }

      // Update & draw particles
      particles.current = particles.current.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy *= 0.99; // slow down vertical rise
        p.vx *= 0.98;
        p.size += 0.3; // expand slightly
        p.life -= p.decay;
        p.rotation += p.rotSpeed;
        p.opacity = Math.max(0, p.life * 0.4);

        if (p.life <= 0) return false;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;

        // Soft smoke gradient circle
        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size);
        grad.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
        grad.addColorStop(0.4, 'rgba(220, 210, 195, 0.08)');
        grad.addColorStop(1, 'rgba(200, 190, 170, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size, p.size * 0.7, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
        return true;
      });

      raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [createParticle]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    />
  );
}
