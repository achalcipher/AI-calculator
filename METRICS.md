# Product Metrics

## The North Star Metric
**Total Dollars Saved for Users**
Our ultimate goal is not just traffic or clicks, but the actual, quantifiable financial impact we have on startups. Tracking the "Total Dollars Saved" (the sum of `totalAnnualSavings` across all generated audits) perfectly aligns our product value with the user's success. If this number is growing, it means our tool is actively finding waste, and the users are experiencing "aha" moments.

## Input Metrics
To drive the North Star metric, we monitor these three leading indicators:

1. **Audits Completed per Week**
   - *Why*: This measures top-of-funnel engagement. If users are landing on the page but abandoning the form before clicking "Analyze," our UX is failing. 

2. **Share Link Generation Rate**
   - *Why*: This measures virality. We calculate this by dividing the number of `saveAudit` actions by the number of completed audits. A high share rate means the data is shocking enough that an engineer or manager feels compelled to show their boss.

3. **Lead Capture Conversion Rate**
   - *Why*: This measures the viability of our business model. Of the users who are presented with the "Get a Credex Consultation" CTA (meaning they have >$500 in savings), what percentage actually enter their email? This dictates our Customer Acquisition Cost math.

## The Pivot Trigger Threshold
**Lead Capture Conversion Rate < 1.5%**
If we generate $1,000,000 in "Total Dollars Saved" but our Lead Capture Conversion Rate drops below 1.5%, we will pivot our monetization strategy. 

A conversion rate that low indicates that while the tool is useful, users do not trust us to handle the consulting, or the friction of a sales call is too high. If we hit this trigger, we will pivot away from high-ticket consulting and instead monetize by gating the advanced reporting features behind a low-friction $49 one-time payment (a pure SaaS approach).
