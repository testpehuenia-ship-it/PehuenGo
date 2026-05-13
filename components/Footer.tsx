export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--color-primary-winter)',
      color: 'white',
      padding: '40px 0',
      marginTop: 'auto'
    }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>PehueniaGo</h3>
        <p style={{ color: 'rgba(255,255,255,0.8)' }}>La guía oficial y delivery de Villa Pehuenia.</p>
        <div style={{ marginTop: '24px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
          © {new Date().getFullYear()} PehueniaGo. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
