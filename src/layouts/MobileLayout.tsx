'use client';

import type { ReactNode } from 'react';
import MobileNav from '@/components/MobileNav';
import { useEffect, useRef, useState } from 'react';

/**
 * MobileLayout: wraps content with fixed header and nav, max width 480px, mobile responsive.
 * Includes a splash screen that fades out after a short delay.
 */
type MobileLayoutProps = {
  children: ReactNode;
  hideNav?: boolean;
};

const HEADER_HEIGHT = 96; // px, adjust if needed
const NAV_HEIGHT = 72; // px, adjust if needed

const MobileLayout: React.FC<MobileLayoutProps> = ({ children, hideNav }) => {
  const [showNavState, setShowNavState] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < lastScrollY.current) {
        setShowNavState(false); // scrolling up -> show nav
      } else if (currentY > lastScrollY.current) {
        setShowNavState(true); // scrolling down -> hide nav
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center">
      <main
        className="w-full max-w-[480px] mx-auto flex-1 py-20 px-0 relative overflow-hidden"
        style={{
          minHeight: `calc(100vh - ${HEADER_HEIGHT + NAV_HEIGHT}px)`,
        }}
      >
        {children}
      </main>
      {!hideNav
        && <MobileNav show={showNavState} />}
    </div>
  );
};

export default MobileLayout;
