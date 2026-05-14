export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--color-dark-green)',
      color: 'white',
      padding: '40px 0 100px 0', /* Added bottom padding so the fixed banner doesn't cover it completely */
      marginTop: 'auto'
    }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-orange)' }}>PehueniaGO</h3>
        <p style={{ color: 'rgba(255,255,255,0.9)' }}>La guía oficial y delivery de Villa Pehuenia.</p>
        <div style={{ marginTop: '24px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
          © {new Date().getFullYear()} PehueniaGO. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
