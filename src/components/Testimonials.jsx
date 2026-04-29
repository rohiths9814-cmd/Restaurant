import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  { quote: 'The best multi-cuisine restaurant in Salem. The Thai green curry is divine, and the ambience makes every visit special.', name: 'Priya Krishnan', title: 'Food Blogger', rating: 5 },
  { quote: 'We celebrated our anniversary here and it was magical. The Continental lamb chops were cooked to perfection.', name: 'Rajesh & Meena', title: 'Regular Patrons', rating: 5 },
  { quote: 'From the Dragon Roll to the Biryani, every dish is a masterpiece. 22 years of legacy shows in every bite.', name: 'Arvind Sundaram', title: 'Salem Resident', rating: 5 },
  { quote: 'The Pad Thai and Tom Yum soup rival what I had in Bangkok. Authentic flavours and warm hospitality!', name: 'Karthik R.', title: 'Travel Enthusiast', rating: 5 },
  { quote: 'I bring all my out-of-town guests here. The fusion concept works beautifully — a Salem treasure!', name: 'Dr. Lakshmi N.', title: 'Loyal Customer', rating: 4 },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[idx];

  return (
    <section style={{
      position: 'relative', padding: 'clamp(80px, 10vw, 130px) 0',
      background: 'var(--bg-primary)', overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-label">
          Testimonials
        </motion.span>
        <div className="ornament-divider" style={{ margin: '12px auto' }}>
          <span style={{ color: 'var(--saffron)', fontSize: '14px' }}>❖</span>
        </div>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="section-heading" style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: '40px' }}>
          What Our Guests <span className="text-saffron-gradient" style={{ fontStyle: 'italic' }}>Say</span>
        </motion.h2>

        <div style={{ minHeight: '300px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.45 }}
              className="glass-card"
              style={{ padding: 'clamp(28px, 5vw, 48px)' }}
            >
              {/* Quote icon */}
              <div style={{ fontSize: '40px', color: 'var(--saffron)', opacity: 0.25, marginBottom: '16px', fontFamily: 'serif', lineHeight: 1 }}>❝</div>

              {/* Stars */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '20px' }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={i < t.rating ? '#e8a020' : 'none'} stroke={i < t.rating ? '#e8a020' : '#6b6560'} strokeWidth="1.5">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              <p style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(16px, 2.5vw, 20px)',
                fontStyle: 'italic', fontWeight: 400, color: 'var(--cream)',
                lineHeight: 1.6, marginBottom: '24px',
              }}>
                "{t.quote}"
              </p>

              <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--saffron)', fontWeight: 600 }}>
                {t.name}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>
                {t.title}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)}
              style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: i === idx ? 'var(--saffron)' : 'var(--text-muted)',
                opacity: i === idx ? 1 : 0.3,
                transform: i === idx ? 'scale(1.3)' : 'scale(1)',
                transition: 'all 0.3s',
              }}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
