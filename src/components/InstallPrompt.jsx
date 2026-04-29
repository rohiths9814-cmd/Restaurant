import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) return;

    // Check if dismissed recently (24hr cooldown)
    const lastDismiss = localStorage.getItem('pwa-dismiss');
    if (lastDismiss && Date.now() - parseInt(lastDismiss) < 86400000) return;

    // iOS detection — Safari doesn't fire beforeinstallprompt
    const ua = navigator.userAgent;
    const isiOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
    setIsIOS(isiOS);

    if (isiOS) {
      // Show iOS-specific instructions after 5 seconds
      const timer = setTimeout(() => setShow(true), 5000);
      return () => clearTimeout(timer);
    }

    // Android / Chrome — intercept the native prompt
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Show our custom prompt after 3 seconds
      setTimeout(() => setShow(true), 3000);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Also listen for successful install
    window.addEventListener('appinstalled', () => {
      setShow(false);
      setDeferredPrompt(null);
    });

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShow(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setDismissed(true);
    setShow(false);
    localStorage.setItem('pwa-dismiss', Date.now().toString());
  };

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 200 }}
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999,
            width: 'min(380px, calc(100vw - 32px))',
          }}
        >
          <div style={{
            background: 'linear-gradient(135deg, rgba(20,18,14,0.97), rgba(14,14,14,0.97))',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(232,160,32,0.25)',
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 12px 40px rgba(0,0,0,0.6), 0 0 80px rgba(232,160,32,0.08)',
          }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: 'var(--gradient-saffron)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '20px', fontWeight: 700, color: '#080808',
                fontFamily: 'var(--font-display)',
                flexShrink: 0,
              }}>
                R
              </div>
              <div>
                <h4 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '16px', fontWeight: 600,
                  color: 'var(--cream)', margin: 0, lineHeight: 1.2,
                }}>
                  Install Rasikas App
                </h4>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '12px', color: 'var(--text-muted)',
                  margin: '2px 0 0',
                }}>
                  Quick access from your home screen
                </p>
              </div>
              {/* Close button */}
              <button
                onClick={handleDismiss}
                aria-label="Dismiss"
                style={{
                  marginLeft: 'auto', color: 'var(--text-muted)',
                  fontSize: '18px', padding: '4px',
                  lineHeight: 1,
                }}
              >
                ✕
              </button>
            </div>

            {isIOS ? (
              /* iOS instructions */
              <div style={{
                fontFamily: 'var(--font-body)', fontSize: '13px',
                color: 'var(--text-secondary)', lineHeight: 1.6,
              }}>
                <p style={{ marginBottom: '8px' }}>
                  To install this app on your iPhone:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span>1. Tap the <strong style={{ color: 'var(--cream)' }}>Share</strong> button <span style={{ fontSize: '16px' }}>⎙</span></span>
                  <span>2. Scroll down and tap <strong style={{ color: 'var(--cream)' }}>Add to Home Screen</strong></span>
                  <span>3. Tap <strong style={{ color: 'var(--cream)' }}>Add</strong></span>
                </div>
              </div>
            ) : (
              /* Android / Chrome install button */
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={handleDismiss}
                  style={{
                    flex: 1, padding: '12px',
                    fontFamily: 'var(--font-body)', fontSize: '12px',
                    fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    background: 'transparent',
                    border: '1px solid rgba(232,160,32,0.15)',
                    borderRadius: '8px',
                    transition: 'all 0.3s',
                  }}
                >
                  Not Now
                </button>
                <button
                  onClick={handleInstall}
                  style={{
                    flex: 1, padding: '12px',
                    fontFamily: 'var(--font-body)', fontSize: '12px',
                    fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase',
                    color: '#080808',
                    background: 'var(--gradient-saffron)',
                    border: 'none',
                    borderRadius: '8px',
                    transition: 'all 0.3s',
                  }}
                >
                  Install App
                </button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
