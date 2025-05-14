'use client';

import type { ReactNode } from 'react';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import { useEffect, useRef, useState } from 'react';

/**
 * MobileLayout: wraps content with fixed header and nav, max width 480px, mobile responsive.
 * Includes a splash screen that fades out after a short delay.
 */
type MobileLayoutProps = {
  children: ReactNode;
};

const HEADER_HEIGHT = 96; // px, adjust if needed
const NAV_HEIGHT = 72; // px, adjust if needed

const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {
  const [showSplash, setShowSplash] = useState(true);
  const [showNavState, setShowNavState] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const timeout = setTimeout(() => setShowSplash(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 40) {
        setShowNavState(false); // scrolling up, hide nav
      } else {
        setShowNavState(true); // scrolling down, show nav
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center">
      <Header />
      <main
        className="w-full max-w-[480px] mx-auto flex-1 pt-[96px] pb-[80px] px-0 relative overflow-hidden"
        style={{
          minHeight: `calc(100vh - ${HEADER_HEIGHT + NAV_HEIGHT}px)`,
        }}
      >
        {showSplash && (
          <div
            className="absolute inset-0 z-100 flex items-center justify-center transition-opacity duration-700 bg-red-600 bg-opacity-90"
            style={{ pointerEvents: 'none', opacity: showSplash ? 1 : 0 }}
          />
        )}
        {children}
      </main>
      <MobileNav show={showNavState} />
    </div>
  );
};

export default MobileLayout;
