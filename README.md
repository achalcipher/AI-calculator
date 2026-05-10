# 💸 AI Spend Audit (by Credex)

> **Are you paying for Cursor, Claude, ChatGPT, and Gemini all at once?** You're probably overspending.

Welcome to **Credex**! This is a slick, B2B SaaS tool designed to act as your personal "Mint for AI." It analyzes your current team's seat counts and pricing tiers to instantly figure out where you're wasting money—and exactly how to fix it. 

We built this because AI subscriptions add up fast, and keeping track of overlapping features across different vendors is a headache. We wanted to give founders and team leads a beautiful, instant dashboard to find those savings.

---

## ✨ Features

- **⚡ Instant ROI:** A blazing-fast, hardcoded logic engine that calculates your potential savings the moment you hit submit.
- **📊 Premium Dashboard:** A gorgeous, high-fidelity results page that breaks down your current vs. optimized spend.
- **🔗 Anonymous Sharing:** Instantly generate a shareable URL to send your audit to your team—without ever forcing them to create an account.
- **📬 Lead Capture:** Built-in integration with Supabase and Resend to securely capture emails and send reports.

## 🚀 Quick Start

Want to spin this up locally and see how much you could save? It just takes two commands:

```bash
npm install
npm run dev
```

Then, open your browser and head over to [http://localhost:3000](http://localhost:3000). That's it!

*(Note: If you want to test the email and database features, you'll need to set up your `.env.local` file with your own Supabase and Resend keys!)*

## 🧠 Why We Built It This Way (The Nerd Stuff)

If you're curious about the architecture, here's a quick peek under the hood:

- **Hardcoded Pricing Engine:** We decided *against* a complex API or web scraper. Hardcoding the logic means zero latency and unbreakable stability. Sure, we have to update prices manually when vendors change them, but the speed is worth it.
- **Next.js App Router:** We're leveraging the latest Next.js features, including Server Actions. This lets us talk directly to our database (Supabase) without needing a separate backend server.
- **Pure Functions:** Our pricing logic is written purely functionally. It makes testing an absolute breeze—no messy mock states required!
- **shadcn/ui & Tailwind:** We wanted that premium, pixel-perfect look. Using shadcn gives us complete control over our components instead of fighting against a rigid UI library.

---

