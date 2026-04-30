import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageLayout from '../layouts/PageLayout';
import menuData from '../data/menuData';

const filters = ['All', 'Veg', 'Non-Veg'];

const VegBadge = ({ isVeg }) => (
  <span style={{
    width: '16px', height: '16px', border: `2px solid ${isVeg ? '#22c55e' : '#ef4444'}`,
    borderRadius: '3px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  }}>
    <span style={{
      width: '8px', height: '8px', borderRadius: '50%',
      background: isVeg ? '#22c55e' : '#ef4444',
    }} />
  </span>
);

export default function MenuPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeCategory, setActiveCategory] = useState(null);

  const filteredData = menuData.filter((cat) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Veg') return cat.type === 'veg' || cat.type === 'mixed';
    return cat.type === 'nonveg' || cat.type === 'mixed';
  });

  const categories = filteredData.map((c) => c.category);

  return (
    <PageLayout title="Menu">
      {/* Hero Banner */}
      <section style={{
        position: 'relative', paddingTop: '140px', paddingBottom: '60px',
        background: 'var(--bg-primary)', textAlign: 'center', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.03, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(232,160,32,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(232,160,32,0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-label">
          Our Menu
        </motion.span>
        <div className="ornament-divider" style={{ margin: '12px auto 16px' }}>
          <span style={{ color: 'var(--saffron)', fontSize: '16px' }}>❖</span>
        </div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="section-heading" style={{ fontSize: 'clamp(32px, 5vw, 52px)', marginBottom: '16px' }}>
          A Feast of <span className="text-saffron-gradient" style={{ fontStyle: 'italic' }}>Flavours</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="section-subheading" style={{ maxWidth: '500px', margin: '0 auto', fontSize: '16px' }}>
          Thai · Chinese · Indian · Continental
        </motion.p>
      </section>

      {/* Sticky Filter Bar */}
      <div style={{
        position: 'sticky', top: '60px', zIndex: 50,
        background: 'rgba(8,8,8,0.92)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(232,160,32,0.08)', padding: '14px 0',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {filters.map((f) => (
            <button key={f} onClick={() => setActiveFilter(f)} style={{
              padding: '8px 22px', borderRadius: '100px', fontSize: '11px', fontWeight: 600,
              letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'var(--font-body)',
              background: activeFilter === f ? 'var(--gradient-saffron)' : 'transparent',
              color: activeFilter === f ? '#080808' : 'var(--text-secondary)',
              border: activeFilter === f ? 'none' : '1px solid rgba(232,160,32,0.2)',
              transition: 'all 0.3s', cursor: 'pointer',
            }}>
              {f}
            </button>
          ))}
        </div>
        {/* Category quick-jump */}
        <div style={{
          maxWidth: '1200px', margin: '10px auto 0', padding: '0 20px',
          display: 'flex', gap: '8px', overflowX: 'auto', justifyContent: 'center', flexWrap: 'wrap',
        }}>
          {categories.map((cat) => (
            <button key={cat} onClick={() => {
              setActiveCategory(cat);
              document.getElementById(cat.replace(/\s+/g, '-'))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }} style={{
              padding: '4px 14px', borderRadius: '100px', fontSize: '10px',
              letterSpacing: '1px', textTransform: 'uppercase', fontFamily: 'var(--font-body)',
              background: 'transparent', color: 'var(--text-muted)', whiteSpace: 'nowrap',
              border: '1px solid rgba(232,160,32,0.08)', transition: 'all 0.3s', cursor: 'pointer',
            }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Categories */}
      <section style={{ background: 'var(--bg-secondary)', padding: '40px 0 80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          <AnimatePresence mode="wait">
            {filteredData.map((category, ci) => (
              <motion.div
                key={category.category}
                id={category.category.replace(/\s+/g, '-')}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: ci * 0.03 }}
                style={{ marginBottom: '48px', scrollMarginTop: '160px' }}
              >
                {/* Category Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <h2 style={{
                    fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 3vw, 28px)',
                    fontWeight: 600, color: 'var(--cream)', whiteSpace: 'nowrap',
                  }}>
                    {category.category}
                  </h2>
                  <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, rgba(232,160,32,0.3), transparent)' }} />
                  <span style={{
                    fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase',
                    color: category.type === 'veg' ? '#22c55e' : category.type === 'nonveg' ? '#ef4444' : 'var(--saffron)',
                    fontFamily: 'var(--font-body)', fontWeight: 600,
                  }}>
                    {category.type === 'mixed' ? 'VEG & NON-VEG' : category.type.toUpperCase()}
                  </span>
                </div>

                {/* Items */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  {category.items
                    .filter((item) => {
                      if (activeFilter === 'All') return true;
                      if (activeFilter === 'Veg') return item.isVeg;
                      return !item.isVeg;
                    })
                    .map((item, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'flex-start', gap: '12px',
                      padding: '14px 16px', borderRadius: '8px',
                      background: i % 2 === 0 ? 'rgba(232,160,32,0.02)' : 'transparent',
                      transition: 'background 0.2s',
                    }}>
                      <VegBadge isVeg={item.isVeg} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h3 style={{
                          fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600,
                          color: 'var(--cream)', lineHeight: 1.3,
                        }}>
                          {item.name}
                        </h3>
                        <p style={{
                          fontFamily: 'var(--font-body)', fontSize: '12px',
                          color: 'var(--text-muted)', lineHeight: 1.5, marginTop: '2px',
                        }}>
                          {item.desc}
                        </p>
                      </div>
                      <span style={{
                        fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 600,
                        color: 'var(--saffron)', whiteSpace: 'nowrap', flexShrink: 0,
                      }}>
                        ₹{item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </PageLayout>
  );
}
