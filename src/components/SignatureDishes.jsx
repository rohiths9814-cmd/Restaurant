import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const dishes = [
  { name: 'Hyderabadi Dum Biryani', desc: 'Slow-cooked basmati layered with aromatic spices & tender meat', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80' },
  { name: 'Tom Yum Kung', desc: 'Spicy-sour prawn soup with lemongrass, galangal & kaffir lime', image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=600&q=80' },
  { name: 'Butter Chicken', desc: 'Tender tandoori chicken in rich, creamy tomato-butter gravy', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80' },
  { name: 'Grilled Lamb Chops', desc: 'Herb-crusted lamb with rosemary jus & roasted garlic', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80' },
  { name: 'Pad Thai', desc: 'Wok-tossed rice noodles with tamarind, peanuts & fresh lime', image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=600&q=80' },
  { name: 'Dragon Roll Platter', desc: 'Crispy golden rolls with prawns, vegetables & sweet chili glaze', image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=80' },
  { name: 'Truffle Pasta', desc: 'Al dente pappardelle with wild mushrooms & truffle oil', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80' },
  { name: 'Mutton Chettinad', desc: 'Fiery South Indian mutton curry with black pepper & fennel', image: 'https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=600&q=80' },
];

export default function SignatureDishes() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);

  const startAutoplay = () => {
    intervalRef.current = setInterval(() => {
      setActive((p) => (p + 1) % dishes.length);
    }, 4000);
  };

  useEffect(() => {
    startAutoplay();
    return () => clearInterval(intervalRef.current);
  }, []);

  const goTo = (i) => {
    clearInterval(intervalRef.current);
    setActive(i);
    startAutoplay();
  };

  return (
    <section
      id="menu"
      style={{ position: 'relative', padding: 'clamp(80px, 10vw, 130px) 0', background: 'var(--bg-primary)', overflow: 'hidden' }}
    >
      {/* Floating ingredients */}
      <img src="/assets/chili.png" alt="" className="floating-ingredient"
        style={{ top: '8%', right: '5%', width: '45px', opacity: 0.2, animation: 'floatDrift 9s ease-in-out infinite' }} />
      <img src="/assets/curry-leaf.png" alt="" className="floating-ingredient"
        style={{ bottom: '10%', left: '3%', width: '55px', opacity: 0.18, animation: 'floatDrift2 12s ease-in-out infinite', animationDelay: '3s' }} />
      <img src="/assets/coriander.png" alt="" className="floating-ingredient"
        style={{ top: '50%', left: '6%', width: '40px', opacity: 0.15, animation: 'floatDrift 6s ease-in-out infinite', animationDelay: '1s' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-label">
            Our Menu
          </motion.span>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ margin: '12px auto 8px' }}>
            <svg width="120" height="12" viewBox="0 0 120 12" style={{ display: 'block', margin: '0 auto' }}>
              <motion.path d="M2 8 Q30 2 60 7 Q90 12 118 5" fill="none" stroke="var(--saffron)" strokeWidth="2" strokeLinecap="round" strokeDasharray="300"
                initial={{ strokeDashoffset: 300 }} whileInView={{ strokeDashoffset: 0 }} viewport={{ once: true }} transition={{ duration: 1.5 }} />
            </svg>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="section-heading" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
            Signature <span className="text-saffron-gradient" style={{ fontStyle: 'italic' }}>Dishes</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
            className="section-subheading" style={{ maxWidth: '500px', margin: '12px auto 0', fontSize: '17px' }}>
            Our flavoursome specialties will excite your palate — crafted from a legacy of tradition
          </motion.p>
        </div>

        {/* Carousel */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
          {/* Cards row */}
          <div style={{
            display: 'flex', gap: '20px', overflowX: 'auto', scrollSnapType: 'x mandatory',
            padding: '20px 0 30px', scrollbarWidth: 'none',
          }}
            className="[&::-webkit-scrollbar]:hidden"
          >
            {dishes.map((dish, i) => (
              <div
                key={i}
                onClick={() => goTo(i)}
                style={{
                  flex: '0 0 280px', scrollSnapAlign: 'start',
                  borderRadius: '16px', overflow: 'hidden', position: 'relative',
                  height: '380px', cursor: 'pointer',
                  border: i === active ? '1.5px solid rgba(232,160,32,0.4)' : '1px solid rgba(232,160,32,0.08)',
                  transform: i === active ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: i === active ? '0 12px 40px rgba(232,160,32,0.15)' : '0 4px 20px rgba(0,0,0,0.3)',
                  transition: 'all 0.4s ease',
                  background: 'var(--bg-card)',
                }}
              >
                <img src={dish.image} alt={dish.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s' }}
                  loading="lazy"
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                />
                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, padding: '60px 20px 20px',
                  background: 'linear-gradient(to top, rgba(8,8,8,0.95) 10%, rgba(8,8,8,0.6) 50%, transparent 100%)',
                }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 600, color: 'var(--cream)', marginBottom: '6px' }}>
                    {dish.name}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-sub)', fontSize: '14px', color: 'var(--text-secondary)', fontStyle: 'italic', lineHeight: 1.5 }}>
                    {dish.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '8px' }}>
            {dishes.map((_, i) => (
              <button key={i} onClick={() => goTo(i)}
                style={{
                  width: i === active ? '24px' : '8px', height: '8px', borderRadius: '4px',
                  background: i === active ? 'var(--saffron)' : 'var(--text-muted)',
                  opacity: i === active ? 1 : 0.3, transition: 'all 0.3s',
                }}
                aria-label={`Dish ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
