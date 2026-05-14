'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { COMERCIOS, Comercio, MenuItem } from '@/data/comercios';
import PublicityBanner from '@/components/PublicityBanner';

export default function ComerPage() {
  const [selectedComercio, setSelectedComercio] = useState<Comercio | null>(null);
  const [cart, setCart] = useState<{ [key: string]: number }>({});

  const categoryBanners = [
    { cat: "Pizzería", color: "#e63946", bgImage: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80" },
    { cat: "Hamburguesa", color: "#f4a261", bgImage: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80" },
    { cat: "Cervecería", color: "#e9c46a", bgImage: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&w=800&q=80" },
    { cat: "Roticería", color: "#e76f51", bgImage: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&w=800&q=80" },
    { cat: "Restaurante", color: "#2a9d8f", bgImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80" },
    { cat: "Supermercado", color: "#264653", bgImage: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80" }
  ];

  const addToCart = (itemId: string) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId] -= 1;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const cartTotal = useMemo(() => {
    if (!selectedComercio) return 0;
    return selectedComercio.menu.reduce((total, item) => {
      const quantity = cart[item.id] || 0;
      return total + (item.price * quantity);
    }, 0);
  }, [cart, selectedComercio]);

  const whatsappUrl = useMemo(() => {
    if (!selectedComercio) return "";
    
    let message = `*Hola ${selectedComercio.name}!* \nQuisiera hacer el siguiente pedido:\n\n`;
    
    selectedComercio.menu.forEach(item => {
      const quantity = cart[item.id];
      if (quantity > 0) {
        message += `- ${quantity}x ${item.name} ($${item.price * quantity})\n`;
      }
    });
    
    message += `\n*Total: $${cartTotal}*`;
    message += `\n\n_Pedido realizado vía PehueniaGO_`;
    
    return `https://wa.me/${selectedComercio.whatsapp}?text=${encodeURIComponent(message)}`;
  }, [selectedComercio, cart, cartTotal]);

  return (
    <div className="container" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
      
      {/* Banner Principal Responsivo */}
      <div className="responsive-banner">
        <div className="banner-header">
          <div className="banner-title">
            <span style={{ color: 'var(--color-green)' }}>Pehuenia</span>
            <span style={{ color: 'var(--color-orange)' }}>GO</span>
            <span style={{ color: 'white', margin: '0 8px' }}>-</span>
            <span style={{ color: 'white' }}>PEDIDOS ONLINE</span>
          </div>
          <div className="banner-subtitle">LAS MEJORES OPCIONES</div>
        </div>
        <div className="banner-categories">
          {categoryBanners.map((item) => (
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
      
      <PublicityBanner height="100px" />

      <h1 className="section-title">¿Qué pedimos hoy?</h1>

      {/* Listado por Categorías con Banners Ilustrativos */}
      {categoryBanners.map((item, index) => (
        <React.Fragment key={item.cat}>
        <section key={item.cat} id={item.cat.toLowerCase()} style={{ marginBottom: '60px' }}>
          
          {/* Banner de Cabecera de la Categoría */}
          <div style={{
            position: 'relative',
            height: '140px',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            marginBottom: '24px',
            backgroundImage: `url(${item.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '24px',
            borderLeft: `8px solid ${item.color}`
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 1
            }}></div>
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: 800,
              color: 'white',
              zIndex: 2,
              textShadow: '0 2px 8px rgba(0,0,0,0.8)',
              letterSpacing: '1px'
            }}>
              {item.cat}
            </h2>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {COMERCIOS.filter(c => c.category === item.cat).map(comercio => (
              <button key={comercio.id} style={{
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
              onClick={() => {
                setSelectedComercio(comercio);
                setCart({});
              }}
              className="commerce-card"
              >
                <div style={{ position: 'relative', height: '160px' }}>
                  <Image src={comercio.image} alt={comercio.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '16px' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px' }}>{comercio.name}</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Ver menú y pedir</p>
                </div>
              </button>
            ))}
            {COMERCIOS.filter(c => c.category === item.cat).length === 0 && (
              <p style={{ color: 'var(--color-text-muted)', fontStyle: 'italic' }}>Próximamente más comercios en esta categoría.</p>
            )}
          </div>
        </section>
        {/* Ad between categories (approx middle) */}
        {index === Math.floor(categoryBanners.length / 2) - 1 && (
          <PublicityBanner delay="2s" />
        )}
      </React.Fragment>
      ))}

      <PublicityBanner delay="4s" />

      {/* Modal de Menú (Estilo PedidosYa) */}
      {selectedComercio && (
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
        onClick={() => setSelectedComercio(null)}
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
              onClick={() => setSelectedComercio(null)}
              style={{ position: 'absolute', top: '16px', right: '16px', fontSize: '1.5rem', fontWeight: 'bold' }}
            >
              ✕
            </button>
            
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '8px' }}>{selectedComercio.name}</h2>
            <p style={{ color: 'var(--color-orange)', fontWeight: 600, marginBottom: '24px' }}>{selectedComercio.category}</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {selectedComercio.menu.map(item => (
                <div key={item.id} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px',
                  border: '1px solid var(--color-border)',
                  borderRadius: '16px'
                }}>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '4px' }}>{item.name}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '8px' }}>{item.description}</p>
                    <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-green)' }}>${item.price}</p>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {cart[item.id] > 0 && (
                      <>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid var(--color-orange)', color: 'var(--color-orange)', fontWeight: 'bold' }}
                        >
                          -
                        </button>
                        <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>{cart[item.id]}</span>
                      </>
                    )}
                    <button 
                      onClick={() => addToCart(item.id)}
                      style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--color-orange)', color: 'white', fontWeight: 'bold' }}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer del Modal / Botón de WhatsApp */}
            {Object.keys(cart).length > 0 && (
              <div style={{
                marginTop: '32px',
                padding: '16px',
                borderTop: '1px solid var(--color-border)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>Total</span>
                  <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-green)' }}>${cartTotal}</span>
                </div>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ width: '100%', padding: '16px', fontSize: '1.1rem', textDecoration: 'none' }}
                >
                  📱 Enviar pedido por WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
