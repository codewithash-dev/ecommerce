"use client";

import Link from "next/link";

type StoreNavProps = {
  cartCount?: number;
};

export default function StoreNav({ cartCount = 0 }: StoreNavProps) {
  return (
    <header className="border-b border-gray-800 bg-black/90 backdrop-blur-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link
          href="/products"
          className="font-semibold text-white hover:text-gray-200 transition"
        >
          CodeWithAsh Store
        </Link>
        <nav className="flex items-center gap-6 text-sm text-gray-300">
          <Link href="/products" className="hover:text-white font-medium transition">
            Products
          </Link>
          <Link
            href="/cart"
            className="hover:text-white font-medium transition inline-flex items-center gap-1"
          >
            Cart
            {cartCount > 0 && (
              <span className="bg-fuchsia-500 text-white text-xs font-bold rounded-full min-w-[1.25rem] h-5 px-1.5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <Link href="/admin" className="hover:text-white font-medium transition">
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}
