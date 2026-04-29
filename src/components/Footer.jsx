import { motion } from 'framer-motion';

const quickLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About Us', href: '/#about' },
  { label: 'Menu', href: '/#menu' },
  { label: 'Cuisines', href: '/#cuisines' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Book a Table', href: '/book' },
];

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

export default function Footer() {
  const scrollTo = (href) => {
    if (href.startsWith('/')) { window.location.href = href; return; }
    const id = href.replace('/#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" style={{
      position: 'relative', paddingTop: '60px', paddingBottom: '24px',
      background: 'var(--bg-primary)',
    }}>
      {/* Top saffron gradient divider */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(to right, transparent, var(--saffron), transparent)',
        opacity: 0.35,
      }} />

      {/* Floating curry leaf BG */}
      <img src="/assets/curry-leaf.png" alt="" style={{
        position: 'absolute', bottom: '40px', right: '40px',
        width: '100px', opacity: 0.06, pointerEvents: 'none',
        animation: 'slowSpin 35s linear infinite',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '40px', marginBottom: '40px' }}>
          {/* Col 1: Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 700, color: 'var(--saffron)', letterSpacing: '3px', display: 'block', lineHeight: 1 }}>
              RASIKAS
            </span>
            <span style={{ fontFamily: 'var(--font-sub)', fontSize: '11px', letterSpacing: '4px', color: 'var(--text-secondary)', textTransform: 'uppercase', fontStyle: 'italic' }}>
              Grand Fusion
            </span>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-muted)', marginTop: '16px', lineHeight: 1.7, maxWidth: '280px' }}>
              A Fusion of Flavours since 2002. Where four culinary traditions create unforgettable dining memories in the heart of Salem.
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              {[InstagramIcon, FacebookIcon].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social"
                  style={{
                    width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: '1px solid var(--glass-border)', color: 'var(--text-secondary)', transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--saffron)'; e.currentTarget.style.color = 'var(--saffron)'; e.currentTarget.style.transform = 'rotate(8deg) scale(1.1)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.transform = 'none'; }}
                >
                  <Icon />
                </a>
              ))}
              <a href="https://maps.google.com/?q=Rasikas+Grand+Fusion+Salem" target="_blank" rel="noopener noreferrer" aria-label="Maps"
                style={{
                  width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '1px solid var(--glass-border)', color: 'var(--text-secondary)', transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--saffron)'; e.currentTarget.style.color = 'var(--saffron)'; e.currentTarget.style.transform = 'rotate(8deg) scale(1.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.transform = 'none'; }}
              >
                <MapPinIcon />
              </a>
            </div>
          </motion.div>

          {/* Col 2: Quick Links + Hours */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--cream)', marginBottom: '20px' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
                    style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-muted)', transition: 'all 0.3s', display: 'inline-block' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--saffron)'; e.currentTarget.style.paddingLeft = '6px'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.paddingLeft = '0'; }}
                  >{l.label}</a>
                </li>
              ))}
            </ul>
            <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--cream)', marginTop: '28px', marginBottom: '12px' }}>
              Hours
            </h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>
              <ClockIcon style={{ color: 'var(--saffron)' }} />
              <span>Mon – Sun: 11:00 AM – 11:00 PM</span>
            </div>
          </motion.div>

          {/* Col 3: Contact */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--cream)', marginBottom: '20px' }}>
              Contact Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <a href="https://maps.google.com/?q=No.+24,+Greenways+Road,+Fairlands,+Salem" target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                <span style={{ color: 'var(--saffron)', marginTop: '2px', flexShrink: 0 }}><MapPinIcon /></span>
                <span>No. 24, Greenways Road, Fairlands,<br/>Salem, Tamil Nadu - 636016</span>
              </a>
              <a href="tel:+916382262844" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--saffron)' }}><PhoneIcon /></span>+91 63822 62844
              </a>
              <a href="tel:+919994699599" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--saffron)' }}><PhoneIcon /></span>+91 99946 99599
              </a>
              <a href="mailto:rasikasgrandfusion@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--saffron)' }}><MailIcon /></span>rasikasgrandfusion@gmail.com
              </a>
            </div>

            {/* Map */}
            <div style={{ marginTop: '20px', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.8!2d78.12!3d11.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRasikas+Grand+Fusion!5e0!3m2!1sen!2sin!4v1"
                width="100%" height="140"
                style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) brightness(0.75) contrast(1.2)' }}
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Location"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px',
          borderTop: '1px solid rgba(232,160,32,0.08)',
        }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Rasikas Grand Fusion. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase',
              color: 'var(--saffron)', transition: 'transform 0.3s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; }}
          >
            Back to Top
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 15l-6-6-6 6"/></svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
