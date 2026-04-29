import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const stats = [
  { value: 22, suffix: '+', label: 'Years of Legacy' },
  { value: 365, suffix: '', label: 'Days Open' },
  { value: 4, suffix: '', label: 'World Cuisines' },
  { value: 1000, suffix: '+', label: 'Happy Guests Daily' },
];

function Counter({ target, suffix, inView }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = performance.now();
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, target]);

  return (
    <span style={{
      fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700,
      background: 'var(--gradient-saffron)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
    }}>
      {count}{suffix}
    </span>
  );
}

const storyParagraphs = [
  'Twenty-two years ago, two brothers set out with a humble dream — to serve Salem\'s food lovers the finest Chinese and Indian delicacies. What began as RASIKAS quickly grew into the city\'s most beloved dining destination.',
  'Today, Rasikas Grand Fusion is the culmination of that dream — a sanctuary where Thai, Chinese, Indian & Continental cuisines converge in aromatic harmony.',
  'Our chefs weave together creamy curries, fragrant sauces, flavourful snacks, and sinful sweets, all crafted with the freshest ingredients and a 130-year-old family tradition of spice mastery.',
  'We live by 5 sauces and 5 spices — the secret behind the unmistakable "Taste of Flavours" that keeps Salem coming back, every single day.',
];

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const y3 = useTransform(scrollYProgress, [0, 1], [70, -70]);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: 'clamp(80px, 10vw, 140px) 0',
        background: 'var(--bg-secondary)',
        overflow: 'hidden',
      }}
    >
      {/* Floating spice decorations */}
      <img src="/assets/coriander.png" alt="" className="floating-ingredient"
        style={{ top: '10%', right: '3%', width: '80px', opacity: 0.2, animation: 'slowSpin 25s linear infinite' }} />
      <img src="/assets/chili.png" alt="" className="floating-ingredient"
        style={{ bottom: '15%', left: '2%', width: '50px', opacity: 0.15, animation: 'slowSpin 30s linear infinite reverse' }} />

      {/* Warm glow */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: '500px', height: '500px', pointerEvents: 'none', opacity: 0.3,
        background: 'radial-gradient(circle, rgba(232,160,32,0.06) 0%, transparent 60%)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '64px', alignItems: 'center' }}>
          {/* Left — Image collage with parallax */}
          <div style={{ position: 'relative', height: 'clamp(400px, 50vw, 580px)' }}>
            <motion.div style={{ y: y1, position: 'absolute', top: 0, left: 0, width: '55%', height: '58%', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80" alt="Restaurant ambience" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
            </motion.div>
            <motion.div style={{ y: y2, position: 'absolute', top: '22%', right: 0, width: '50%', height: '48%', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80" alt="Fine dining" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
            </motion.div>
            <motion.div style={{ y: y3, position: 'absolute', bottom: 0, left: '12%', width: '48%', height: '42%', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
              <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80" alt="Restaurant interior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
            </motion.div>

            {/* Gold corner accent */}
            <div style={{ position: 'absolute', top: '-4px', left: '-4px', width: '60px', height: '60px', borderTop: '2px solid var(--saffron)', borderLeft: '2px solid var(--saffron)', opacity: 0.3 }} />
            <div style={{ position: 'absolute', bottom: '-4px', right: '-4px', width: '60px', height: '60px', borderBottom: '2px solid var(--saffron)', borderRight: '2px solid var(--saffron)', opacity: 0.3 }} />
          </div>

          {/* Right — Story text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label"
            >
              Our Story
            </motion.span>

            {/* Brush stroke SVG under heading */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{ margin: '12px 0 8px' }}
            >
              <svg width="120" height="12" viewBox="0 0 120 12">
                <motion.path
                  d="M2 8 Q30 2 60 7 Q90 12 118 5"
                  fill="none"
                  stroke="var(--saffron)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="300"
                  initial={{ strokeDashoffset: 300 }}
                  whileInView={{ strokeDashoffset: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                />
              </svg>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="section-heading"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '24px' }}
            >
              A Legacy of{' '}
              <span className="text-saffron-gradient" style={{ fontStyle: 'italic' }}>Flavours</span>
            </motion.h2>

            {storyParagraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                style={{
                  fontFamily: 'var(--font-body)', color: 'var(--text-secondary)',
                  fontSize: '14.5px', lineHeight: 1.8, marginBottom: '14px',
                }}
              >
                {p}
              </motion.p>
            ))}

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontStyle: 'italic', color: 'var(--saffron)', marginTop: '20px' }}
            >
              "Warning: You'll be coming back for more."
            </motion.p>
          </div>
        </div>

        {/* Ornamental divider */}
        <div className="ornament-divider" style={{ margin: '48px 0' }}>
          <span style={{ color: 'var(--saffron)', fontSize: '16px' }}>❖</span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: '20px' }}>
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card"
              style={{ padding: '28px 20px', textAlign: 'center' }}
            >
              <Counter target={stat.value} suffix={stat.suffix} inView={isInView} />
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase',
                color: 'var(--text-muted)', marginTop: '8px',
              }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
