const awards = [
  '🏆 Best Multi-Cuisine Restaurant — Salem 2023',
  '⭐ 4.5★ Google Rating',
  '🍽️ 22+ Years of Culinary Excellence',
  '🌶️ Featured in Salem Food Guide',
  '👨‍🍳 Expert Chefs from 4 Cuisines',
  '🏅 People\'s Choice Award — TN Food Festival',
  '📍 Most Loved Restaurant in Fairlands',
  '🎖️ Certificate of Excellence — Zomato',
];

export default function AwardsTicker() {
  const doubled = [...awards, ...awards];

  return (
    <section style={{
      position: 'relative',
      padding: '24px 0',
      background: 'var(--bg-elevated)',
      borderTop: '1px solid rgba(232,160,32,0.08)',
      borderBottom: '1px solid rgba(232,160,32,0.08)',
      overflow: 'hidden',
    }}>
      <div style={{ overflow: 'hidden' }}>
        <div className="marquee-reverse" style={{ display: 'flex', gap: '40px', width: 'max-content', alignItems: 'center' }}>
          {doubled.map((award, i) => (
            <div
              key={i}
              style={{
                flex: '0 0 auto',
                padding: '8px 24px',
                borderRadius: '100px',
                border: '1px solid rgba(232,160,32,0.15)',
                background: 'rgba(232,160,32,0.04)',
                whiteSpace: 'nowrap',
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                letterSpacing: '0.5px',
                color: 'var(--text-secondary)',
                transition: 'all 0.3s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.08)';
                e.currentTarget.style.borderColor = 'rgba(232,160,32,0.4)';
                e.currentTarget.style.color = 'var(--saffron)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = 'rgba(232,160,32,0.15)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              {award}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
