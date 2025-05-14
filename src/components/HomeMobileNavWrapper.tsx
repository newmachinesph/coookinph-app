'use client';
import React, { useEffect, useRef, useState } from 'react';
import MobileNav from './MobileNav';

const HomeMobileNavWrapper: React.FC = () => {
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 40) {
        setShowNav(false); // scrolling up, hide nav
      } else {
        setShowNav(true); // scrolling down, show nav
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <MobileNav show={showNav} />;
};

export default HomeMobileNavWrapper;
