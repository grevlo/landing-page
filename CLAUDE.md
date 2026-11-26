# CLAUDE.md: grevlo.com marketing site

Marketing site for Grevlo, a white-label site health report API for UK web agencies on maintenance
retainers (uptime, PageSpeed and SSL in a branded PDF). Solo founder Dom Howarth. Small, reversible changes.

## Stack and deploy

- Next.js 14.2.3, **App Router** (`app/`), React 18, TypeScript, Tailwind 3, shadcn/ui (`components/ui/`).
- Hosted on Vercel, which **auto-deploys every push to `main`**. Merging a PR publishes to grevlo.com.
- Blog posts are MDX files in `content/blog/*.mdx` (frontmatter: title, description, date, author, tags),
  loaded by `lib/blog.ts` and rendered at `/blog/[slug]`. `app/sitemap.ts` picks posts up automatically.
- Pages: `/` (`app/page.tsx` composes the sections in `components/layout/sections/`), `/blog`,
  `/blog/[slug]`, `/whitepaper`.
- The home page doesn't render these leftover template sections: `benefits`, `community`, `contact`,
  `features`, `services`, `sponsors`, `team`, `testimonial`. Don't edit them by mistake. `README.md` is
  still the template's README.

## Commands (PowerShell, repo root)

```powershell
npm ci
npm run dev      # http://localhost:3000
npm run build    # production build; must pass before a PR
npm run lint
npm test         # jest (__tests__/)
```

## Content and integrations

- Landing page sections: hero, what you get, problem, how it works, pricing, whitepaper promo, FAQ,
  founding partner, works with, from the blog, footer.
- Tally forms (script loaded in `app/layout.tsx`): whitepaper `RGJZJP` (`app/whitepaper/page.tsx`), founding
  partner `dWjbEz` (`components/layout/sections/founding-partner.tsx`).
- "Try It Now" (`components/demo-form.tsx`, test in `__tests__/demo-form.test.tsx`) calls
  `https://api.grevlo.com/v1/demo/report?url=...&agencyName=...`. The API allows CORS only from
  https://grevlo.com and https://www.grevlo.com, limits each IP to 5 requests per hour, and returns a
  watermarked PDF. API docs: https://api.grevlo.com/docs.
- Brand: navy `#1E3A8A`. Lime accent as used in this codebase: `#A3E635` (Tailwind `lime` in
  `tailwind.config.ts`, hover `#92d120`). The API's demo PDF uses `#84CC16`.

## Copy rules

- en-GB spelling and formats throughout. (`<html lang>` is currently `en`.)
- Lead with the agency's pain (hours lost to manual monthly reporting), not with features.
- Foreground flat-rate pricing: £49/month Starter (up to 15 client domains), £99/month Standard
  (unlimited), no per-client fees.
- No invented statistics. Every figure needs a source on the page (see the whitepaper and pricing
  comparison footnotes). If you can't source it, leave it out.
- Contact: dom@grevlo.com.

## Rules

1. Never push to `main` or merge PRs. Work on a branch, open a PR, and Dom merges.
2. `npm run build` and `npm test` pass before a PR, and no tests are removed.
3. Ask before adding or upgrading any npm package. Give the name, version, licence and reason.
4. No secrets in the repo. `.env*` files stay out of git.
5. Never propose replacing the stack (framework, router, styling). Extend what exists.
6. When something isn't covered here, follow how the existing code does it.
