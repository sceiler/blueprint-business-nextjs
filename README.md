# Maintained Storyblok business blueprint

Derived from [Storyblok’s business blueprint](https://github.com/storyblok/blueprint-business-nextjs), upgraded to Next.js 16.3.6 and React 19.3.0. The original content model and component patterns remain available. Choose a design system independently through the v0 request; this repository does not install Storyblok MUI.

Use Node 22+ and `corepack pnpm install`. Set the variables in `.env.example` with a **public, published-only** Storyblok delivery token. Management tokens never belong in this app. Run `pnpm dev`, or `pnpm build` and `pnpm start`.

Server Components use `getPublishedStory(slug)` or `getPublishedStories(uuids)` from `src/lib/storyblok-delivery.ts`. Each render retrieves the latest space version, then reads published content using Storyblok’s versioned CDN. The app does not store a CMS snapshot or cache the page at build time. `ContentRefresh` refreshes an open visible page every 30 seconds; allow a few additional seconds for Storyblok’s publish propagation. Draft preview is separate from this published-content flow.

For generated landing pages, keep the selected story UUIDs and bind UI props to their fetched content fields. Keep `ContentRefresh` in the layout. If adding `src/app/page.tsx`, remove the original optional catch-all route so there is one root route.

Validation: `pnpm lint`, `pnpm check:types`, `pnpm test`, `pnpm build`.
