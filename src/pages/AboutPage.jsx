import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import PageLayout from '../layouts/PageLayout';

const timeline = [
  { year: '2002', title: 'The Beginning', desc: 'Two brothers opened RASIKAS, a humble Chinese & Indian restaurant in Salem, dreaming of creating the city\'s finest multi-cuisine dining experience.' },
  { year: '2008', title: 'Expansion', desc: 'Demand grew rapidly. RASIKAS expanded its kitchen and introduced Thai cuisine, becoming Salem\'s first true fusion restaurant.' },
  { year: '2012', title: 'Grand Transformation', desc: 'The restaurant was rebuilt and re-branded as "Rasikas Grand Fusion" — a luxurious, spacious fine dining destination with a bar and banquet hall.' },
  { year: '2016', title: 'Continental Chapter', desc: 'European-trained chefs joined the team, bringing Continental cuisine — pastas, grills, and gourmet desserts — to complete the four-cuisine fusion.' },
  { year: '2020', title: 'Digital Presence', desc: 'Despite the pandemic, Rasikas adapted with online ordering, cloud kitchen delivery, and a refreshed brand identity across social media.' },
  { year: '2024', title: '22 Years Strong', desc: 'With 1000+ daily guests, multiple awards, and a loyal following, Rasikas Grand Fusion stands as Salem\'s undisputed culinary landmark.' },
];

const values = [
  { icon: '🔥', title: '5 Sacred Spices', desc: 'Our secret blend of five hand-ground spices forms the soul of every dish — a recipe passed down through four generations.' },
  { icon: '🫕', title: '5 Signature Sauces', desc: 'From Thai sweet chili to Chettinad gravy — five master sauces define our cross-cuisine identity.' },
  { icon: '🌿', title: 'Farm to Table', desc: 'We source vegetables daily from local Salem farms and premium proteins from trusted suppliers.' },
  { icon: '👨‍🍳', title: 'Master Chefs', desc: 'Four cuisine-specialist chefs lead our kitchen, each with 15+ years of expertise in their tradition.' },
];

export default function AboutPage() {
  const tlRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: tlRef, offset: ['start end', 'end start'] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <PageLayout title="About Us">
      {/* Hero banner */}
      <section style={{
        minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'linear-gradient(to bottom, rgba(8,8,8,0.7), var(--bg-primary))',
        position: 'relative', paddingTop: '80px',
      }}>
        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80"
          alt="Restaurant interior" loading="lazy"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.2 }} />
        <div style={{ position: 'relative', zIndex: 5, textAlign: 'center', padding: '40px 24px' }}>
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-label">Our Story</motion.span>
          <div className="ornament-divider" style={{ margin: '12px auto' }}>
            <span style={{ color: 'var(--saffron)', fontSize: '14px' }}>❖</span>
          </div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="section-heading" style={{ fontSize: 'clamp(36px, 6vw, 56px)' }}>
            A Journey of <span className="text-saffron-gradient" style={{ fontStyle: 'italic' }}>Flavours</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="section-subheading" style={{ maxWidth: '600px', margin: '16px auto 0', fontSize: '18px' }}>
            130 years of spice mastery. 22 years of Salem's finest fusion.
          </motion.p>
        </div>
      </section>

      {/* Story prose */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          {[
            'Twenty-two years ago, two brothers set out with a humble dream — to serve Salem\'s food lovers the finest Chinese and Indian delicacies. What began as RASIKAS quickly grew into the city\'s most beloved dining destination.',
            'Today, Rasikas Grand Fusion is the culmination of that dream — a sanctuary where Thai, Chinese, Indian & Continental cuisines converge in aromatic harmony.',
            'Our chefs weave together creamy curries, fragrant sauces, flavourful snacks, and sinful sweets, all crafted with the freshest ingredients and a legacy of spice mastery that runs four generations deep.',
          ].map((p, i) => (
            <motion.p key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '18px' }}>
              {p}
            </motion.p>
          ))}
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
            style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontStyle: 'italic', color: 'var(--saffron)', marginTop: '24px' }}>
            "We live by 5 sauces and 5 spices — the secret behind the unmistakable Taste of Flavours."
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section ref={tlRef} style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
        <img src="/assets/mandala.png" alt="" style={{ position: 'absolute', top: '-60px', right: '-60px', width: '280px', opacity: 0.05, pointerEvents: 'none' }} />
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label">Our Journey</span>
            <h2 className="section-heading" style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginTop: '12px' }}>
              A Timeline of <span className="text-saffron-gradient" style={{ fontStyle: 'italic' }}>Success</span>
            </h2>
          </div>

          <div style={{ position: 'relative', paddingLeft: '40px' }}>
            {/* Animated vertical line */}
            <div style={{ position: 'absolute', left: '14px', top: 0, bottom: 0, width: '2px', background: 'rgba(232,160,32,0.1)' }} />
            <motion.div style={{
              position: 'absolute', left: '14px', top: 0, width: '2px',
              background: 'var(--gradient-saffron)', height: lineHeight,
            }} />

            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ marginBottom: '40px', position: 'relative' }}
              >
                {/* Dot */}
                <div style={{
                  position: 'absolute', left: '-33px', top: '4px',
                  width: '12px', height: '12px', borderRadius: '50%',
                  background: 'var(--saffron)', border: '3px solid var(--bg-secondary)',
                  boxShadow: '0 0 10px rgba(232,160,32,0.3)',
                }} />
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 700, color: 'var(--saffron)', letterSpacing: '2px' }}>
                  {item.year}
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--cream)', marginTop: '4px', marginBottom: '8px' }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label">What Defines Us</span>
            <h2 className="section-heading" style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginTop: '12px' }}>
              Our <span className="text-saffron-gradient" style={{ fontStyle: 'italic' }}>Pillars</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '20px' }}>
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }} className="glass-card" style={{ padding: '32px 24px', textAlign: 'center' }}>
                <span style={{ fontSize: '36px', display: 'block', marginBottom: '16px' }}>{v.icon}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', color: 'var(--cream)', marginBottom: '10px' }}>{v.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.7 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
