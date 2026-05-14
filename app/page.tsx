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

export const CATEGORIES_DATA = [
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
];

export default function HomePage() {
  const [bgIndex, setBgIndex] = useState(0);
  const [adImage, setAdImage] = useState(CATEGORIES_DATA[0].image);
  const [adImage2, setAdImage2] = useState(CATEGORIES_DATA[1].image);
  const [adImage3, setAdImage3] = useState(CATEGORIES_DATA[2].image);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 5000); // Change image every 5 seconds

    const timeout = setTimeout(() => {
      const adInterval = setInterval(() => {
        const randomIndex1 = Math.floor(Math.random() * CATEGORIES_DATA.length);
        let randomIndex2 = Math.floor(Math.random() * CATEGORIES_DATA.length);
        if (randomIndex2 === randomIndex1) {
          randomIndex2 = (randomIndex2 + 1) % CATEGORIES_DATA.length;
        }
        let randomIndex3 = Math.floor(Math.random() * CATEGORIES_DATA.length);
        if (randomIndex3 === randomIndex1 || randomIndex3 === randomIndex2) {
          randomIndex3 = (randomIndex3 + 1) % CATEGORIES_DATA.length;
        }
        setAdImage(CATEGORIES_DATA[randomIndex1].image);
        setAdImage2(CATEGORIES_DATA[randomIndex2].image);
        setAdImage3(CATEGORIES_DATA[randomIndex3].image);
      }, 8000);
      return () => clearInterval(adInterval);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
      
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
              { icon: MountainSnow, text: "AVENTURAS\nY ACTIVIDADES" },
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
          { title: "VER AVENTURAS", sub: "Reservá tu experiencia", icon: Compass, color: "var(--color-dark-green)", link: "/aventuras" },
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

      {/* 2.5 PET SHOP BANNER (HUELLITAS) */}
      <section style={{ padding: '0 20px', maxWidth: '600px', margin: '20px auto 0 auto' }}>
        <a 
          href="https://wa.me/5492942661000?text=Hola%20quiero%20turno%20en%20Huellitas" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '16px',
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            padding: '0 20px',
            textDecoration: 'none',
            overflow: 'hidden',
            position: 'relative',
            border: '2px solid var(--color-green)',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
          }}
        >
          {/* Animated Dog */}
          <div style={{ width: '80px', height: '80px', position: 'relative' }}>
             <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
                <circle cx="50" cy="50" r="35" fill="var(--color-orange)" />
                <path d="M25 35 Q15 15 35 25" fill="#a34100" />
                <path d="M75 35 Q85 15 65 25" fill="#a34100" />
                <circle cx="40" cy="45" r="4" fill="white" />
                <circle cx="60" cy="45" r="4" fill="white" />
                <circle cx="50" cy="55" r="3" fill="black" />
                <g className="waving-paw">
                  <circle cx="75" cy="70" r="12" fill="var(--color-green)" stroke="white" strokeWidth="2" />
                  <circle cx="70" cy="63" r="3" fill="white" />
                  <circle cx="75" cy="60" r="3" fill="white" />
                  <circle cx="80" cy="63" r="3" fill="white" />
                </g>
             </svg>
          </div>

          <div style={{ flex: 1, padding: '0 15px', textAlign: 'center' }}>
            <div style={{ color: 'var(--color-green)', fontSize: '1.1rem', fontWeight: 800, fontFamily: 'var(--font-oswald), sans-serif', letterSpacing: '1px' }}>
              HUELLITAS
            </div>
            <div style={{ color: 'white', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.5px' }}>
              ESTÉTICA CANINA
            </div>
            <div style={{ color: '#f1c40f', fontSize: '1.2rem', fontWeight: 800, marginTop: '4px', textShadow: '0 0 10px rgba(241,196,15,0.3)' }}>
              02942 661000
            </div>
          </div>

          {/* Morphing Logo (Paw to Scissors Heart) */}
          <div style={{ width: '70px', height: '70px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="morph-paw" style={{ position: 'absolute' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="var(--color-green)">
                <path d="M4.5 10c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5zm15 0c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5zm-12-6c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5zm9 0c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5zm-4.5 10c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5z" />
              </svg>
            </div>
            <div className="morph-scissors" style={{ position: 'absolute', opacity: 0 }}>
              <svg width="45" height="45" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="var(--color-orange)" />
                <path d="M9 7L15 13M15 7L9 13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <circle cx="9" cy="7" r="1.5" fill="white" />
                <circle cx="15" cy="7" r="1.5" fill="white" />
              </svg>
            </div>
          </div>
        </a>
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

      {/* Ad Banner (Half Height) */}
      <section className="container" style={{ padding: '10px 20px 0 20px' }}>
        <div className="ad-banner-container" style={{ height: '100px', margin: '0 auto 10px auto' }}>
          <div 
            className="ad-slide ad-slide-1" 
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${adImage3}')` }}
          >
            <h2 style={{ fontSize: '1.5rem', margin: 0, textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              <span style={{ color: 'var(--color-green)' }}>Pehuenia</span>
              <span style={{ color: 'var(--color-orange)' }}>GO</span>
            </h2>
            <p style={{ color: 'white', fontSize: '0.9rem', marginTop: '4px', fontWeight: 600, textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
              Publicite Aquí
            </p>
          </div>
          <a href="https://wa.me/5492942661000?text=Hola%20quiero%20publicitar%20en%20PehueniaGO" target="_blank" rel="noopener noreferrer" className="ad-slide ad-slide-2" style={{ textDecoration: 'none' }}>
            <h2 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--color-green)', fontFamily: 'var(--font-oswald), sans-serif', textTransform: 'uppercase' }}>
              Publicite Aquí
            </h2>
            <p style={{ color: 'var(--color-orange)', fontSize: '0.9rem', marginTop: '4px', fontWeight: 700 }}>
              Haga crecer su negocio
            </p>
          </a>
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
          {CATEGORIES_DATA.map((cat, idx) => (
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

      {/* Ad Banner 1 */}
      <section className="container" style={{ padding: '0 20px' }}>
        <div className="ad-banner-container">
          <div 
            className="ad-slide ad-slide-1" 
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${adImage}')` }}
          >
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

        {/* Ad Banner 2 */}
        <div className="ad-banner-container" style={{ marginTop: '0' }}>
          <div 
            className="ad-slide ad-slide-1" 
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${adImage2}')`, animationDelay: '4s' }}
          >
            <h2 style={{ fontSize: '2.5rem', margin: 0, textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
              <span style={{ color: 'var(--color-green)' }}>Pehuenia</span>
              <span style={{ color: 'var(--color-orange)' }}>GO</span>
            </h2>
            <p style={{ color: 'white', fontSize: '1.2rem', marginTop: '8px', fontWeight: 600, textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
              Su marca aquí
            </p>
          </div>
          <a href="https://wa.me/5492942661000?text=Hola%20quiero%20publicitar%20en%20PehueniaGO" target="_blank" rel="noopener noreferrer" className="ad-slide ad-slide-2" style={{ textDecoration: 'none', animationDelay: '4s' }}>
            <h2 style={{ fontSize: '2.5rem', margin: 0, color: 'var(--color-green)', fontFamily: 'var(--font-oswald), sans-serif', textTransform: 'uppercase' }}>
              Espacio Disponible
            </h2>
            <p style={{ color: 'var(--color-orange)', fontSize: '1.2rem', marginTop: '8px', fontWeight: 700 }}>
              Miles de turistas lo verán
            </p>
          </a>
        </div>
      </section>
    </div>
  );
}
