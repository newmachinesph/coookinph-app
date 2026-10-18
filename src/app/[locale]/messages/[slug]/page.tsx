'use client';

import MenuHeader from '@/components/MenuHeader';
import MobileLayout from '@/layouts/MobileLayout';
import { useParams } from 'next/navigation';

const sampleMessages = [
  { from: 'cook', text: 'Hello po! Confirmed po yung Adobo order ninyo. 😊', time: '10:20 AM' },
  { from: 'user', text: 'Thanks po! Kelan po delivery?', time: '10:21 AM' },
  { from: 'cook', text: 'Mga 11:30 AM darating na po.', time: '10:22 AM' },
];

export default function MessageThreadPage() {
  const { slug } = useParams();

  return (
    <MobileLayout hideNav={true}>
      <MenuHeader />
      <div className="pt-20 px-4 max-w-[480px] mx-auto w-full flex flex-col h-[calc(100vh-80px)]">
        <h1 className="text-xl font-semibold mb-4">
          Chat with
          {slug}
        </h1>

        <div className="flex-1 overflow-y-auto space-y-3 pb-4">
          {sampleMessages.map((msg, i) => (
            <div
              key={i}
              className={`max-w-[80%] px-4 py-2 rounded-lg text-sm ${
                msg.from === 'user'
                  ? 'ml-auto bg-[var(--theme-primary)] text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {msg.text}
              <div className="text-[10px] text-right mt-1 opacity-60">{msg.time}</div>
            </div>
          ))}
        </div>

        <form className="flex items-center mt-auto border-t pt-2">
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 border rounded-full px-4 py-2 mr-2 text-sm"
          />
          <button type="submit" className="bg-[var(--theme-primary)] text-white px-4 py-2 rounded-full text-sm">
            Send
          </button>
        </form>
      </div>
    </MobileLayout>
  );
}
