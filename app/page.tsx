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
          { title: "ENCONTRÁ TU ALOJAMIENTO", sub: "Las mejores opciones", icon: Home, color: "var(--color-light-green)", link: "/alojarse" },
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
            <button style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
              <ChevronLeft size={20} color="var(--color-dark-green)" />
            </button>
            <button style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--color-dark-green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ChevronRight size={20} color="white" />
            </button>
          </div>
        </div>
        
        {/* Slider Track */}
        <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '16px', scrollbarWidth: 'none' }}>
          {[
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80"
          ].map((src, idx) => (
            <div key={idx} style={{ minWidth: '160px', height: '120px', borderRadius: '16px', overflow: 'hidden', position: 'relative' }}>
              <Image src={src} alt="Category" fill style={{ objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </section>

      {/* 5. FLOATING WHATSAPP BUTTON */}
      <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 100, display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ 
          backgroundColor: 'white', 
          padding: '8px 16px', 
          borderRadius: '20px', 
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          fontSize: '0.9rem',
          fontWeight: 600,
          color: 'var(--color-text-main)',
          position: 'relative'
        }}>
          ¡Escribinos!
          <div style={{ position: 'absolute', right: '-6px', top: '50%', transform: 'translateY(-50%) rotate(45deg)', width: '12px', height: '12px', backgroundColor: 'white' }}></div>
        </div>
        <a 
          href="https://wa.me/5492942661000" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            width: '60px', height: '60px', 
            borderRadius: '50%', 
            backgroundColor: '#25D366', 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)',
            transition: 'transform 0.2s'
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
          </svg>
        </a>
      </div>

    </div>
  );
}
