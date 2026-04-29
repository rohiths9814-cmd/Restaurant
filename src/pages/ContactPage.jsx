import { useState } from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../layouts/PageLayout';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <PageLayout title="Contact Us">
      {/* Hero */}
      <section style={{
        minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'var(--bg-primary)', paddingTop: '100px', paddingBottom: '20px',
      }}>
        <div style={{ textAlign: 'center' }}>
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-label">Get in Touch</motion.span>
          <div className="ornament-divider" style={{ margin: '12px auto' }}>
            <span style={{ color: 'var(--saffron)', fontSize: '14px' }}>❖</span>
          </div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="section-heading" style={{ fontSize: 'clamp(36px, 6vw, 52px)' }}>
            Contact <span className="text-saffron-gradient" style={{ fontStyle: 'italic' }}>Us</span>
          </motion.h1>
        </div>
      </section>

      <section style={{ padding: '0 0 clamp(60px, 8vw, 100px)', background: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '40px' }}>
            {/* Contact Info + Map */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: 'var(--cream)', marginBottom: '24px' }}>
                Visit <span style={{ color: 'var(--saffron)', fontStyle: 'italic' }}>Us</span>
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <span style={{ color: 'var(--saffron)', fontSize: '20px', marginTop: '2px' }}>📍</span>
                  <div>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--cream)', marginBottom: '4px', fontWeight: 500 }}>Address</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                      No. 24, Greenways Road, Fairlands,<br/>Salem, Tamil Nadu - 636016
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <span style={{ color: 'var(--saffron)', fontSize: '20px', marginTop: '2px' }}>📞</span>
                  <div>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--cream)', marginBottom: '4px', fontWeight: 500 }}>Phone</p>
                    <a href="tel:+916382262844" style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-muted)', display: 'block' }}>+91 63822 62844</a>
                    <a href="tel:+919994699599" style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-muted)', display: 'block' }}>+91 99946 99599</a>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <span style={{ color: 'var(--saffron)', fontSize: '20px', marginTop: '2px' }}>📧</span>
                  <div>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--cream)', marginBottom: '4px', fontWeight: 500 }}>Email</p>
                    <a href="mailto:rasikasgrandfusion@gmail.com" style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-muted)' }}>rasikasgrandfusion@gmail.com</a>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <span style={{ color: 'var(--saffron)', fontSize: '20px', marginTop: '2px' }}>🕐</span>
                  <div>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--cream)', marginBottom: '4px', fontWeight: 500 }}>Hours</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-muted)' }}>Mon – Sun: 11:00 AM – 11:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(232,160,32,0.1)', height: '250px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.8!2d78.12!3d11.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRasikas+Grand+Fusion!5e0!3m2!1sen!2sin!4v1"
                  width="100%" height="100%"
                  style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) brightness(0.75) contrast(1.2)' }}
                  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="Location"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: 'var(--cream)', marginBottom: '24px' }}>
                Write a <span style={{ color: 'var(--saffron)', fontStyle: 'italic' }}>Review</span>
              </h2>

              <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '32px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div className="float-label">
                    <input type="text" className="input-heritage" placeholder=" " value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                    <label>Your Name</label>
                  </div>
                  <div className="float-label">
                    <input type="tel" className="input-heritage" placeholder=" " value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
                    <label>Phone Number</label>
                  </div>
                  <div className="float-label">
                    <input type="email" className="input-heritage" placeholder=" " value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                    <label>Email Address</label>
                  </div>
                  <div className="float-label">
                    <textarea className="input-heritage" placeholder=" " rows={4} value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })} required
                      style={{ resize: 'vertical', minHeight: '100px' }} />
                    <label>Your Review</label>
                  </div>
                  <button type="submit" className="btn-saffron" style={{ width: '100%', padding: '14px' }}>
                    Submit Review
                  </button>
                </div>

                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      textAlign: 'center', marginTop: '16px',
                      fontFamily: 'var(--font-body)', fontSize: '13px', color: '#4ade80',
                    }}
                  >
                    ✅ Review submitted. Thank you!
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
