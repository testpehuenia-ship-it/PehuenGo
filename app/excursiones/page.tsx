export const metadata = {
  title: 'Excursiones y Actividades en Villa Pehuenia | PehuenGo',
  description: 'Reserva las mejores excursiones, paseos en barco, rafting y actividades de nieve en Villa Pehuenia.',
};

export default function ExcursionesPage() {
  const excursiones = [
    { id: 1, nombre: 'Rafting en el Río Aluminé', desc: 'Aventura para toda la familia con guías expertos. Duración: 3 horas.', tipo: 'Aventura', phone: '5492942000000' },
    { id: 2, nombre: 'Paseo en Barco Lago Aluminé', desc: 'Relájate recorriendo las islas y playas ocultas del lago.', tipo: 'Paseo Náutico', phone: '5492942000000' },
  ];

  return (
    <div className="container" style={{ padding: '40px 24px', minHeight: '60vh' }}>
      <h1 className="section-title">Excursiones y Actividades 🧭</h1>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '32px', fontSize: '1.1rem' }}>
        Reserva las mejores experiencias y aventuras de la zona.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
        {excursiones.map(exc => (
          <div key={exc.id} style={{
            backgroundColor: 'white',
            borderRadius: 'var(--radius-md)',
            padding: '24px',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            border: '1px solid var(--color-border)'
          }}>
            <span style={{ 
              backgroundColor: 'var(--color-primary-summer)', 
              color: 'white',
              padding: '4px 8px', 
              borderRadius: '4px', 
              fontSize: '0.8rem', 
              alignSelf: 'flex-start',
              fontWeight: 600
            }}>
              {exc.tipo}
            </span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{exc.nombre}</h2>
            <p style={{ color: 'var(--color-text-muted)', flexGrow: 1 }}>{exc.desc}</p>
            
            <a href={`https://wa.me/${exc.phone}?text=Hola!%20Quiero%20reservar%20una%20excursión%20(visto%20en%20PehuenGo)`} 
               target="_blank" 
               rel="noopener noreferrer"
               className="btn-primary" 
               style={{ marginTop: '16px', width: '100%', textAlign: 'center' }}>
               Reservar
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
