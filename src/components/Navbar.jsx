import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Our Gallery',
    href: '#',
    children: [
      { label: 'Photos', href: '/photos' },
      { label: 'Video', href: '/video' },
      { label: 'Awards', href: '/awards' },
    ],
  },
  { label: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setGalleryOpen(false);
  }, [location.pathname]);

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/' || location.pathname === '/home';
    return location.pathname === href;
  };

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? '12px 0' : '18px 0',
        background: scrolled ? 'rgba(8,8,8,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(232,160,32,0.08)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 700, color: 'var(--saffron)',
            letterSpacing: '4px', lineHeight: 1, transition: 'text-shadow 0.3s',
          }}
            className="logo-glow"
          >RASIKAS</span>
          <span style={{
            fontFamily: 'var(--font-sub)', fontSize: '9px', letterSpacing: '5px',
            color: 'var(--text-secondary)', textTransform: 'uppercase', fontStyle: 'italic',
          }}>Grand Fusion</span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}
          className="nav-desktop"
        >
          {navLinks.map((link) =>
            link.children ? (
              /* Gallery dropdown */
              <div
                key={link.label}
                style={{ position: 'relative' }}
                onMouseEnter={() => setGalleryOpen(true)}
                onMouseLeave={() => setGalleryOpen(false)}
              >
                <button style={{
                  fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '2.5px', fontWeight: 500,
                  textTransform: 'uppercase',
                  color: ['/photos', '/video', '/awards'].includes(location.pathname) ? 'var(--saffron)' : 'var(--text-secondary)',
                  transition: 'color 0.3s', display: 'flex', alignItems: 'center', gap: '5px',
                }}>
                  {link.label}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    style={{ transform: galleryOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>
                {/* Dropdown */}
                <div style={{
                  position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                  paddingTop: '12px',
                  opacity: galleryOpen ? 1 : 0,
                  pointerEvents: galleryOpen ? 'auto' : 'none',
                  transition: 'opacity 0.25s, transform 0.25s',
                }}>
                  <div style={{
                    background: 'rgba(8,8,8,0.95)', backdropFilter: 'blur(14px)',
                    border: '1px solid rgba(232,160,32,0.12)', borderRadius: '12px',
                    padding: '8px 0', minWidth: '160px',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
                  }}>
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        style={{
                          display: 'block', padding: '10px 20px',
                          fontFamily: 'var(--font-body)', fontSize: '12px', letterSpacing: '1.5px',
                          color: isActive(child.href) ? 'var(--saffron)' : 'var(--text-secondary)',
                          textTransform: 'uppercase', transition: 'all 0.2s',
                          textDecoration: 'none',
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--saffron)'; e.currentTarget.style.paddingLeft = '24px'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = isActive(child.href) ? 'var(--saffron)' : 'var(--text-secondary)'; e.currentTarget.style.paddingLeft = '20px'; }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Normal link */
              <Link
                key={link.label}
                to={link.href}
                className="nav-link-heritage"
                style={{
                  fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '2.5px', fontWeight: 500,
                  textTransform: 'uppercase', textDecoration: 'none', position: 'relative', padding: '4px 0',
                  color: isActive(link.href) ? 'var(--saffron)' : 'var(--text-secondary)',
                  transition: 'color 0.3s',
                }}
              >
                {link.label}
              </Link>
            )
          )}

          {/* CTA */}
          <Link to="/book" className="btn-gold-outline" style={{ fontSize: '10px', padding: '10px 22px', letterSpacing: '2px' }}>
            Book a Table
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="nav-mobile-toggle"
          style={{ display: 'none', flexDirection: 'column', gap: '5px', cursor: 'pointer' }}
          aria-label="Toggle menu"
        >
          <span style={{ width: '24px', height: '2px', background: 'var(--saffron)', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <span style={{ width: '24px', height: '2px', background: 'var(--saffron)', transition: 'all 0.3s', opacity: mobileOpen ? 0 : 1 }} />
          <span style={{ width: '24px', height: '2px', background: 'var(--saffron)', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, width: '280px',
        background: 'rgba(8,8,8,0.98)', backdropFilter: 'blur(20px)',
        transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.35s ease', zIndex: 1001,
        padding: '80px 24px 24px', display: 'flex', flexDirection: 'column', gap: '4px',
        borderLeft: '1px solid rgba(232,160,32,0.08)',
      }}>
        {navLinks.map((link) =>
          link.children ? (
            <div key={link.label}>
              <button
                onClick={() => setGalleryOpen(!galleryOpen)}
                style={{
                  width: '100%', textAlign: 'left', padding: '14px 0',
                  fontFamily: 'var(--font-body)', fontSize: '12px', letterSpacing: '2.5px',
                  color: 'var(--text-secondary)', textTransform: 'uppercase',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(232,160,32,0.06)',
                }}
              >
                {link.label}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  style={{ transform: galleryOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
              {galleryOpen && link.children.map((child) => (
                <Link
                  key={child.label}
                  to={child.href}
                  style={{
                    display: 'block', padding: '10px 0 10px 20px',
                    fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '1.5px',
                    color: isActive(child.href) ? 'var(--saffron)' : 'var(--text-muted)',
                    textTransform: 'uppercase', textDecoration: 'none',
                  }}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ) : (
            <Link
              key={link.label}
              to={link.href}
              style={{
                padding: '14px 0', fontFamily: 'var(--font-body)', fontSize: '12px', letterSpacing: '2.5px',
                color: isActive(link.href) ? 'var(--saffron)' : 'var(--text-secondary)',
                textTransform: 'uppercase', textDecoration: 'none',
                borderBottom: '1px solid rgba(232,160,32,0.06)',
              }}
            >
              {link.label}
            </Link>
          )
        )}
        <Link to="/book" className="btn-saffron" style={{ marginTop: '20px', textAlign: 'center', textDecoration: 'none', fontSize: '11px' }}>
          Book a Table
        </Link>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000 }}
        />
      )}
    </nav>
  );
}
