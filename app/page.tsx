'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Bike, BedDouble, MountainSnow, ShoppingBag, 
  Rocket, Home, Compass, Store, 
  Clock, ShieldCheck, Heart, HeartHandshake,
  ChevronRight, ChevronLeft
} from 'lucide-react';

const BACKGROUND_IMAGES = [
  "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80", // Summer/Lake
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80", // Food balcony
  "https://images.unsplash.com/photo-1541410965313-d53b3c16ef17?auto=format&fit=crop&w=1200&q=80", // Autumn
  "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80", // Winter/Cabin
];

export default function HomePage() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', paddingBottom: '100px' }}>
      
      {/* 1. HERO SECTION WITH SLIDER */}
      <section style={{ 
        position: 'relative', 
        padding: '60px 20px 40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        minHeight: '450px'
      }}>
        {/* Background Images */}
        {BACKGROUND_IMAGES.map((src, index) => (
          <div 
            key={src}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: index === bgIndex ? 1 : 0,
              transition: 'opacity 1.5s ease-in-out',
              zIndex: 0
            }}
          />
        ))}
        {/* Overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
          zIndex: 1
        }} />

        {/* Hero Content */}
        <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '600px' }}>
          <h1 style={{ 
            fontFamily: 'var(--font-oswald), sans-serif',
            fontSize: '4.5rem',
            fontWeight: 700,
            color: 'white',
            lineHeight: 0.9,
            marginBottom: '0px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            textShadow: '2px 4px 10px rgba(0,0,0,0.5)'
          }}>
            TODO PEHUENIA
          </h1>
          <h2 style={{ 
            fontFamily: 'var(--font-caveat), cursive',
            fontSize: '3.5rem',
            color: '#f1c40f', // yellow/orange matching mockup
            lineHeight: 0.8,
            marginBottom: '24px',
            transform: 'rotate(-2deg)',
            textShadow: '1px 2px 4px rgba(0,0,0,0.5)'
          }}>
            en un solo lugar
          </h2>
          
          <p style={{ 
            color: 'white', 
            fontSize: '1.1rem', 
            fontWeight: 500,
            marginBottom: '32px',
            textShadow: '1px 1px 4px rgba(0,0,0,0.8)',
            padding: '0 10px'
          }}>
            Comé rico, alojate cómodo,<br/>viví aventuras y pedí sin<br/>moverte de tu cabaña.
          </p>

          {/* Quick Links Row */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '8px',
            borderTop: '1px solid rgba(255,255,255,0.3)',
            paddingTop: '20px'
          }}>
            {[
              { icon: Bike, text: "DELIVERY\nRÁPIDO" },
              { icon: BedDouble, text: "ALOJAMIENTOS\nPARA TODOS" },
              { icon: MountainSnow, text: "EXCURSIONES\nY ACTIVIDADES" },
              { icon: ShoppingBag, text: "COMERCIOS\nLOCALES" }
            ].map((item, idx) => (
              <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', borderRight: idx < 3 ? '1px solid rgba(255,255,255,0.3)' : 'none' }}>
                <item.icon color="white" size={28} style={{ marginBottom: '8px' }} />
                <span style={{ color: 'white', fontSize: '0.65rem', fontWeight: 700, whiteSpace: 'pre-line', lineHeight: 1.2 }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. MAIN ACTION BUTTONS */}
      <section style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px', margin: '0 auto', marginTop: '-30px', position: 'relative', zIndex: 10 }}>
        {[
          { title: "PEDÍ COMIDA AHORA", sub: "Delivery a tu cabaña", icon: Rocket, color: "var(--color-orange)", link: "/comer" },
          { title: "ENCONTRÁ TU ALOJAMIENTO", sub: "Las mejores opciones", icon: Home, color: "var(--color-green)", link: "/alojarse" },
          { title: "VER EXCURSIONES", sub: "Reservá tu aventura", icon: Compass, color: "var(--color-dark-green)", link: "/excursiones" },
          { title: "VER COMERCIOS", sub: "Tiendas y servicios locales", icon: ShoppingBag, color: "var(--color-purple)", link: "/comercios" },
        ].map((btn, idx) => (
          <Link href={btn.link} key={idx} style={{
            backgroundColor: btn.color,
            borderRadius: '16px',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            textDecoration: 'none',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            transition: 'transform 0.2s'
          }}>
            <div style={{ marginRight: '16px' }}>
              <btn.icon size={36} color="white" strokeWidth={1.5} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'var(--font-oswald), sans-serif', letterSpacing: '0.5px' }}>{btn.title}</div>
              <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>{btn.sub}</div>
            </div>
            <ChevronRight size={24} color="white" />
          </Link>
        ))}
      </section>

      {/* 3. TRUST BADGES */}
      <section style={{ backgroundColor: 'white', padding: '30px 20px', marginTop: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '600px', margin: '0 auto' }}>
          {[
            { icon: Clock, title: "RÁPIDO", sub: "Entrega en\nminutos" },
            { icon: ShieldCheck, title: "SEGURO", sub: "Comercios\nverificados" },
            { icon: Heart, title: "LOCAL", sub: "Apoyá lo\nnuestro" },
            { icon: HeartHandshake, title: "SIEMPRE", sub: "Atención\ncercana" }
          ].map((item, idx) => (
            <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderRight: idx < 3 ? '1px solid var(--color-border)' : 'none' }}>
              <item.icon size={32} color="var(--color-dark-green)" style={{ marginBottom: '8px' }} strokeWidth={1.5} />
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-dark-green)', marginBottom: '4px' }}>{item.title}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', whiteSpace: 'pre-line', lineHeight: 1.2 }}>{item.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BOTTOM CATEGORIES SLIDER */}
      <section style={{ padding: '30px 20px', maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-dark-green)' }}>DESCUBRÍ PEHUENIA</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Opciones para cada momento de tu viaje</p>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button 
              onClick={() => {
                const container = document.getElementById('category-slider');
                if (container) container.scrollBy({ left: -200, behavior: 'smooth' });
              }}
              style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}
            >
              <ChevronLeft size={20} color="var(--color-dark-green)" />
            </button>
            <button 
              onClick={() => {
                const container = document.getElementById('category-slider');
                if (container) container.scrollBy({ left: 200, behavior: 'smooth' });
              }}
              style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--color-dark-green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <ChevronRight size={20} color="white" />
            </button>
          </div>
        </div>
        
        {/* Slider Track */}
        <div 
          id="category-slider"
          style={{ 
            display: 'flex', 
            gap: '16px', 
            overflowX: 'auto', 
            paddingBottom: '16px', 
            scrollbarWidth: 'none',
            scrollSnapType: 'x mandatory'
          }}
        >
          {[
            { title: "Pizzería", link: "/comer#pizzería", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80" },
            { title: "Hamburguesa", link: "/comer#hamburguesa", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80" },
            { title: "Cervecería", link: "/comer#cervecería", image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&w=400&q=80" },
            { title: "Roticería", link: "/comer#roticería", image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&w=400&q=80" },
            { title: "Restaurante", link: "/comer#restaurante", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&q=80" },
            { title: "Cabañas", link: "/alojarse#cabañas", image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=400&q=80" },
            { title: "Hoteles", link: "/alojarse#hoteles", image: "/images/hotel_pehuenia.png" },
            { title: "Campings", link: "/alojarse#campings", image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?auto=format&fit=crop&w=400&q=80" },
            { title: "Trekking", link: "/aventuras#trekking", image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=400&q=80" },
            { title: "A. Acuaticas", link: "/aventuras#a.-acuaticas", image: "/images/aventura_rafting.png" },
            { title: "Cabalgatas", link: "/aventuras#cabalgatas", image: "/images/aventura_cabalgatas.png" },
            { title: "Nieve", link: "/aventuras#nieve", image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?auto=format&fit=crop&w=400&q=80" },
            { title: "Pesca", link: "/aventuras#pesca", image: "/images/aventura_pesca.png" },
            { title: "Agencia de turismo", link: "/aventuras#agencia-de-turismo", image: "/images/aventura_agencia.png" }
          ].map((cat, idx) => (
            <Link 
              href={cat.link} 
              key={idx} 
              style={{ 
                minWidth: '160px', 
                height: '120px', 
                borderRadius: '16px', 
                overflow: 'hidden', 
                position: 'relative',
                scrollSnapAlign: 'start',
                display: 'block'
              }}
            >
              <Image src={cat.image} alt={cat.title} fill style={{ objectFit: 'cover' }} />
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 100%)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '12px'
              }}>
                <span style={{ color: 'white', fontWeight: 700, fontSize: '1rem', textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
                  {cat.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Ad Banner */}
      <section className="container" style={{ padding: '0 20px' }}>
        <div className="ad-banner-container">
          <div className="ad-slide ad-slide-1">
            <h2 style={{ fontSize: '2.5rem', margin: 0, textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
              <span style={{ color: 'var(--color-green)' }}>Pehuenia</span>
              <span style={{ color: 'var(--color-orange)' }}>GO</span>
            </h2>
            <p style={{ color: 'white', fontSize: '1.2rem', marginTop: '8px', fontWeight: 600, textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
              La guía local
            </p>
          </div>
          <a href="https://wa.me/5492942661000?text=Hola%20quiero%20publicitar%20en%20PehueniaGO" target="_blank" rel="noopener noreferrer" className="ad-slide ad-slide-2" style={{ textDecoration: 'none' }}>
            <h2 style={{ fontSize: '2.5rem', margin: 0, color: 'var(--color-green)', fontFamily: 'var(--font-oswald), sans-serif', textTransform: 'uppercase' }}>
              Publicite Aquí
            </h2>
            <p style={{ color: 'var(--color-orange)', fontSize: '1.2rem', marginTop: '8px', fontWeight: 700 }}>
              Haga crecer su negocio con PehueniaGO
            </p>
          </a>
        </div>
      </section>

      {/* 5. FIXED BOTTOM BANNER: COMERCIO ADHERITE */}
      <a 
        href="https://wa.me/5492942661000?text=Hola%20quiero%20adherir%20mi%20comercio%20o%20emprendimiento" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ 
          position: 'fixed', 
          bottom: 0, 
          left: 0, 
          right: 0, 
          zIndex: 100, 
          backgroundColor: 'var(--color-green)',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: '12px',
          padding: '16px 20px',
          textDecoration: 'none',
          boxShadow: '0 -4px 15px rgba(0,0,0,0.2)'
        }}
      >
        <span style={{ 
          color: 'white', 
          fontWeight: 800, 
          fontSize: '1.1rem',
          fontFamily: 'var(--font-oswald), sans-serif',
          letterSpacing: '0.5px'
        }}>
          COMERCIO ADHERITE 02942 661000
        </span>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#f1c40f">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
        </svg>
      </a>

    </div>
  );
}
