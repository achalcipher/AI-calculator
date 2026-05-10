# AI Spend Audit (Credex)

Credex is a B2B SaaS tool designed to identify and eliminate wasteful spending on AI subscriptions like Cursor, Claude, ChatGPT, and Gemini. It features a hardcoded logic engine that analyzes current seat counts and pricing tiers to instantly generate a tailored savings report and a shareable anonymous link. 

## Demo
- [Watch the Loom Walkthrough (Mock Link)](https://loom.com/share/mock-link-123)
- Screenshot:
  ![Audit Results Dashboard](/placeholder-dashboard.png)

## Quick Start
```bash
npm install
npm run dev
```
Navigate to `http://localhost:3000` to start saving money.

## Decisions & Trade-offs
1. **Hardcoded Pricing Engine vs API Integration**: We hardcoded the pricing rules instead of relying on web scraping or an external API. *Trade-off*: We gained immense stability and completely eliminated latency, but we sacrifice automatic updates when vendors change their pricing.
2. **Next.js App Router vs Pages Router**: Chose App Router for its integrated Server Actions and native support for React Server Components. *Trade-off*: We gained simpler backend integration (Supabase/Resend) without needing an API layer, but faced a steeper learning curve regarding component boundaries (`'use client'`).
3. **Pure Functions vs Object-Oriented Engine**: Wrote the pricing logic as pure functional code. *Trade-off*: Testing is vastly simplified (no mock states required), but scaling the engine to handle highly complex, interdependent vendor discounts might require excessive parameter passing in the future.
4. **Anonymous Shared Links vs Required User Accounts**: We generate a shareable URL that strips PII instead of forcing users to create an account to view past audits. *Trade-off*: Greatly reduces user friction and increases virality, but we lose long-term tracking of user behavior without a login.
5. **shadcn/ui vs Component Libraries (MUI/Chakra)**: Used shadcn/ui. *Trade-off*: We have complete control over the markup and styling to achieve the premium "Mint for AI" look, but we had to manually install and manage the raw component files instead of just importing from an npm package.
