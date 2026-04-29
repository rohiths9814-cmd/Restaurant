import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const RAZORPAY_KEY = 'rzp_test_1DP5mmOlF5G5ag';
const PRICE_PER_GUEST = 200;

export default function BookingPage() {
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '', guests: 2, email: '' });
  const [status, setStatus] = useState('idle'); // idle | processing | success | error
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.phone.trim() || form.phone.trim().length < 10) e.phone = 'Valid phone required';
    if (!form.date) e.date = 'Required';
    if (!form.time) e.time = 'Required';
    if (!form.email.trim() || !form.email.includes('@')) e.email = 'Valid email required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('processing');

    const amount = form.guests * PRICE_PER_GUEST * 100;
    const options = {
      key: RAZORPAY_KEY,
      amount,
      currency: 'INR',
      name: 'Rasikas Grand Fusion',
      description: `Table for ${form.guests} — ${form.date} at ${form.time}`,
      image: '/favicon.svg',
      handler: () => setStatus('success'),
      modal: { ondismiss: () => setStatus('idle') },
      prefill: { name: form.name, contact: form.phone, email: form.email },
      theme: { color: '#e8a020' },
    };

    try {
      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', () => setStatus('error'));
      rzp.open();
    } catch {
      setStatus('error');
    }
  };

  const handleRipple = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
    ripple.style.top = e.clientY - rect.top - size / 2 + 'px';
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  const totalAmount = form.guests * PRICE_PER_GUEST;

  if (status === 'success') {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-primary)', padding: '24px' }}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="glass-card"
          style={{ maxWidth: '480px', width: '100%', padding: '48px', textAlign: 'center' }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            style={{
              width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto 24px',
              background: 'rgba(232,160,32,0.1)', border: '2px solid var(--saffron)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--saffron)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </motion.div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: 'var(--cream)', marginBottom: '12px' }}>
            Reservation <span className="text-saffron-gradient" style={{ fontStyle: 'italic' }}>Confirmed!</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-sub)', fontSize: '16px', color: 'var(--text-secondary)', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '8px' }}>
            Thank you, {form.name}. Your table for {form.guests} is booked on {form.date} at {form.time}.
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '28px' }}>
            A confirmation has been sent to {form.email}
          </p>
          <Link to="/" className="btn-saffron">Return to Home</Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
      {/* Background decorations */}
      <img src="/assets/mandala.png" alt="" style={{
        position: 'absolute', top: '-80px', right: '-80px', width: '350px', opacity: 0.06, pointerEvents: 'none',
        filter: 'sepia(1) hue-rotate(-10deg) brightness(1.3)',
      }} />
      <img src="/assets/spice-splash.png" alt="" style={{
        position: 'absolute', bottom: '-50px', left: '-50px', width: '300px', opacity: 0.08, pointerEvents: 'none',
        transform: 'rotate(30deg)',
      }} />
      <img src="/assets/curry-leaf.png" alt="" className="floating-ingredient"
        style={{ top: '30%', right: '5%', width: '60px', opacity: 0.12, animation: 'floatDrift 10s ease-in-out infinite' }} />

      {/* Top bar */}
      <div style={{
        padding: '18px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: '1px solid rgba(232,160,32,0.08)',
      }}>
        <Link to="/" style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, color: 'var(--saffron)', letterSpacing: '3px', lineHeight: 1 }}>RASIKAS</span>
          <span style={{ fontFamily: 'var(--font-sub)', fontSize: '9px', letterSpacing: '3px', color: 'var(--text-secondary)', textTransform: 'uppercase', fontStyle: 'italic' }}>Grand Fusion</span>
        </Link>
        <Link to="/" style={{
          fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '2px', color: 'var(--text-secondary)', textTransform: 'uppercase',
          display: 'flex', alignItems: 'center', gap: '6px',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back
        </Link>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: 'clamp(40px, 6vw, 80px) 24px' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="section-label" style={{ display: 'block', textAlign: 'center', marginBottom: '8px' }}>Reservations</span>
          <div className="ornament-divider" style={{ margin: '0 auto 16px' }}>
            <span style={{ color: 'var(--saffron)', fontSize: '14px' }}>❖</span>
          </div>
          <h1 className="section-heading" style={{ fontSize: 'clamp(28px, 5vw, 40px)', textAlign: 'center', marginBottom: '12px' }}>
            Reserve Your <span className="text-saffron-gradient" style={{ fontStyle: 'italic' }}>Experience</span>
          </h1>
          <p className="section-subheading" style={{ textAlign: 'center', maxWidth: '440px', margin: '0 auto 40px', fontSize: '16px' }}>
            Secure your table with a booking fee of ₹{PRICE_PER_GUEST} per guest, adjustable against your final bill.
          </p>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="glass-card"
          style={{ padding: 'clamp(28px, 5vw, 40px)' }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '28px', marginBottom: '28px' }}>
            {/* Name */}
            <div className="float-label">
              <input type="text" className="input-heritage" placeholder=" " value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <label>Full Name</label>
              {errors.name && <span style={{ color: 'var(--warm-red)', fontSize: '10px', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
            </div>
            {/* Phone */}
            <div className="float-label">
              <input type="tel" className="input-heritage" placeholder=" " value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              <label>Phone Number</label>
              {errors.phone && <span style={{ color: 'var(--warm-red)', fontSize: '10px', marginTop: '4px', display: 'block' }}>{errors.phone}</span>}
            </div>
            {/* Email */}
            <div className="float-label" style={{ gridColumn: 'span 1' }}>
              <input type="email" className="input-heritage" placeholder=" " value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <label>Email Address</label>
              {errors.email && <span style={{ color: 'var(--warm-red)', fontSize: '10px', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
            </div>
            {/* Guests */}
            <div className="float-label">
              <input type="number" min="1" max="20" className="input-heritage" placeholder=" " value={form.guests}
                onChange={(e) => setForm({ ...form, guests: parseInt(e.target.value) || 1 })} />
              <label>Number of Guests</label>
            </div>
            {/* Date */}
            <div className="float-label">
              <input type="date" className="input-heritage" placeholder=" " value={form.date}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                style={{ colorScheme: 'dark' }} />
              <label>Date</label>
              {errors.date && <span style={{ color: 'var(--warm-red)', fontSize: '10px', marginTop: '4px', display: 'block' }}>{errors.date}</span>}
            </div>
            {/* Time */}
            <div className="float-label">
              <input type="time" className="input-heritage" placeholder=" " value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                style={{ colorScheme: 'dark' }} />
              <label>Time</label>
              {errors.time && <span style={{ color: 'var(--warm-red)', fontSize: '10px', marginTop: '4px', display: 'block' }}>{errors.time}</span>}
            </div>
          </div>

          {/* Price summary */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 16px',
            background: 'rgba(232,160,32,0.06)', borderRadius: '8px', marginBottom: '24px',
            border: '1px solid rgba(232,160,32,0.1)',
          }}>
            <span style={{ fontSize: '18px' }}>💰</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-secondary)' }}>
              Booking fee: <strong style={{ color: 'var(--saffron)' }}>₹{totalAmount}</strong> (₹{PRICE_PER_GUEST} × {form.guests} guests) — adjustable against your bill.
            </span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn-saffron"
            onClick={handleRipple}
            disabled={status === 'processing'}
            style={{
              width: '100%', padding: '16px', position: 'relative', overflow: 'hidden',
              opacity: status === 'processing' ? 0.7 : 1,
            }}
          >
            {status === 'processing' ? (
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 12a9 9 0 11-6.219-8.56"/></svg>
              </motion.div>
            ) : (
              'Reserve & Pay Securely'
            )}
          </button>

          {status === 'error' && (
            <p style={{ color: 'var(--warm-red)', fontSize: '12px', textAlign: 'center', marginTop: '12px' }}>
              Payment failed. Please try again.
            </p>
          )}
        </motion.form>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '32px', flexWrap: 'wrap' }}
        >
          {['🔒 Secure Payment', '✅ Instant Confirmation', '💳 Razorpay Protected'].map((badge) => (
            <span key={badge} style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.5px' }}>
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
