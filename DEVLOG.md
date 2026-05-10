# 📓 Founder's Dev Log

Building Credex was a sprint. Here is a raw look at the week it took to get this out the door.

**Day 1: The Foundation**
- **Time Spent**: 5 hours
- **The Grind**: Brainstorming, whiteboarding the architecture, and spinning up Next.js App Router with Tailwind.
- **Aha Moment**: Next.js 15 has some new caching defaults that made me rethink how to handle our dynamic routes.
- **The Struggle**: Fighting with npm over folder naming restrictions just to get the `shadcn` CLI installed. Typical start to a project!

**Day 2: The Brains of the Operation**
- **Time Spent**: 6 hours
- **The Grind**: Writing the core `pricingEngine.ts` logic and setting up TypeScript definitions for all the AI tools.
- **Aha Moment**: Using pure functions for the math logic was the best decision. It made dealing with all the nested pricing tiers so much easier to reason about.

**Day 3: Making Sure It Actually Works**
- **Time Spent**: 4 hours
- **The Grind**: Configured Jest and wrote solid test cases to ensure the pricing engine never hallucinates a bad number.
- **The Struggle**: `ts-jest` yelled at me for an hour until I finally mapped the path aliases (`@/*`) correctly in `jest.config.ts`.

**Day 4: Making It Pretty**
- **Time Spent**: 7 hours
- **The Grind**: Designing the high-fidelity UI. I went all-in on the "Mint for AI" dark mode aesthetic.
- **Aha Moment**: Tailwind's `animate-in` utility classes are magic. I got sweet micro-animations working without needing to drag in heavy libraries like Framer Motion.
- **The Struggle**: CSS Grid on mobile is still a puzzle sometimes. Took a bit of tweaking to get the comparison cards looking perfect on small screens.

**Day 5: Hooking Up the Pipes**
- **Time Spent**: 5 hours
- **The Grind**: Integrating Supabase to store those anonymous shared audits, and plugging in Resend to capture emails.
- **Aha Moment**: Server Actions (`'use server'`) are insane. Skipping the boilerplate API route creation feels illegal but awesome.

**Day 6: Going Viral (Hopefully)**
- **Time Spent**: 6 hours
- **The Grind**: Building the `/share/[id]` dynamic route and wiring up `generateMetadata` so the links look great on Twitter and Slack.
- **Aha Moment**: Programmatic SEO with dynamic Open Graph cards is going to be huge for our growth loop.
- **The Struggle**: Had to wrestle with the Next.js 15 `params` object unwrapping, but got it sorted.

**Day 7: The Final Polish**
- **Time Spent**: 3 hours
- **The Grind**: Final QA, Lighthouse accessibility checks, and writing up all this documentation!
- **Aha Moment**: A product isn't done until you can easily explain it to someone else.
