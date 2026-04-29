import { motion } from 'framer-motion';

const images = [
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80', alt: 'Gourmet plating' },
  { src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80', alt: 'Fresh salad' },
  { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80', alt: 'Pizza' },
  { src: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&q=80', alt: 'Plated dish' },
  { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80', alt: 'Restaurant' },
  { src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80', alt: 'Pancakes' },
  { src: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&q=80', alt: 'Burger' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80', alt: 'Fine dining' },
  { src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80', alt: 'Colorful dish' },
  { src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&q=80', alt: 'Cocktails' },
];

export default function Gallery() {
  const allImages = [...images, ...images];

  return (
    <section
      id="gallery"
      style={{ position: 'relative', padding: 'clamp(60px, 8vw, 100px) 0', background: 'var(--bg-primary)', overflow: 'hidden' }}
    >
      {/* Header */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center', marginBottom: '40px' }}>
        <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-label">
          Gallery
        </motion.span>
        <div className="ornament-divider" style={{ margin: '12px auto' }}>
          <span style={{ color: 'var(--saffron)', fontSize: '14px' }}>❖</span>
        </div>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="section-heading" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
          A Feast for the <span className="text-saffron-gradient" style={{ fontStyle: 'italic' }}>Eyes</span>
        </motion.h2>
      </div>

      {/* Marquee */}
      <div style={{ position: 'relative' }}>
        {/* Vignettes */}
        <div className="vignette-left" style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 'clamp(40px, 8vw, 120px)', zIndex: 5, pointerEvents: 'none' }} />
        <div className="vignette-right" style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 'clamp(40px, 8vw, 120px)', zIndex: 5, pointerEvents: 'none' }} />

        <div style={{ overflow: 'hidden' }}>
          <div className="marquee-track" style={{ display: 'flex', gap: '16px', width: 'max-content' }}>
            {allImages.map((img, i) => (
              <div key={i} style={{
                flex: '0 0 auto', width: 'clamp(220px, 25vw, 300px)', height: 'clamp(150px, 16vw, 200px)',
                borderRadius: '12px', overflow: 'hidden', position: 'relative',
              }} className="group">
                <img src={img.src} alt={img.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                  loading="lazy"
                  className="group-hover:scale-110"
                />
                <div style={{
                  position: 'absolute', inset: 0, opacity: 0, transition: 'opacity 0.3s',
                  background: 'rgba(8,8,8,0.2)', border: '1px solid rgba(232,160,32,0.3)', borderRadius: '12px',
                }} className="group-hover:!opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
