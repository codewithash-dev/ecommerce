"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import StoreNav from "@/components/StoreNav";

type Cart = Record<string, number>;

const MOCK_PRODUCTS: { id: string; name: string; price: number }[] = [
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

export default function CartPage() {
  const [cart, setCartState] = useState<Cart>({});

  useEffect(() => {
    setCartState(getCart());
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
  const entries = Object.entries(cart).filter(([, q]) => q > 0);
  const byId = Object.fromEntries(MOCK_PRODUCTS.map((p) => [p.id, p]));
  const subtotal = entries.reduce(
    (sum, [id, q]) => sum + (byId[id]?.price ?? 0) * q,
    0
  );

  return (
    <main className="min-h-screen bg-black text-white pb-16">
      <StoreNav cartCount={count} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-2xl font-bold mb-6">Cart</h1>

        {entries.length === 0 ? (
          <p className="text-gray-400 mb-6">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4 mb-8">
            {entries.map(([id, q]) => {
              const product = byId[id];
              if (!product) return null;
              return (
                <li
                  key={id}
                  className="flex items-center justify-between rounded-xl border border-gray-800 bg-[#0a0a0a] px-4 py-3"
                >
                  <div>
                    <p className="font-medium text-white">{product.name}</p>
                    <p className="text-sm text-gray-400">
                      ${product.price.toFixed(2)} × {q}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => updateCart(id, -1)}
                      className="w-8 h-8 rounded border border-gray-600 text-gray-300 hover:bg-gray-800 transition"
                    >
                      −
                    </button>
                    <span className="min-w-[1.5rem] text-center text-sm">{q}</span>
                    <button
                      type="button"
                      onClick={() => updateCart(id, 1)}
                      className="btn-animate w-8 h-8 rounded bg-fuchsia-600 text-white hover:bg-fuchsia-500 transition"
                    >
                      +
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        {entries.length > 0 && (
          <div className="border-t border-gray-800 pt-4 mb-6">
            <p className="text-lg font-semibold text-white">
              Subtotal: ${subtotal.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Checkout is a demo — no payment is processed.
            </p>
          </div>
        )}

        <div className="flex flex-wrap gap-4">
          <Link
            href="/products"
            className="btn-animate inline-flex items-center justify-center gradient-cta text-white px-6 py-3 rounded-lg font-semibold"
          >
            Continue shopping
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white transition text-sm">
            ← Home
          </Link>
        </div>
      </div>
    </main>
  );
}
