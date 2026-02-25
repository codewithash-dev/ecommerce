"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import StoreNav from "@/components/StoreNav";

type Cart = Record<string, number>;

const MOCK_PRODUCTS = [
  { id: "1", name: "Wireless Headphones", price: 89.99 },
  { id: "2", name: "Mechanical Keyboard", price: 129.99 },
  { id: "3", name: "USB-C Hub", price: 49.99 },
  { id: "4", name: "Desk Lamp", price: 39.99 },
  { id: "5", name: "Monitor Stand", price: 59.99 },
  { id: "6", name: "Webcam HD", price: 79.99 },
];

const CART_KEY = "codewithash-store-cart";

function getCart(): Cart {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function setCart(cart: Cart) {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function cartCount(cart: Cart): number {
  return Object.values(cart).reduce((a, q) => a + q, 0);
}

export default function ProductsPage() {
  const [loading, setLoading] = useState(true);
  const [cart, setCartState] = useState<Cart>({});

  useEffect(() => {
    setCartState(getCart());
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  const updateCart = (id: string, delta: number) => {
    setCartState((prev) => {
      const next = { ...prev };
      const q = (next[id] ?? 0) + delta;
      if (q <= 0) delete next[id];
      else next[id] = q;
      setCart(next);
      return next;
    });
  };

  const count = cartCount(cart);

  return (
    <main className="min-h-screen bg-black text-white pb-16">
      <StoreNav cartCount={count} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-2xl font-bold mb-6">Products</h1>

        {loading ? (
          <p className="text-gray-400">Loading products...</p>
        ) : (
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_PRODUCTS.map((product) => (
              <li
                key={product.id}
                className="rounded-xl border border-gray-800 bg-[#0a0a0a] overflow-hidden hover:border-gray-700 transition"
              >
                <div className="aspect-square bg-gray-800/50 flex items-center justify-center text-gray-600 text-sm">
                  Product image
                </div>
                <div className="p-4">
                  <h2 className="font-semibold text-white mb-1">{product.name}</h2>
                  <p className="text-fuchsia-400 font-medium mb-3">
                    ${product.price.toFixed(2)}
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => updateCart(product.id, -1)}
                      disabled={(cart[product.id] ?? 0) === 0}
                      className="w-8 h-8 rounded-lg border border-gray-600 text-gray-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-800 transition"
                    >
                      −
                    </button>
                    <span className="min-w-[1.5rem] text-center text-sm text-gray-300">
                      {cart[product.id] ?? 0}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateCart(product.id, 1)}
                      className="btn-animate w-8 h-8 rounded-lg bg-fuchsia-600 text-white hover:bg-fuchsia-500 transition"
                    >
                      +
                    </button>
                    <span className="ml-2 text-xs text-gray-500">in cart</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/cart"
            className="btn-animate inline-flex items-center justify-center gradient-cta text-white px-6 py-3 rounded-lg font-semibold"
          >
            View Cart {count > 0 && `(${count})`}
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white transition text-sm">
            ← Home
          </Link>
        </div>
      </div>
    </main>
  );
}
