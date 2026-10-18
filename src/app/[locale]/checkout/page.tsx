/* eslint-disable jsx-a11y/label-has-associated-control */
import MenuHeader from '@/components/MenuHeader';
import MobileLayout from '@/layouts/MobileLayout';

export default function CheckoutPage() {
  return (
    <MobileLayout hideNav={true}>
      <MenuHeader />
      <div className="pt-20 px-4 max-w-[480px] mx-auto w-full">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input type="text" placeholder="Juan Dela Cruz" className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Delivery Address</label>
            <textarea placeholder="Street, Barangay, City" className="w-full border px-3 py-2 rounded"></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Contact Number</label>
            <input type="tel" placeholder="09XXXXXXXXX" className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Payment Method</label>
            <select className="w-full border px-3 py-2 rounded">
              <option>Cash on Delivery</option>
              <option>GCash</option>
              <option>PayMaya</option>
            </select>
          </div>

          <button type="submit" className="w-full bg-[var(--theme-primary)] text-white py-3 rounded-lg font-semibold">
            Place Order
          </button>
        </form>
      </div>
    </MobileLayout>
  );
}
