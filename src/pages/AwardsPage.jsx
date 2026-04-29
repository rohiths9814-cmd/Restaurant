import { motion } from 'framer-motion';
import PageLayout from '../layouts/PageLayout';

const awards = [
  { year: '2024', title: 'Best Multi-Cuisine Restaurant', org: 'Salem Food Awards', icon: '🏆' },
  { year: '2023', title: 'People\'s Choice Award', org: 'Tamil Nadu Food Festival', icon: '🏅' },
  { year: '2023', title: 'Certificate of Excellence', org: 'Zomato Gold', icon: '🎖️' },
  { year: '2022', title: '4.5★ Google Rating', org: 'Google Reviews', icon: '⭐' },
  { year: '2021', title: 'Best Indian Restaurant', org: 'Swiggy Awards — Salem', icon: '🍛' },
  { year: '2020', title: 'Most Loved Restaurant', org: 'Fairlands Business Association', icon: '❤️' },
  { year: '2019', title: 'Top 10 Restaurants in Salem', org: 'Times Food Guide', icon: '📰' },
  { year: '2018', title: 'Best Chinese Cuisine', org: 'Salem Culinary Awards', icon: '🥢' },
];

const media = [
  { title: 'Featured in The Hindu — "Salem\'s Fusion Revolution"', type: 'Press', year: '2023' },
  { title: 'Zomato Spotlight — "Where Four Cuisines Meet"', type: 'Digital', year: '2023' },
  { title: 'Tamil Nadu Food Vlog — 500K+ views on YouTube', type: 'Video', year: '2022' },
  { title: 'Times of India — "Top 5 Restaurants in Salem"', type: 'Press', year: '2021' },
];

export default function AwardsPage() {
  return (
    <PageLayout title="Awards">
      {/* Hero */}
      <section style={{
        minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'var(--bg-primary)', paddingTop: '100px', paddingBottom: '20px',
      }}>
        <div style={{ textAlign: 'center' }}>
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-label">Recognition</motion.span>
          <div className="ornament-divider" style={{ margin: '12px auto' }}>
            <span style={{ color: 'var(--saffron)', fontSize: '14px' }}>❖</span>
          </div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="section-heading" style={{ fontSize: 'clamp(36px, 6vw, 52px)' }}>
            Awards & <span className="text-saffron-gradient" style={{ fontStyle: 'italic' }}>Accolades</span>
          </motion.h1>
        </div>
      </section>

      {/* Awards grid */}
      <section style={{ padding: '0 0 clamp(60px, 8vw, 80px)', background: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '16px' }}>
            {awards.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card"
                style={{ padding: '28px 20px', textAlign: 'center' }}
              >
                <span style={{ fontSize: '36px', display: 'block', marginBottom: '12px' }}>{a.icon}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '2px', color: 'var(--saffron)', textTransform: 'uppercase' }}>{a.year}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '17px', color: 'var(--cream)', margin: '8px 0 6px' }}>{a.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-muted)' }}>{a.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section style={{ padding: 'clamp(60px, 8vw, 80px) 0', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-label">In the News</span>
            <h2 className="section-heading" style={{ fontSize: 'clamp(24px, 3vw, 36px)', marginTop: '12px' }}>
              Media <span className="text-saffron-gradient" style={{ fontStyle: 'italic' }}>Coverage</span>
            </h2>
          </div>
          {media.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                padding: '18px 20px', marginBottom: '12px', borderRadius: '12px',
                border: '1px solid rgba(232,160,32,0.08)', background: 'rgba(232,160,32,0.02)',
                transition: 'border-color 0.3s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(232,160,32,0.25)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(232,160,32,0.08)'; }}
            >
              <span style={{
                flex: '0 0 auto', padding: '4px 12px', borderRadius: '6px',
                background: 'rgba(232,160,32,0.1)', fontFamily: 'var(--font-body)',
                fontSize: '9px', letterSpacing: '1.5px', color: 'var(--saffron)', textTransform: 'uppercase',
              }}>{m.type}</span>
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--cream)', lineHeight: 1.5 }}>{m.title}</p>
              </div>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-muted)', flex: '0 0 auto' }}>{m.year}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
