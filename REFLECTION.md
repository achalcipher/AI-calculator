# Reflection

### 1. What was the most difficult bug you encountered, and how did you fix it?
The most challenging bug involved the dynamic Open Graph metadata generation for the shareable URL route (`/share/[id]`). In the newest version of Next.js, the `params` object passed to `generateMetadata` is asynchronous and must be unwrapped using `await`. Initially, the build was failing with a confusing type error, and the metadata tags were rendering as `undefined`. I fixed it by carefully reviewing the Next.js 15 documentation on dynamic route segments, altering the signature of my function to `export async function generateMetadata({ params }: Props): Promise<Metadata>`, and explicitly awaiting the `params.id` before fetching the data from Supabase. 

### 2. Describe a decision you made early on that you later reversed. Why?
Initially, I planned to have a persistent Postgres database schema that required a user to create an account via OAuth before they could even run the audit. I reversed this decision when I realized that asking for an email *before* providing value would kill the conversion rate for a tool like this. Instead, I pivoted to generating the audit results entirely on the client instantly, and only asking for an email (the lead capture form) at the very end if the tool identified more than $500 in savings.

### 3. How specifically did you use AI tools to assist in building this project?
I used AI heavily as a pair programmer. I used it to quickly generate the boilerplate Jest configurations, which saved me about an hour of reading documentation. I also used AI to help brainstorm the exact CSS gradients and drop-shadows needed to achieve the premium "Mint for AI" aesthetic. However, I deliberately wrote the core logic engine (`pricingEngine.ts`) myself using test-driven development to ensure the math was pristine and not hallucinated.

### 4. If you had 2 more weeks, what feature would you add next and why?
I would add a direct OAuth integration with the users' SaaS providers (e.g., logging in via Google Workspace or Okta). Instead of asking the user to manually type in how many seats they have, the app would pull their actual provisioned seats directly from their IdP. This would eliminate user error, dramatically increase the "magic" factor of the product, and likely double our conversion rate by reducing input friction to zero.

### 5. Rate your own execution on a scale of 1-10 and justify your score.
I rate my execution an **8.5/10**. 
The UI is stunning, the core logic is mathematically sound and well-tested, and the sharing architecture is highly scalable. The decision to use pure functions makes the app incredibly maintainable. However, I deducted 1.5 points because the current Supabase integration is mocked in local development, and the pricing data is hardcoded rather than dynamically pulled from a headless CMS, which means maintaining the app requires deploying code changes rather than just updating a database row.
