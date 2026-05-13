'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Leaf } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'PehuenGo',
          text: 'Descubrí todo Pehuenia en un solo lugar: comida, alojamiento y excursiones.',
          url: window.location.origin,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback if Web Share API is not supported
      alert(`Compartí esta URL: ${window.location.origin}`);
    }
  };

  return (
    <header className="site-header">
      <div className="container header-container">
        
        {/* Left: Logo */}
        <Link href="/" className="logo-link" style={{ fontSize: '2.2rem', gap: '8px' }}>
          <Leaf color="var(--color-green)" size={32} />
          <div>
            <span style={{ color: 'var(--color-green)' }}>PEHUEN</span>
            <span style={{ color: 'var(--color-orange)' }}>GO</span>
          </div>
        </Link>
        
        {/* Center: Desktop Nav */}
        <nav className="main-nav">
          <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Inicio</Link>
          <Link href="/comer" className={`nav-link ${pathname === '/comer' ? 'active' : ''}`}>Qué Comer</Link>
          <Link href="/alojarse" className={`nav-link ${pathname === '/alojarse' ? 'active' : ''}`}>Dormir</Link>
          <Link href="/aventuras" className={`nav-link ${pathname === '/aventuras' ? 'active' : ''}`}>Aventuras</Link>
          <Link href="/comercios" className={`nav-link ${pathname === '/comercios' ? 'active' : ''}`}>Guía Local</Link>
          <button 
            onClick={handleShare} 
            className="nav-link" 
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontSize: 'inherit', fontFamily: 'inherit', border: 'none', background: 'none', cursor: 'pointer', padding: '8px 4px', borderRadius: '8px', backgroundColor: '#f4f4f4' }}
          >
            Compartir
          </button>
        </nav>
        
      </div>
    </header>
  );
}
