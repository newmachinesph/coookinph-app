import { Box, ChatBubble, Home, User } from 'iconoir-react';
import React from 'react';

type MobileNavProps = {
  show: boolean;
};

/**
 * MobileNav component: fixed at the bottom, mobile style.
 * Uses Tailwind CSS and iconoir-react for icons.
 * Menu: Home, Orders, (center button), Chat, Profile
 */
const MobileNav: React.FC<MobileNavProps> = ({ show }) => (
  <nav
    className={
      `fixed bottom-0 left-0 right-0 max-w-[480px] mx-auto bg-[var(--theme-primary)] border-t flex justify-around items-center py-2 text-xs z-50 text-white w-full
      transition-transform duration-300
      ${!show ? 'translate-y-0' : 'translate-y-full'}`
    }
    style={{ willChange: 'transform' }}
  >
    <div className="text-center nav-button flex flex-col items-center gap-2">
      <Home className="iconoir-home nav-icon nav-icon-active mx-auto text-lg" />

      Home
    </div>
    <div className="text-center nav-button flex flex-col items-center gap-2">
      <Box className="iconoir-box nav-icon mx-auto text-lg" />

      Orders
    </div>
    <div className="text-center">
      <div className="w-14 h-14 rounded-full bg-white border-4 border-[var(--theme-primary)] -mt-10" />
    </div>
    <div className="text-center nav-button flex flex-col items-center gap-2">
      <ChatBubble className="iconoir-chat-bubble nav-icon mx-auto text-lg" />

      Chat
    </div>
    <div className="text-center nav-button flex flex-col items-center gap-2">
      <User className="iconoir-user nav-icon mx-auto text-lg" />

      Profile
    </div>
  </nav>
);

export default MobileNav;
