'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AVENTURAS, Aventura } from '@/data/aventuras';
import PublicityBanner from '@/components/PublicityBanner';
import AdhereBanner from '@/components/AdhereBanner';

export default function AventurasPage() {
  const [selectedAventura, setSelectedAventura] = useState<Aventura | null>(null);

  const categories = ["Trekking", "A. Acuaticas", "Cabalgatas", "Nieve", "Pesca", "Agencia de turismo"];

  const buildWhatsAppUrl = (aventura: Aventura) => {
    const message = `*Hola ${aventura.name}!* \nTe contacto desde PehueniaGO.\nQuisiera consultar más información y reservar la siguiente actividad: *${aventura.category}*.\n\n¡Muchas gracias!`;
    return `https://wa.me/${aventura.whatsapp}?text=${encodeURIComponent(message)}`;
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
            <span style={{ color: 'white' }}>AVENTURAS</span>
          </div>
          <div className="banner-subtitle">DESCUBRE LA NATURALEZA</div>
        </div>
        <div className="banner-categories">
          {[
            { cat: "Trekking", color: "#2a9d8f", bgImage: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80" },
            { cat: "A. Acuaticas", color: "#00b4d8", bgImage: "/images/aventura_rafting.png" },
            { cat: "Cabalgatas", color: "#f4a261", bgImage: "/images/aventura_cabalgatas.png" },
            { cat: "Nieve", color: "#e9c46a", bgImage: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?auto=format&fit=crop&w=800&q=80" },
            { cat: "Pesca", color: "#e76f51", bgImage: "/images/aventura_pesca.png" },
            { cat: "Agencia de turismo", color: "#264653", bgImage: "/images/aventura_agencia.png" }
          ].map((item) => (
            <a 
              href={`#${item.cat.replace(/ /g, '-').toLowerCase()}`} 
              key={item.cat} 
              className="banner-item" 
              style={{ backgroundImage: `url(${item.bgImage})` }}
            >
              <div className="banner-overlay" style={{ borderBottom: `4px solid ${item.color}` }}></div>
              <span className="banner-text" style={{ fontSize: item.cat === "Agencia de turismo" ? "0.9rem" : "inherit" }}>
                {item.cat.toUpperCase()}
              </span>
            </a>
          ))}
        </div>
      </div>
      
      <PublicityBanner height="100px" />

      <h1 className="section-title">¿Qué aventura elegimos hoy?</h1>

      {/* Listado por Categorías */}
      {categories.map((category, index) => (
        <React.Fragment key={category}>
        <section key={category} id={category.replace(/ /g, '-').toLowerCase()} style={{ marginBottom: '60px' }}>
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
            {AVENTURAS.filter(a => a.category === category).map(aventura => (
              <button key={aventura.id} style={{
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
              onClick={() => setSelectedAventura(aventura)}
              className="commerce-card"
              >
                <div style={{ position: 'relative', height: '200px' }}>
                  <Image src={aventura.image} alt={aventura.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '16px' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>{aventura.name}</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
                    {aventura.details.map(detail => (
                      <span key={detail} style={{
                        fontSize: '0.75rem',
                        backgroundColor: 'var(--color-bg)',
                        color: 'var(--color-text-muted)',
                        padding: '4px 8px',
                        borderRadius: '4px'
                      }}>
                        {detail}
                      </span>
                    ))}
                  </div>
                  <p style={{ color: 'var(--color-orange)', fontSize: '0.95rem', fontWeight: 600 }}>Ver detalles y reservar</p>
                </div>
              </button>
            ))}
            {AVENTURAS.filter(a => a.category === category).length === 0 && (
              <p style={{ color: 'var(--color-text-muted)', fontStyle: 'italic' }}>Próximamente más aventuras en esta categoría.</p>
            )}
          </div>
        </section>
        {/* Ad between categories (approx middle) */}
        {index === Math.floor(categories.length / 2) - 1 && (
          <PublicityBanner delay="2s" />
        )}
      </React.Fragment>
      ))}

      <PublicityBanner delay="4s" />
      <AdhereBanner />

      {/* Modal de Detalles de la Aventura */}
      {selectedAventura && (
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
        onClick={() => setSelectedAventura(null)}
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
              onClick={() => setSelectedAventura(null)}
              style={{ position: 'absolute', top: '16px', right: '16px', fontSize: '1.5rem', fontWeight: 'bold', zIndex: 10 }}
            >
              ✕
            </button>
            
            <div style={{ position: 'relative', height: '250px', borderRadius: '16px', overflow: 'hidden', marginBottom: '20px', marginTop: '10px' }}>
              <Image src={selectedAventura.image} alt={selectedAventura.name} fill style={{ objectFit: 'cover' }} />
            </div>

            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '8px' }}>{selectedAventura.name}</h2>
            <p style={{ color: 'var(--color-orange)', fontWeight: 600, marginBottom: '16px', fontSize: '1.1rem' }}>{selectedAventura.category}</p>
            
            <p style={{ color: 'var(--color-text-main)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '24px' }}>
              {selectedAventura.description}
            </p>

            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px' }}>Detalles de la Actividad</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '32px' }}>
              {selectedAventura.details.map(detail => (
                <div key={detail} style={{
                  backgroundColor: 'var(--color-bg)',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                }}>
                  <span style={{ color: 'var(--color-green)', marginRight: '8px', fontSize: '1.2rem' }}>•</span>
                  {detail}
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
                href={buildWhatsAppUrl(selectedAventura)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: '100%', padding: '16px', fontSize: '1.1rem', textDecoration: 'none' }}
              >
                📱 Consultar y Reservar
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
