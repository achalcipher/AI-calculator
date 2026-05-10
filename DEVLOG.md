# Developer Log

**Day 1**
- **Hours Worked**: 5
- **Tasks**: Ideation, architecture planning, and initialized Next.js App Router with Tailwind CSS.
- **Learnings**: Discovered that Next.js 15+ has changed caching defaults, requiring careful consideration of `dynamic` route segments.
- **Blockers**: Trouble getting the `shadcn` CLI to install properly due to npm uppercase folder naming restrictions.

**Day 2**
- **Hours Worked**: 6
- **Tasks**: Built the hardcoded `pricingEngine.ts` utilizing pure functions. Added type definitions for AI tools.
- **Learnings**: Pure functions significantly simplify the mental overhead when dealing with complex nested IF statements for pricing tiers.
- **Blockers**: None today. Math logic was straightforward.

**Day 3**
- **Hours Worked**: 4
- **Tasks**: Configured Jest testing framework and wrote 5 robust test cases for the pricing engine.
- **Learnings**: Testing Next.js App router apps requires specific Jest configurations for path aliases (`@/*`).
- **Blockers**: `ts-jest` threw errors until I correctly mapped the moduleNameMapper in `jest.config.ts`.

**Day 4**
- **Hours Worked**: 7
- **Tasks**: Designed the high-fidelity UI dashboard. Implemented the "Mint for AI" aesthetic with dark gradients and glowing buttons.
- **Learnings**: Tailwind's `animate-in` and `fade-in` utility classes make micro-animations incredibly easy to implement without external libraries like Framer Motion.
- **Blockers**: Aligning the comparison cards dynamically on mobile screens took extra CSS grid tuning.

**Day 5**
- **Hours Worked**: 5
- **Tasks**: Integrated Supabase for storing anonymous shared audits and Resend for the lead capture system.
- **Learnings**: Next.js Server Actions (`'use server'`) completely eliminate the need for writing boilerplate API routes.
- **Blockers**: Setting up the Supabase mock environment variables properly so the app doesn't crash during local dev before the DB is fully spun up.

**Day 6**
- **Hours Worked**: 6
- **Tasks**: Created the `/share/[id]` dynamic route and implemented `generateMetadata` for Open Graph and Twitter cards.
- **Learnings**: Next.js `generateMetadata` is incredibly powerful for programmatic SEO and creating dynamic social sharing cards.
- **Blockers**: Debugging the async/await unwrapping for Next.js 15 `params` object inside the metadata function.

**Day 7**
- **Hours Worked**: 3
- **Tasks**: Final QA, Lighthouse accessibility checks, and writing comprehensive documentation.
- **Learnings**: A product isn't finished until the documentation is treated as a first-class feature.
- **Blockers**: Formatting 13 separate documentation files efficiently without losing track of constraints.
