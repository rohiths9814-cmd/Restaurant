import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageLayout from '../layouts/PageLayout';

const photos = [
  { src: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80', title: 'Hyderabadi Dum Biryani', cat: 'indian' },
  { src: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80', title: 'Butter Chicken', cat: 'indian' },
  { src: 'https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=600&q=80', title: 'Mutton Chettinad', cat: 'indian' },
  { src: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=600&q=80', title: 'Tom Yum Kung', cat: 'thai' },
  { src: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=600&q=80', title: 'Pad Thai', cat: 'thai' },
  { src: 'https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=600&q=80', title: 'Thai Green Curry', cat: 'thai' },
  { src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80', title: 'Dragon Roll', cat: 'chinese' },
  { src: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=80', title: 'Crispy Spring Rolls', cat: 'chinese' },
  { src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80', title: 'Grilled Lamb Chops', cat: 'continental' },
  { src: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80', title: 'Truffle Pasta', cat: 'continental' },
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80', title: 'Restaurant Ambience', cat: 'ambience' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', title: 'Fine Dining Setup', cat: 'ambience' },
  { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80', title: 'Bar Area', cat: 'ambience' },
  { src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80', title: 'Cocktail Bar', cat: 'ambience' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', title: 'Chef\'s Special', cat: 'indian' },
  { src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80', title: 'Garden Salad', cat: 'continental' },
];

const filters = [
  { key: 'all', label: 'All' },
  { key: 'indian', label: 'Indian' },
  { key: 'chinese', label: 'Chinese' },
  { key: 'thai', label: 'Thai' },
  { key: 'continental', label: 'Continental' },
  { key: 'ambience', label: 'Ambience' },
];

export default function PhotosPage() {
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null);
  const filtered = filter === 'all' ? photos : photos.filter((p) => p.cat === filter);

  return (
    <PageLayout title="Photos">
      {/* Hero */}
      <section style={{
        minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'var(--bg-primary)', paddingTop: '100px', paddingBottom: '20px',
      }}>
        <div style={{ textAlign: 'center' }}>
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-label">Gallery</motion.span>
          <div className="ornament-divider" style={{ margin: '12px auto' }}>
            <span style={{ color: 'var(--saffron)', fontSize: '14px' }}>❖</span>
          </div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="section-heading" style={{ fontSize: 'clamp(36px, 6vw, 52px)' }}>
            Photo <span className="text-saffron-gradient" style={{ fontStyle: 'italic' }}>Gallery</span>
          </motion.h1>
        </div>
      </section>

      {/* Filters */}
      <section style={{ background: 'var(--bg-primary)', paddingBottom: '20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginBottom: '32px' }}>
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                style={{
                  padding: '8px 20px', borderRadius: '100px',
                  fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase',
                  border: filter === f.key ? '1px solid var(--saffron)' : '1px solid rgba(232,160,32,0.15)',
                  background: filter === f.key ? 'rgba(232,160,32,0.12)' : 'transparent',
                  color: filter === f.key ? 'var(--saffron)' : 'var(--text-muted)',
                  transition: 'all 0.3s', cursor: 'pointer',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: '0 0 clamp(60px, 8vw, 100px)', background: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" style={{ gap: '16px' }}>
            <AnimatePresence mode="popLayout">
              {filtered.map((photo, i) => (
                <motion.div
                  key={photo.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  onClick={() => setLightbox(photo)}
                  className="smoke-trigger"
                  style={{
                    borderRadius: '12px', overflow: 'hidden', cursor: 'pointer',
                    position: 'relative', aspectRatio: '4/3',
                    border: '1px solid rgba(232,160,32,0.06)',
                  }}
                >
                  <img src={photo.src} alt={photo.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                    loading="lazy"
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                  />
                  {/* Hover overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(8,8,8,0.8) 0%, transparent 50%)',
                    opacity: 0, transition: 'opacity 0.3s', display: 'flex', alignItems: 'flex-end', padding: '16px',
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = '0'; }}
                  >
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '16px', color: 'var(--cream)' }}>{photo.title}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 10000,
              background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(10px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'zoom-out', padding: '24px',
            }}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={lightbox.src}
              alt={lightbox.title}
              style={{ maxWidth: '90vw', maxHeight: '85vh', borderRadius: '12px', objectFit: 'contain' }}
            />
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              style={{
                position: 'absolute', bottom: '40px',
                fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--cream)',
              }}>
              {lightbox.title}
            </motion.p>
            <button onClick={() => setLightbox(null)}
              style={{ position: 'absolute', top: '24px', right: '24px', color: 'var(--cream)', fontSize: '28px' }}>
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
}
