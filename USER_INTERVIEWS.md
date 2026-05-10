# User Interviews

## Interview 1: Alex T. (Head of Finance, Series B B2B SaaS)
- **Company Stage**: Series B (~150 employees). Recently mandated to cut burn by 15%.
- **Direct Quotes**:
  - *"We handed out Cursor licenses to the entire engineering org last year because we wanted them to ship faster. I have zero idea if half of them even open the tool anymore."*
  - *"The problem with vendor management platforms is they take six weeks to implement. I just need a quick gut-check on whether we are bleeding cash on Anthropic."*
  - *"If you make me jump on a discovery call just to see my estimated waste, I am bouncing immediately."*
- **The Most Surprising Thing**: I assumed Finance leaders wanted deep integrations with Netsuite or Rippling to perfectly map seat usage. Alex didn't care about perfect accuracy; he just wanted a fast, directional benchmark to know if he needed to yell at the VP of Engineering.
- **What It Changed About Design**: This completely killed our idea for an OAuth-gated tool. We shifted to a "no-login, manual input" calculator to prioritize speed-to-value over automated accuracy.

## Interview 2: Sarah K. (VP of Engineering, Seed-Stage FinTech)
- **Company Stage**: Seed (~30 employees). Deeply technical, cost-conscious founding team.
- **Direct Quotes**:
  - *"I upgraded us to ChatGPT Enterprise because I assumed the Pro tier would use our proprietary code for training. I didn't actually read the terms of service."*
  - *"Honestly, $500 a month in waste isn't enough for me to switch my context and negotiate a downgrade. It has to be thousands of dollars for me to care."*
  - *"I'd use this tool, but I wouldn't be the one buying your consulting service. I'd just send the screenshot to our CEO to handle it."*
- **The Most Surprising Thing**: People are buying Enterprise tiers purely out of fear (data privacy), not for features (like increased rate limits). If we can educate them that Pro tiers often offer sufficient data protection, the downgrade is an easy sell.
- **What It Changed About Design**: We added a "Justification" string to the `AuditResult` interface in the code. We don't just tell them to downgrade; we explicitly tell them *why* (e.g., "Pro offers the same data privacy guarantees for teams under 10").

## Interview 3: Marcus R. (Fractional RevOps Consultant)
- **Company Stage**: Solopreneur consulting for multiple Series A companies.
- **Direct Quotes**:
  - *"SaaS sprawl is my entire business. Startups literally forget they are paying for Google Gemini Advanced because they expensed it on a random Friday."*
  - *"Your $1,500 consultation fee is way too low. I charge $5k for an audit that does exactly what your calculator does in ten seconds."*
  - *"If this spits out a PDF I can slap my own logo on and hand to my clients, I will pay you a subscription fee right now."*
- **The Most Surprising Thing**: We were so focused on selling to internal Finance teams that we entirely missed the agency/consultant market. Marcus wanted to white-label our tool to accelerate his own service business.
- **What It Changed About Design**: We realized the "Share Anonymous Audit" feature needed to generate a clean, brand-agnostic dashboard. We stripped out aggressive Credex branding on the shared `/share/[id]` route so consultants could comfortably share the links with their clients.
