# 🤔 Founder's Reflection

### 1. The Nastiest Bug
The absolute worst bug was dealing with the dynamic Open Graph metadata for the shareable URL route (`/share/[id]`). Next.js 15 changed how the `params` object works—it's now asynchronous. My build kept failing with a weird type error, and the Twitter cards were coming up blank. I finally had to dig into the Next.js docs, alter the signature to `export async function generateMetadata`, and explicitly `await` the `params.id` before fetching from Supabase. It was a headache, but a good learning moment.

### 2. A Pivot I Made Early On
Originally, I wanted to force users to sign in with Google or Okta before they could even see the calculator. I reversed that *fast*. Asking for an email before giving them value is the easiest way to kill conversion on a tool like this. Instead, I pivoted to giving them the audit results instantly on the client, and only asking for an email at the very end if they actually had >$500 in savings.

### 3. How I Used AI to Build This
I treated AI like a co-founder and pair programmer. It helped me write the boilerplate Jest configs (which saved me an hour of reading docs) and helped me dial in the CSS gradients for that premium "Mint for AI" look. But—and this is important—I wrote the core logic engine (`pricingEngine.ts`) myself using test-driven development. I couldn't risk an AI hallucinating a math error when we are dealing with financial data.

### 4. What I'd Add With Two More Weeks
If I had more time, I *would* add that OAuth integration—but not as a gate. I'd add it as a magic "Auto-Fill" button. Instead of manually typing seat counts, the app would just pull their provisioned seats directly from Google Workspace. That would make the tool feel like literal magic and reduce friction to absolute zero.

### 5. Final Grade: 8.5/10
I'm pretty proud of this. The UI looks expensive, the math is bulletproof, and the sharing feature is built for virality. I knocked off 1.5 points because the pricing data is hardcoded instead of sitting in a CMS, meaning I have to push code every time Anthropic changes their prices. But hey, ship early, ship often.
