# Maintained Storyblok business blueprint

Use the pinned Next.js 16 / React 19 versions and pnpm. Read the installed version's docs at `node_modules/next/dist/docs/`. Run `pnpm lint`, `pnpm check:types`, `pnpm test`, and `pnpm build`.

This starter is independent of the chosen design system. Apply the design-system skill attached to the generation request. Preserve the framework versions; adapt an older skill's setup to this App Router version instead of downgrading the application.

Storyblok remains the source of truth. Use the server-only `getPublishedStories(uuids)` or `getPublishedStory(slug)` helpers from `src/lib/storyblok-delivery.ts` in Server Components. Pass the fetched story fields to client UI components. Store identifiers and presentation code, never a frozen copy of CMS text. Preserve `ContentRefresh` so an open page refreshes every 30 seconds. Keep the dynamic route or equivalent dynamic root page.

The orchestrator configures `STORYBLOK_DELIVERY_API_TOKEN` (public/published-only), `STORYBLOK_SPACE_ID`, and `STORYBLOK_REGION` in the Vercel project. Never expose tokens with `next.config.env`, put them in source, or request a Management API token. Unpublished preview is outside this starter's published-content path.

When replacing the catch-all page with a generated root page, remove the old catch-all route to avoid conflicting routes. Keep CMS attribution in code rather than visitor-facing technical copy. Never deploy or change the saved skill unless the caller explicitly asks.
