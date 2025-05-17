import MenuHeader from '@/components/MenuHeader';
import MobileLayout from '@/layouts/MobileLayout';
import Link from 'next/link';

const dummyMessages = [
  {
    cookName: 'Aling Maria',
    cookSlug: 'aling-maria',
    image: '/images/aling-maria.jpg',
    lastMessage: 'Order po for delivery bukas?',
    timestamp: '2h ago',
  },
  {
    cookName: 'Nanay Fe',
    cookSlug: 'nanay-fe',
    image: '/images/nanay-fe.jpg',
    lastMessage: 'Na-prepare ko na po ang Kare-Kare ninyo 😊',
    timestamp: 'Yesterday',
  },
];

export default function MessagesPage() {
  return (
    <MobileLayout hideNav={true}>
      <MenuHeader />
      <div className="pt-20 px-4 w-full max-w-[480px] mx-auto">
        <h1 className="text-2xl font-bold mb-4">Messages</h1>

        {dummyMessages.map(msg => (
          <Link
            key={msg.cookSlug}
            href={`/messages/${msg.cookSlug}`} // future route
            className="block border-b last:border-none py-3"
          >
            <div className="flex items-center">
              <img
                src={msg.image}
                alt={msg.cookName}
                className="w-12 h-12 object-cover rounded-full mr-3"
              />
              <div className="flex-1">
                <div className="font-medium">{msg.cookName}</div>
                <div className="text-sm text-gray-600 truncate">{msg.lastMessage}</div>
              </div>
              <div className="text-xs text-gray-400 whitespace-nowrap ml-2">
                {msg.timestamp}
              </div>
            </div>
          </Link>
        ))}

        {dummyMessages.length === 0 && (
          <p className="text-gray-500 text-sm text-center mt-6">No messages yet.</p>
        )}
      </div>
    </MobileLayout>
  );
}
