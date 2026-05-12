import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', paddingBottom: '60px' }}>
      {/* Hero Section */}
      <section style={{ 
        backgroundColor: 'var(--color-green)', 
        color: 'white', 
        padding: '100px 24px', 
        textAlign: 'center',
        backgroundImage: 'linear-gradient(135deg, var(--color-green) 0%, #2d8a00 100%)'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '16px', lineHeight: 1.1 }}>
            Descubre Villa Pehuenia
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '32px', opacity: 0.9, maxWidth: '600px', margin: '0 auto 32px' }}>
            La guía definitiva para tu viaje. Pide delivery, encuentra tu cabaña y reserva excursiones en un solo lugar.
          </p>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '16px', 
            flexWrap: 'wrap' 
          }}>
            <Link href="/comer" className="btn-primary" style={{ fontSize: '1.1rem' }}>
              🍔 Qué comer
            </Link>
            <Link href="/excursiones" className="btn-outline" style={{ borderColor: 'white', color: 'white' }}>
              🧭 Qué hacer
            </Link>
          </div>
        </div>
      </section>

      {/* Categorías Rápidas */}
      <section className="container">
        <h2 className="section-title">Explora PehuenGo</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px'
        }}>
          {[
            { title: "Comer & Delivery", desc: "Pizzas, empanadas, cervezas y más directo a tu cabaña.", link: "/comer", icon: "🍔", color: "var(--color-orange)" },
            { title: "Alojamientos", desc: "Encuentra la cabaña perfecta frente al lago.", link: "/alojarse", icon: "🛏️", color: "var(--color-celeste)" },
            { title: "Excursiones", desc: "Rafting, nieve, paseos en barco y turismo aventura.", link: "/excursiones", icon: "🧭", color: "var(--color-green)" },
            { title: "Comercios", desc: "Kioscos, regalerías y servicios locales.", link: "/comercios", icon: "🛒", color: "var(--color-text-main)" }
          ].map((item) => (
            <Link href={item.link} key={item.title} style={{
              backgroundColor: 'var(--color-surface)',
              borderRadius: 'var(--radius-md)',
              padding: '32px 24px',
              boxShadow: 'var(--shadow-sm)',
              borderTop: `6px solid ${item.color}`,
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              transition: 'var(--transition)'
            }}
            className="home-card"
            >
              <span style={{ fontSize: '3rem' }}>{item.icon}</span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{item.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.4' }}>{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
