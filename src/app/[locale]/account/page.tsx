import MenuHeader from '@/components/MenuHeader';
import MobileLayout from '@/layouts/MobileLayout';

const userProfile = {
  name: 'Juan Dela Cruz',
  email: 'juan@example.com',
  phone: '09171234567',
  address: '123 Mabini Street, Barangay Malinis, Manila',
};

const orderHistory = [
  {
    id: '#ORD-0012',
    date: 'May 15, 2025',
    items: ['Adobo', 'Sinigang'],
    total: 370,
    status: 'Delivered',
  },
  {
    id: '#ORD-0008',
    date: 'May 10, 2025',
    items: ['Kare-Kare'],
    total: 150,
    status: 'Delivered',
  },
];

export default function AccountPage() {
  return (
    <MobileLayout hideNav={true}>
      <MenuHeader />

      <div className="pt-20 px-4 max-w-[480px] mx-auto w-full">
        <h1 className="text-2xl font-bold mb-4">My Account</h1>

        {/* Profile Info */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h2 className="text-lg font-semibold mb-3">Profile Info</h2>
          <div className="text-sm mb-2">
            <span className="font-medium">Name: </span>
            {userProfile.name}
          </div>
          <div className="text-sm mb-2">
            <span className="font-medium">Email: </span>
            {userProfile.email}
          </div>
          <div className="text-sm mb-2">
            <span className="font-medium">Phone: </span>
            {userProfile.phone}
          </div>
          <div className="text-sm">
            <span className="font-medium">Address: </span>
            {userProfile.address}
          </div>
        </div>

        {/* Order History */}
        <div className="mb-6">
          <h2 className="font-semibold text-lg mb-2">Order History</h2>
          {orderHistory.map(order => (
            <div key={order.id} className="bg-white p-3 rounded-lg shadow mb-3">
              <div className="flex justify-between font-medium mb-1">
                <span>{order.id}</span>
                <span className="text-sm text-gray-500">{order.date}</span>
              </div>
              <div className="text-sm text-gray-600">
                Items:
                {' '}
                {order.items.join(', ')}
              </div>
              <div className="text-sm">
                Total: ₱
                {order.total}
              </div>
              <div className="text-xs text-green-600 mt-1">{order.status}</div>
            </div>
          ))}
        </div>
      </div>
    </MobileLayout>
  );
}
