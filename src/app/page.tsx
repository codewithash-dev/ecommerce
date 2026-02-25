import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16 pb-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
          CodeWithAsh Store
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-10">
          Full-stack e-commerce with Next.js, Supabase, Stripe & cart management.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/products"
            className="btn-animate inline-flex items-center justify-center gradient-cta text-white px-6 py-3 rounded-lg font-semibold"
          >
            View Store
          </Link>
          <Link
            href="/admin"
            className="btn-animate inline-flex items-center justify-center border border-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
          >
            Admin Panel
          </Link>
          <a
            href="https://github.com/codewithash-dev/ecommerce"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-animate inline-flex items-center justify-center border border-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
          >
            View code
          </a>
        </div>
        <p className="mt-12 text-sm text-gray-500">
          By <a href="https://codewithash.com" className="text-fuchsia-400 hover:underline">Code with Ash</a>
        </p>
      </div>
    </main>
  );
}
