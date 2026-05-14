'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ALOJAMIENTOS, Alojamiento } from '@/data/alojamientos';

export default function AlojarsePage() {
  const [selectedAlojamiento, setSelectedAlojamiento] = useState<Alojamiento | null>(null);

  const categories = ["Cabañas", "Hoteles", "Hostel", "Campings"];

  const buildWhatsAppUrl = (alojamiento: Alojamiento) => {
    const message = `*Hola ${alojamiento.name}!* \nTe contacto desde PehueniaGO.\nQuisiera consultar disponibilidad y tarifas para alojarme con ustedes.\n\n¡Muchas gracias!`;
    return `https://wa.me/${alojamiento.whatsapp}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="container" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
      
      {/* Banner Principal Responsivo */}
      <div className="responsive-banner">
        <div className="banner-header">
          <div className="banner-title">
            <span style={{ color: 'var(--color-green)' }}>Pehuenia</span>
            <span style={{ color: 'var(--color-orange)' }}>GO</span>
            <span style={{ color: 'white', margin: '0 8px' }}>-</span>
            <span style={{ color: 'white' }}>DORMIR</span>
          </div>
          <div className="banner-subtitle">ENCUENTRA TU DESCANSO IDEAL</div>
        </div>
        <div className="banner-categories" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 150px)' }}>
          {[
            { cat: "Cabañas", color: "#e63946", bgImage: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80" },
            { cat: "Hoteles", color: "#f4a261", bgImage: "/images/hotel_pehuenia.png" },
            { cat: "Hostel", color: "#e9c46a", bgImage: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80" },
            { cat: "Campings", color: "#2a9d8f", bgImage: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?auto=format&fit=crop&w=800&q=80" }
          ].map((item) => (
            <a 
              href={`#${item.cat.toLowerCase()}`} 
              key={item.cat} 
              className="banner-item" 
              style={{ backgroundImage: `url(${item.bgImage})` }}
            >
              <div className="banner-overlay" style={{ borderBottom: `4px solid ${item.color}` }}></div>
              <span className="banner-text">{item.cat.toUpperCase()}</span>
            </a>
          ))}
        </div>
      </div>

      <h1 className="section-title">¿Dónde vas a dormir?</h1>

      {/* Listado por Categorías */}
      {categories.map(category => (
        <section key={category} id={category.toLowerCase()} style={{ marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            borderLeft: '5px solid var(--color-orange)', 
            paddingLeft: '12px',
            marginBottom: '24px',
            color: 'var(--color-text-main)'
          }}>
            {category}
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {ALOJAMIENTOS.filter(a => a.category === category).map(alojamiento => (
              <button key={alojamiento.id} style={{
                backgroundColor: 'white',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
                transition: 'var(--transition)',
                cursor: 'pointer',
                display: 'block',
                width: '100%',
                textAlign: 'left'
              }}
              onClick={() => setSelectedAlojamiento(alojamiento)}
              className="commerce-card"
              >
                <div style={{ position: 'relative', height: '200px' }}>
                  <Image src={alojamiento.image} alt={alojamiento.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '16px' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>{alojamiento.name}</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
                    {alojamiento.amenities.slice(0, 3).map(amenity => (
                      <span key={amenity} style={{
                        fontSize: '0.75rem',
                        backgroundColor: 'var(--color-bg)',
                        color: 'var(--color-text-muted)',
                        padding: '4px 8px',
                        borderRadius: '4px'
                      }}>
                        {amenity}
                      </span>
                    ))}
                    {alojamiento.amenities.length > 3 && (
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', padding: '4px 8px' }}>
                        +{alojamiento.amenities.length - 3}
                      </span>
                    )}
                  </div>
                  <p style={{ color: 'var(--color-orange)', fontSize: '0.95rem', fontWeight: 600 }}>Ver detalles y reservar</p>
                </div>
              </button>
            ))}
            {ALOJAMIENTOS.filter(a => a.category === category).length === 0 && (
              <p style={{ color: 'var(--color-text-muted)', fontStyle: 'italic' }}>Próximamente más alojamientos en esta categoría.</p>
            )}
          </div>
        </section>
      ))}

      {/* Modal de Detalles del Alojamiento */}
      {selectedAlojamiento && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          zIndex: 1000,
          padding: '20px'
        }}
        onClick={() => setSelectedAlojamiento(null)}
        >
          <div style={{
            backgroundColor: 'white',
            width: '100%',
            maxWidth: '600px',
            maxHeight: '90vh',
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px',
            padding: '24px',
            overflowY: 'auto',
            position: 'relative'
          }}
          onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedAlojamiento(null)}
              style={{ position: 'absolute', top: '16px', right: '16px', fontSize: '1.5rem', fontWeight: 'bold', zIndex: 10 }}
            >
              ✕
            </button>
            
            <div style={{ position: 'relative', height: '250px', borderRadius: '16px', overflow: 'hidden', marginBottom: '20px', marginTop: '10px' }}>
              <Image src={selectedAlojamiento.image} alt={selectedAlojamiento.name} fill style={{ objectFit: 'cover' }} />
            </div>

            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '8px' }}>{selectedAlojamiento.name}</h2>
            <p style={{ color: 'var(--color-orange)', fontWeight: 600, marginBottom: '16px', fontSize: '1.1rem' }}>{selectedAlojamiento.category}</p>
            
            <p style={{ color: 'var(--color-text-main)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '24px' }}>
              {selectedAlojamiento.description}
            </p>

            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px' }}>Comodidades</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
              {selectedAlojamiento.amenities.map(amenity => (
                <div key={amenity} style={{
                  backgroundColor: 'var(--color-bg)',
                  padding: '8px 16px',
                  borderRadius: '50px',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  border: '1px solid var(--color-border)'
                }}>
                  ✓ {amenity}
                </div>
              ))}
            </div>

            {/* Botón de WhatsApp */}
            <div style={{
              paddingTop: '16px',
              borderTop: '1px solid var(--color-border)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <a 
                href={buildWhatsAppUrl(selectedAlojamiento)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: '100%', padding: '16px', fontSize: '1.1rem', textDecoration: 'none' }}
              >
                📱 Consultar Disponibilidad
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .banner-categories {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-template-rows: repeat(2, 140px) !important;
          }
        }
      `}</style>
    </div>
  );
}
