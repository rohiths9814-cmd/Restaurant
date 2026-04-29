import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Menu', href: '/#menu' },
  { label: 'Cuisines', href: '/#cuisines' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    if (location.pathname !== '/' && href.startsWith('/#')) {
      window.location.href = href;
      return;
    }
    const id = href.replace('/#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          padding: scrolled ? '12px 0' : '18px 0',
          background: scrolled ? 'rgba(8,8,8,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(232,160,32,0.08)' : '1px solid transparent',
          transition: 'all 0.5s ease',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a
            href="/#home"
            onClick={(e) => { e.preventDefault(); handleNav('/#home'); }}
            className="group"
            style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}
          >
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '26px',
              fontWeight: 700,
              color: 'var(--saffron)',
              letterSpacing: '3px',
              lineHeight: 1,
              transition: 'filter 0.3s',
            }}
              className="group-hover:drop-shadow-[0_0_12px_rgba(232,160,32,0.5)]"
            >
              RASIKAS
            </span>
            <span style={{
              fontFamily: 'var(--font-sub)',
              fontSize: '10px',
              letterSpacing: '4px',
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              fontStyle: 'italic',
            }}>
              Grand Fusion
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center" style={{ gap: '36px' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '2.5px',
                  textTransform: 'uppercase',
                  color: 'var(--text-secondary)',
                  position: 'relative',
                  paddingBottom: '4px',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--saffron)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
                className="nav-link-hover"
              >
                {link.label}
                <span style={{
                  position: 'absolute',
                  bottom: 0, left: 0,
                  width: '0%', height: '1px',
                  background: 'var(--saffron)',
                  transition: 'width 0.3s ease',
                }}
                  className="nav-underline"
                />
              </a>
            ))}
          </div>

          {/* CTA + Mobile */}
          <div className="flex items-center" style={{ gap: '16px' }}>
            <Link
              to="/book"
              className="hidden md:inline-flex btn-saffron"
              style={{ padding: '10px 24px', fontSize: '10px' }}
            >
              Book a Table
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden"
              style={{ color: 'var(--saffron)', padding: '8px' }}
              aria-label="Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {mobileOpen ? (
                  <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                ) : (
                  <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="18" y2="12"/><line x1="3" y1="18" x2="15" y2="18"/></>
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 999,
              background: 'rgba(8,8,8,0.97)',
              backdropFilter: 'blur(30px)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: '32px',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 + 0.1 }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '24px',
                  color: 'var(--cream)',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <Link to="/book" className="btn-saffron" onClick={() => setMobileOpen(false)}>
                Book a Table
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add hover underline effect via style tag */}
      <style>{`
        .nav-link-hover:hover .nav-underline { width: 100% !important; }
        .group:hover > span:first-child { filter: drop-shadow(0 0 12px rgba(232,160,32,0.5)); }
      `}</style>
    </>
  );
}
