import MenuHeader from '@/components/MenuHeader';
import MobileLayout from '@/layouts/MobileLayout';
import Link from 'next/link';

const cartItems = [
  {
    name: 'Adobo',
    cook: 'Aling Maria',
    price: 120,
    quantity: 2,
    image: '/images/adobo.jpg',
  },
  {
    name: 'Sinigang',
    cook: 'Nanay Fe',
    price: 130,
    quantity: 1,
    image: '/images/sinigang.jpg',
  },
];

export default function OrderPage() {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <MobileLayout hideNav={true}>
      <MenuHeader />
      <div className="pt-20 px-4 max-w-[480px] mx-auto w-full">
        <h1 className="text-2xl font-bold mb-4">Your Order</h1>

        <div className="space-y-4 mb-6">
          {cartItems.map((item, i) => (
            <div key={i} className="flex items-center bg-white p-3 rounded-lg shadow">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
              <div className="flex-1">
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm text-gray-500">
                  by
                  {item.cook}
                </div>
                <div className="text-sm mt-1">
                  Qty:
                  {item.quantity}
                </div>
              </div>
              <div className="text-sm font-medium">
                ₱
                {item.price * item.quantity}
              </div>
            </div>
          ))}
        </div>

        <div className="text-right font-semibold mb-6">
          Total: ₱
          {total}
        </div>

        <Link href="/checkout" className="block text-center bg-[var(--theme-primary)] text-white py-3 rounded-lg font-semibold">
          Proceed to Checkout
        </Link>
      </div>
    </MobileLayout>
  );
}
