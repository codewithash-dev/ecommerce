# CodeWithAsh Store

Full-stack e-commerce demo built with **Next.js**, **Supabase**, and **Stripe**. Includes product listing, cart management, checkout flow, and an admin panel.

Part of [Code with Ash](https://codewithash.com) — learn to build real projects.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

- **/** — Landing (View Store, Admin)
- **/products** — Product grid, add to cart
- **/cart** — Cart and subtotal (demo; no payment)
- **/admin** — Admin panel (products, orders, inventory)

## Tech stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Cart persisted in `localStorage` (demo)

## License

MIT
