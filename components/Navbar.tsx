'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Share2, Menu } from 'lucide-react';

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
    <header className="site-header" style={{ padding: '0 16px' }}>
      <div className="container header-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '60px', padding: 0 }}>
        
        {/* Left: Logo */}
        <Link href="/" className="logo-link" style={{ fontSize: '1.5rem' }}>
          <span style={{ color: 'var(--color-dark-green)' }}>PEHUEN</span>
          <span style={{ color: 'var(--color-orange)' }}>GO</span>
        </Link>
        
        {/* Center: Desktop Nav (hidden on mobile mockup, but kept for desktop) */}
        <nav className="main-nav" style={{ display: 'none' }}>
          <Link href="/comer" className={`nav-link ${pathname === '/comer' ? 'active' : ''}`}>Qué Comer</Link>
          <Link href="/alojarse" className={`nav-link ${pathname === '/alojarse' ? 'active' : ''}`}>Dormir</Link>
          <Link href="/aventuras" className={`nav-link ${pathname === '/aventuras' ? 'active' : ''}`}>Aventuras</Link>
          <Link href="/comercios" className={`nav-link ${pathname === '/comercios' ? 'active' : ''}`}>Guía Local</Link>
        </nav>

        {/* Right: Icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button onClick={handleShare} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Share2 size={24} color="var(--color-dark-green)" />
          </button>
          <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Menu size={28} color="var(--color-dark-green)" />
          </button>
        </div>
        
      </div>
    </header>
  );
}
