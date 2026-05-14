'use client';

import React from 'react';
import { GUIA_CATEGORIAS, GUIA_ITEMS } from '@/data/guia';

export default function ComerciosPage() {
  return (
    <div className="container" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
      
      {/* Banner Principal de la Guía Local */}
      <div style={{
        position: 'relative',
        height: '240px',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        marginBottom: '40px',
        backgroundImage: 'url(/images/guia_local_banner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: 'var(--shadow-md)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '24px'
      }}>
        {/* Capa de oscurecimiento para legibilidad */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%)',
          zIndex: 1
        }}></div>

        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span style={{ color: 'var(--color-green)', fontWeight: 800, fontSize: '1.4rem' }}>Pehuenia</span>
            <span style={{ color: 'var(--color-orange)', fontWeight: 800, fontSize: '1.4rem' }}>GO</span>
            <span style={{ color: 'white', margin: '0 4px' }}>|</span>
            <span style={{ color: 'white', fontWeight: 600, fontSize: '1.2rem', letterSpacing: '1px' }}>GUÍA LOCAL</span>
          </div>
          <p style={{ color: 'var(--color-bg)', fontSize: '1rem', opacity: 0.9 }}>
            Comercios, Servicios e Instituciones de Villa Pehuenia y Moquehue
          </p>
        </div>
      </div>

      {/* Botones de Anclaje Rápido */}
      <div style={{
        display: 'flex',
        gap: '8px',
        overflowX: 'auto',
        paddingBottom: '16px',
        marginBottom: '40px',
        scrollbarWidth: 'none'
      }}>
        {GUIA_CATEGORIAS.map(cat => (
          <a
            key={cat}
            href={`#${cat.replace(/ /g, '-').toLowerCase()}`}
            style={{
              backgroundColor: 'white',
              border: '1px solid var(--color-border)',
              padding: '10px 16px',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--color-text-main)',
              whiteSpace: 'nowrap',
              textDecoration: 'none',
              boxShadow: 'var(--shadow-sm)',
              transition: 'var(--transition)'
            }}
            className="category-anchor"
          >
            {cat}
          </a>
        ))}
      </div>

      {/* Renderizado de Secciones */}
      {GUIA_CATEGORIAS.map(categoria => {
        const items = GUIA_ITEMS.filter(i => i.categoria === categoria);
        
        return (
          <section key={categoria} id={categoria.replace(/ /g, '-').toLowerCase()} style={{ marginBottom: '50px' }}>
            <h2 style={{
              fontSize: '1.4rem',
              fontWeight: 700,
              color: 'var(--color-text-main)',
              borderLeft: '5px solid var(--color-green)',
              paddingLeft: '12px',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <span>{categoria}</span>
              <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--color-text-muted)', backgroundColor: 'var(--color-bg)', padding: '2px 8px', borderRadius: '10px' }}>
                {items.length}
              </span>
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '16px'
            }}>
              {items.map(item => (
                <div key={item.id} style={{
                  backgroundColor: 'white',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-text-main)', lineHeight: '1.3' }}>
                        {item.nombre}
                      </h3>
                    </div>
                    {item.rubro && (
                      <span style={{
                        display: 'inline-block',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        backgroundColor: 'var(--color-bg)',
                        color: 'var(--color-orange)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        marginBottom: '12px'
                      }}>
                        {item.rubro}
                      </span>
                    )}
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--color-text-muted)',
                    fontSize: '0.85rem',
                    borderTop: '1px solid var(--color-bg)',
                    paddingTop: '10px',
                    marginTop: '8px'
                  }}>
                    <span style={{ fontSize: '1rem' }}>📍</span>
                    <span style={{ fontWeight: 500 }}>{item.direccion}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}

    </div>
  );
}
