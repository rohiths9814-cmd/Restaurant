import { motion } from 'framer-motion';
import PageLayout from '../layouts/PageLayout';

const videos = [
  { id: 'dQw4w9WgXcQ', title: 'Rasikas Grand Fusion — Our Story', desc: 'The journey of Salem\'s finest multi-cuisine restaurant.' },
  { id: 'ScMzIvxBSi4', title: 'Behind the Kitchen', desc: 'Watch our master chefs craft fusion magic.' },
  { id: 'M7lc1UVf-VE', title: 'A Taste of Thailand at Salem', desc: 'Our Thai chef brings authentic Bangkok street flavours.' },
  { id: '9bZkp7q19f0', title: 'Customer Reviews', desc: 'Hear from our guests about their dining experience.' },
];

export default function VideoPage() {
  return (
    <PageLayout title="Videos">
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
            Our <span className="text-saffron-gradient" style={{ fontStyle: 'italic' }}>Videos</span>
          </motion.h1>
        </div>
      </section>

      {/* Video grid */}
      <section style={{ padding: '0 0 clamp(60px, 8vw, 100px)', background: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '24px' }}>
            {videos.map((v, i) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card"
                style={{ overflow: 'hidden', padding: 0 }}
              >
                <div style={{ position: 'relative', paddingBottom: '56.25%', background: '#111' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', color: 'var(--cream)', marginBottom: '6px' }}>{v.title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
