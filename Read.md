This is the Mountain Helicopter frontend.

The project is currently in a static-page phase. Admin, Redux, auth, and some UI scaffolding are intentionally kept in the repository for the later dynamic/admin-panel phase, but they are excluded from TypeScript checks until those routes, dependencies, and API modules are wired back in.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open the local URL printed by Next.js with your browser to see the result.

Static pages should live under `app/`. Shared static-safe components should be added only when they do not depend on admin-only providers, Redux, auth, Radix packages that are not installed, or API clients that are not configured yet.

This project uses Manrope through `next/font` and the global design tokens in `app/globals.css`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
