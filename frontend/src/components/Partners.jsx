import React from 'react';

const logos = [
  "/logo/WhatsApp Image 2026-05-02 at 1.38.09 PM.jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.10 PM (1).jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.10 PM (2).jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.10 PM.jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.11 PM (1).jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.11 PM (2).jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.11 PM.jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.12 PM (1).jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.12 PM (2).jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.12 PM (3).jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.12 PM.jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.13 PM (1).jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.13 PM (2).jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.13 PM.jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.14 PM (1).jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.14 PM (2).jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.14 PM.jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.15 PM (1).jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.15 PM.jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.16 PM (1).jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.16 PM (2).jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.16 PM.jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.17 PM (1).jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.17 PM.jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.18 PM (1).jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.18 PM (2).jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.18 PM.jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.19 PM (1).jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.19 PM (2).jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.19 PM.jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.20 PM (1).jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.20 PM (2).jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.20 PM.jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.21 PM (1).jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.21 PM (2).jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.21 PM.jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.22 PM (1).jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.22 PM (2).jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.22 PM.jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.23 PM (1).jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.23 PM.jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.24 PM (1).jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.24 PM (2).jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.24 PM.jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.25 PM (1).jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.25 PM (2).jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.25 PM.jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.26 PM (1).jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.26 PM.jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.27 PM (1).jpeg",
  "/logo/WhatsApp Image 2026-05-02 at 1.38.27 PM.jpeg",
];

const Partners = () => {
  return (
    <div style={{
      width: '100%',
      padding: '60px 20px',
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: 'rgba(255, 255, 255, 0.3)',
      backdropFilter: 'blur(16px)',
      borderTop: '1px solid rgba(255, 255, 255, 0.6)',
      boxShadow: '0 -10px 30px rgba(0,0,0,0.02)'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--blue-dark)', marginBottom: '12px' }}>
          Our Partners
        </h2>
        <p style={{ fontSize: '16px', color: 'var(--text-secondary)', fontWeight: 500 }}>
          Health & Life Insurance partners for your financial freedom
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
        gap: '16px',
        width: '100%',
        maxWidth: '1200px',
      }}>
        {logos.map((logo, index) => (
          <div
            key={index}
            style={{
              background: '#ffffff',
              borderRadius: '12px',
              padding: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
              border: '1px solid #f1f5f9',
              transition: 'all 0.3s',
              cursor: 'pointer',
              minHeight: '80px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.04)';
            }}
          >
            <img
              src={logo}
              alt={`Partner ${index + 1}`}
              style={{
                width: '70px',
                height: '70px',
                objectFit: 'contain',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
