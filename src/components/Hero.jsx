import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const words = ['Welcome', 'to', 'Rasikas', 'Grand', 'Fusion'];

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-primary)',
        overflow: 'hidden',
      }}
    >
      {/* Background texture overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(232,160,32,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Grid pattern */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.02, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(232,160,32,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(232,160,32,0.4) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }} />

      {/* Mandala ornament — top left */}
      <motion.img
        src="/assets/mandala.png"
        alt=""
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.12, scale: 1 }}
        transition={{ delay: 0.5, duration: 1.2 }}
        style={{
          position: 'absolute', top: '-60px', left: '-60px',
          width: '300px', pointerEvents: 'none',
          filter: 'sepia(1) hue-rotate(-10deg) brightness(1.3)',
        }}
      />

      {/* Mandala ornament — bottom right */}
      <motion.img
        src="/assets/mandala.png"
        alt=""
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ delay: 0.7, duration: 1.2 }}
        style={{
          position: 'absolute', bottom: '-60px', right: '-60px',
          width: '280px', pointerEvents: 'none',
          transform: 'rotate(180deg)',
          filter: 'sepia(1) hue-rotate(-10deg) brightness(1.3)',
        }}
      />

      {/* Floating ingredients */}
      <img src="/assets/coriander.png" alt="" className="floating-ingredient"
        style={{ top: '15%', left: '5%', width: '70px', opacity: 0.35,
          animation: 'floatDrift 8s ease-in-out infinite', animationDelay: '0s',
          filter: 'brightness(0.8)',
        }} />
      <img src="/assets/chili.png" alt="" className="floating-ingredient"
        style={{ bottom: '20%', right: '8%', width: '55px', opacity: 0.3,
          animation: 'floatDrift2 10s ease-in-out infinite', animationDelay: '2s',
        }} />
      <img src="/assets/curry-leaf.png" alt="" className="floating-ingredient"
        style={{ top: '60%', left: '8%', width: '50px', opacity: 0.25,
          animation: 'floatDrift 12s ease-in-out infinite', animationDelay: '4s',
          filter: 'brightness(0.7)',
        }} />

      {/* Center content */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 24px', maxWidth: '900px' }}>
        {/* Since badge */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '8px 20px', borderRadius: '100px',
            border: '1px solid rgba(232,160,32,0.3)',
            background: 'rgba(232,160,32,0.06)',
            marginBottom: '28px',
          }}
        >
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '3px', color: 'var(--saffron)', textTransform: 'uppercase', fontWeight: 600 }}>
            ✦ Since 2002 ✦
          </span>
        </motion.div>

        {/* Main hero dish image */}
        <div style={{ position: 'relative', display: 'inline-block', marginBottom: '32px' }}>
          {/* Golden glow halo */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '110%', height: '110%',
            background: 'radial-gradient(circle, rgba(232,160,32,0.15) 0%, rgba(232,160,32,0.05) 40%, transparent 70%)',
            borderRadius: '50%', pointerEvents: 'none',
          }} />

          {/* Dish image with bob animation */}
          <motion.img
            src="/assets/hero-dish.png"
            alt="Signature fusion dish"
            className="smoke-trigger"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            style={{
              width: 'min(350px, 70vw)',
              borderRadius: '16px',
              animation: 'dishBob 3.5s ease-in-out infinite',
              position: 'relative',
              zIndex: 2,
            }}
          />

          {/* Steam wisps */}
          <div className="steam-wisp" style={{ top: '-10px', left: '30%', animationDelay: '0s', animationDuration: '3s' }} />
          <div className="steam-wisp" style={{ top: '-20px', left: '55%', animationDelay: '1s', animationDuration: '3.5s', width: '50px', height: '70px' }} />
          <div className="steam-wisp" style={{ top: '0px', left: '45%', animationDelay: '2s', animationDuration: '4s', width: '40px', height: '60px' }} />
        </div>

        {/* Headline — word by word */}
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '16px' }}>
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                display: 'inline-block',
                marginRight: '0.3em',
                color: (word === 'Rasikas' || word === 'Fusion') ? 'var(--saffron)' : 'var(--cream)',
                fontStyle: word === 'Fusion' ? 'italic' : 'normal',
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          style={{
            fontFamily: 'var(--font-sub)',
            fontSize: 'clamp(16px, 3vw, 20px)',
            color: 'var(--text-secondary)',
            fontStyle: 'italic',
            maxWidth: '600px',
            margin: '0 auto 36px',
            lineHeight: 1.7,
          }}
        >
          Where Thai, Chinese, Indian & Continental cuisines unite in a
          symphony of aromatic spices and unforgettable flavours.
        </motion.p>

        {/* Ornamental divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          style={{ marginBottom: '28px' }}
          className="ornament-divider"
        >
          <span style={{ color: 'var(--saffron)', fontSize: '18px' }}>❖</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.7 }}
          style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '16px' }}
        >
          <button onClick={() => scrollTo('menu')} className="btn-saffron">
            Explore Menu
          </button>
          <Link to="/book" className="btn-gold-outline">
            Book a Table
          </Link>
        </motion.div>
      </div>

      {/* Spice splash — bottom left */}
      <motion.img
        src="/assets/spice-splash.png"
        alt=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 1, duration: 1.5 }}
        style={{
          position: 'absolute', bottom: '-40px', left: '-30px',
          width: '250px', pointerEvents: 'none',
          transform: 'rotate(-15deg)',
          filter: 'brightness(0.8)',
        }}
      />

      {/* Bottom gradient */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px',
        background: 'var(--gradient-dark-bottom)', pointerEvents: 'none',
      }} />

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        style={{
          position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
        }}
      >
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '9px', letterSpacing: '3px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
