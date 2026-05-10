# User Interviews

These notes summarize three foundational user interviews conducted with our target demographic. 

## Interview 1: Sarah (Director of Operations, 120-person startup)
- **Context**: Rapidly growing startup where engineering teams use corporate cards to expense their own software.
- **Direct Quote**: *"I honestly have no idea how many people are paying for Cursor versus GitHub Copilot. I just approve the Expensify reports. If you told me we were double-paying, I wouldn't be surprised at all."*
- **Direct Quote**: *"I wouldn't use a tool that requires me to connect our accounting software just to get an estimate. It takes too long to get security approval."*
- **What Changed in Design**: Sarah's feedback directly led to the decision to make the calculator completely "input-based" and free to try without OAuth or accounting integrations. We realized that speed-to-value was more important than 100% automated accuracy.

## Interview 2: Marcus (Fractional CFO for 4 Seed-stage startups)
- **Context**: Manages burn rates for early-stage companies. Extremely focused on cash runway.
- **Direct Quote**: *"The problem isn't that tools like ChatGPT are $20 a month. The problem is that Founders upgrade to the $60 Enterprise tier because they think they need the 'security' when they are a 3-person team. It's a massive waste of cash."*
- **Direct Quote**: *"If I could generate a report and just drop a link in the Founder's Slack channel saying 'Look at this waste,' that would do my job for me."*
- **What Changed in Design**: Marcus's feedback inspired the `Shareable Anonymous URL` feature. We realized that the person running the audit is often not the ultimate decision-maker. Building a beautiful, shareable link with rich Open Graph data enables a CFO to use our tool as a weapon in their internal budget meetings.

## Interview 3: David (Engineering Manager, 45-person agency)
- **Context**: Runs a dev shop. They buy licenses in bulk.
- **Direct Quote**: *"We use Claude and Cursor. The annoying part is that some devs barely use them, but we pay flat rates. But honestly, I hate filling out lead forms. If I run an audit and there's an email gate before I see the number, I just close the tab."*
- **Direct Quote**: *"It needs to look legit. I don't trust financial data from a site that looks like a weekend project."*
- **What Changed in Design**: This was the nail in the coffin for the email wall. We decided the email capture *must* come after the results are shown. Furthermore, David's comment about trust led to the strict "Mint for AI" high-fidelity aesthetic. The UI must convey absolute premium trust.
