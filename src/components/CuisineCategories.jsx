import { useState } from 'react';
import { motion } from 'framer-motion';

const cuisines = [
  { name: 'Indian', icon: '🍛', desc: 'Rich curries, tandoori specialties & aromatic biryanis from across the subcontinent.', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80' },
  { name: 'Chinese', icon: '🥢', desc: 'Wok-fired perfection — from dim sum to Sichuan spice, every bite excites.', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80' },
  { name: 'Thai', icon: '🍜', desc: 'Sweet, sour, spicy & savory — the bold balance of Land of Smiles cuisine.', image: 'https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=600&q=80' },
  { name: 'Continental', icon: '🍷', desc: 'European elegance — grills, pastas, soups & desserts crafted with finesse.', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80' },
];

function CuisineCard({ c, i }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative', height: '400px', borderRadius: '16px', overflow: 'hidden', cursor: 'pointer',
        border: hovered ? '1px solid rgba(232,160,32,0.3)' : '1px solid transparent',
        transition: 'border-color 0.4s',
      }}
    >
      <img src={c.image} alt={c.name}
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
          transition: 'transform 0.6s',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
        }}
        loading="lazy"
      />
      {/* Dark overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(8,8,8,0.9) 0%, rgba(8,8,8,0.4) 50%, rgba(8,8,8,0.15) 100%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'flex-end', padding: '24px', zIndex: 5,
      }}>
        <span style={{
          fontSize: '42px', marginBottom: '12px',
          transition: 'transform 0.4s',
          transform: hovered ? 'scale(1.15) translateY(-4px)' : 'scale(1)',
        }}>
          {c.icon}
        </span>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 600, color: 'var(--cream)', marginBottom: '6px' }}>
          {c.name}
        </h3>

        {/* Hover reveal description */}
        <div style={{
          maxHeight: hovered ? '100px' : '0',
          overflow: 'hidden',
          opacity: hovered ? 1 : 0,
          transition: 'max-height 0.5s ease, opacity 0.4s ease',
        }}>
          <p style={{
            fontFamily: 'var(--font-sub)', fontSize: '15px', color: 'var(--text-secondary)',
            fontStyle: 'italic', textAlign: 'center', lineHeight: 1.6, marginBottom: '10px',
          }}>
            {c.desc}
          </p>
          <div style={{ width: '40px', height: '2px', background: 'var(--saffron)', margin: '0 auto' }} />
        </div>
      </div>
    </motion.div>
  );
}

export default function CuisineCategories() {
  return (
    <section
      id="cuisines"
      style={{ position: 'relative', padding: 'clamp(80px, 10vw, 130px) 0', background: 'var(--bg-secondary)', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-label">
            Explore Cuisines
          </motion.span>
          <div className="ornament-divider" style={{ margin: '12px auto' }}>
            <span style={{ color: 'var(--saffron)', fontSize: '14px' }}>❖</span>
          </div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="section-heading" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
            Four Worlds, <span className="text-saffron-gradient" style={{ fontStyle: 'italic' }}>One Table</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '20px' }}>
          {cuisines.map((c, i) => (
            <CuisineCard key={c.name} c={c} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
