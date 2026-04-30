import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const leftLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
];

const rightLinks = [
  { label: 'Menu', href: '/menu' },
  { label: 'Book a Table', href: '/book' },
  {
    label: 'Gallery',
    href: '#',
    children: [
      { label: 'Photos', href: '/photos' },
      { label: 'Video', href: '/video' },
      { label: 'Awards', href: '/awards' },
    ],
  },
];

const allMobileLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Menu', href: '/menu' },
  { label: 'Contact Us', href: '/contact' },
  {
    label: 'Gallery',
    href: '#',
    children: [
      { label: 'Photos', href: '/photos' },
      { label: 'Video', href: '/video' },
      { label: 'Awards', href: '/awards' },
    ],
  },
];

function NavLink({ link, isActive, galleryOpen, setGalleryOpen }) {
  const location = useLocation();
  if (link.children) {
    return (
      <div
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
        <div style={{
          position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
          paddingTop: '12px', opacity: galleryOpen ? 1 : 0,
          pointerEvents: galleryOpen ? 'auto' : 'none', transition: 'opacity 0.25s',
        }}>
          <div style={{
            background: 'rgba(8,8,8,0.95)', backdropFilter: 'blur(14px)',
            border: '1px solid rgba(232,160,32,0.12)', borderRadius: '12px',
            padding: '8px 0', minWidth: '160px', boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
          }}>
            {link.children.map((child) => (
              <Link key={child.label} to={child.href} style={{
                display: 'block', padding: '10px 20px', fontFamily: 'var(--font-body)',
                fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase',
                color: location.pathname === child.href ? 'var(--saffron)' : 'var(--text-secondary)',
                textDecoration: 'none', transition: 'all 0.2s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--saffron)'; e.currentTarget.style.paddingLeft = '24px'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = location.pathname === child.href ? 'var(--saffron)' : 'var(--text-secondary)'; e.currentTarget.style.paddingLeft = '20px'; }}
              >{child.label}</Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link to={link.href} style={{
      fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '2.5px', fontWeight: 500,
      textTransform: 'uppercase', textDecoration: 'none', position: 'relative', padding: '4px 0',
      color: isActive ? 'var(--saffron)' : 'var(--text-secondary)', transition: 'color 0.3s',
    }}>
      {link.label}
    </Link>
  );
}

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

  useEffect(() => {
    setMobileOpen(false);
    setGalleryOpen(false);
  }, [location.pathname]);

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/' || location.pathname === '/home';
    return location.pathname === href;
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: scrolled ? '10px 0' : '14px 0',
      background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(232,160,32,0.08)' : 'none',
      transition: 'all 0.4s ease',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto', padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Left links — desktop */}
        <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '28px', flex: 1 }}>
          {leftLinks.map((link) => (
            <NavLink key={link.label} link={link} isActive={isActive(link.href)}
              galleryOpen={galleryOpen} setGalleryOpen={setGalleryOpen} />
          ))}
        </div>

        {/* Center Logo */}
        <Link to="/" style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          textDecoration: 'none', flexShrink: 0, padding: '0 20px',
        }}>
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 700,
            color: 'var(--saffron)', letterSpacing: '4px', lineHeight: 1,
          }}>RASIKAS</span>
          <span style={{
            fontFamily: 'var(--font-sub)', fontSize: '8px', letterSpacing: '5px',
            color: 'var(--text-secondary)', textTransform: 'uppercase', fontStyle: 'italic',
          }}>Grand Fusion</span>
        </Link>

        {/* Right links — desktop */}
        <div className="nav-desktop" style={{
          display: 'flex', alignItems: 'center', gap: '28px', flex: 1, justifyContent: 'flex-end',
        }}>
          {rightLinks.map((link) => (
            <NavLink key={link.label} link={link} isActive={isActive(link.href)}
              galleryOpen={galleryOpen} setGalleryOpen={setGalleryOpen} />
          ))}
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
        {allMobileLinks.map((link) =>
          link.children ? (
            <div key={link.label}>
              <button onClick={() => setGalleryOpen(!galleryOpen)} style={{
                width: '100%', textAlign: 'left', padding: '14px 0',
                fontFamily: 'var(--font-body)', fontSize: '12px', letterSpacing: '2.5px',
                color: 'var(--text-secondary)', textTransform: 'uppercase',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                borderBottom: '1px solid rgba(232,160,32,0.06)',
              }}>
                {link.label}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  style={{ transform: galleryOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
              {galleryOpen && link.children.map((child) => (
                <Link key={child.label} to={child.href} style={{
                  display: 'block', padding: '10px 0 10px 20px',
                  fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '1.5px',
                  color: isActive(child.href) ? 'var(--saffron)' : 'var(--text-muted)',
                  textTransform: 'uppercase', textDecoration: 'none',
                }}>{child.label}</Link>
              ))}
            </div>
          ) : (
            <Link key={link.label} to={link.href} style={{
              padding: '14px 0', fontFamily: 'var(--font-body)', fontSize: '12px', letterSpacing: '2.5px',
              color: isActive(link.href) ? 'var(--saffron)' : 'var(--text-secondary)',
              textTransform: 'uppercase', textDecoration: 'none',
              borderBottom: '1px solid rgba(232,160,32,0.06)',
            }}>{link.label}</Link>
          )
        )}
        <Link to="/book" className="btn-saffron" style={{ marginTop: '20px', textAlign: 'center', textDecoration: 'none', fontSize: '11px' }}>
          Book a Table
        </Link>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div onClick={() => setMobileOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000 }} />
      )}
    </nav>
  );
}
