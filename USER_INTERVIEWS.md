# 🗣️ Talking to Real People (User Interviews)

Before writing a single line of code, we sat down with three people in our target market to make sure we weren't building something nobody wanted.

## Interview 1: Sarah (Director of Ops, 120-person startup)
- **The Vibe**: Her startup is growing fast, and engineers are just putting software on corporate cards.
- **The Quote**: *"I honestly have no idea how many people are paying for Cursor versus GitHub Copilot. I just approve the Expensify reports. If you told me we were double-paying, I wouldn't be surprised at all."*
- **The Insight**: She explicitly told us she wouldn't use a tool that requires an accounting software integration because getting security approval takes weeks. This validated our decision to make the calculator a simple, manual-input tool. Speed-to-value wins.

## Interview 2: Marcus (Fractional CFO for 4 Seed startups)
- **The Vibe**: Manages burn rates. Extremely focused on cash runway and cutting the fat.
- **The Quote**: *"The problem isn't that tools like ChatGPT are $20 a month. The problem is that Founders upgrade to the $60 Enterprise tier because they think they need the 'security' when they are a 3-person team. It's a massive waste of cash."*
- **The Insight**: Marcus is the reason we built the `Shareable Anonymous URL`. The person running the audit (an engineer) isn't the decision-maker (the CFO). Generating a beautiful, shareable link gives the CFO ammunition for their budget meetings.

## Interview 3: David (Engineering Manager, 45-person dev shop)
- **The Vibe**: Buys licenses in bulk, hates corporate BS.
- **The Quote**: *"I hate filling out lead forms. If I run an audit and there's an email gate before I see the number, I just close the tab. Also, it needs to look legit. I don't trust financial data from a site that looks like a weekend project."*
- **The Insight**: This was the final nail in the coffin for the email wall. We *have* to show them the savings first. And David's comment about trust is why we spent so much time polishing the "Mint for AI" dark mode UI. If it doesn't look premium, they won't trust the math.
