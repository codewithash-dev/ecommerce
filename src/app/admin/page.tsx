"use client";

import Link from "next/link";
import StoreNav from "@/components/StoreNav";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-black text-white pb-16">
      <StoreNav cartCount={0} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-2xl font-bold mb-2">Admin Panel</h1>
        <p className="text-gray-400 mb-8">
          Manage products, inventory, and orders for CodeWithAsh Store.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <section className="rounded-xl border border-gray-800 bg-[#0a0a0a] p-6">
            <h2 className="text-lg font-semibold text-white mb-2">Products</h2>
            <p className="text-sm text-gray-400 mb-4">
              Add, edit, or remove products from the store.
            </p>
            <button
              type="button"
              className="btn-animate px-4 py-2 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 transition text-sm"
            >
              Manage products
            </button>
          </section>

          <section className="rounded-xl border border-gray-800 bg-[#0a0a0a] p-6">
            <h2 className="text-lg font-semibold text-white mb-2">Orders</h2>
            <p className="text-sm text-gray-400 mb-4">
              View and fulfill customer orders.
            </p>
            <button
              type="button"
              className="btn-animate px-4 py-2 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 transition text-sm"
            >
              View orders
            </button>
          </section>

          <section className="rounded-xl border border-gray-800 bg-[#0a0a0a] p-6 sm:col-span-2">
            <h2 className="text-lg font-semibold text-white mb-2">Inventory</h2>
            <p className="text-sm text-gray-400 mb-4">
              Update stock levels and track inventory.
            </p>
            <button
              type="button"
              className="btn-animate px-4 py-2 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 transition text-sm"
            >
              Update inventory
            </button>
          </section>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/products"
            className="btn-animate inline-flex items-center justify-center gradient-cta text-white px-6 py-3 rounded-lg font-semibold"
          >
            View Store
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white transition text-sm">
            ← Home
          </Link>
        </div>
      </div>
    </main>
  );
}
