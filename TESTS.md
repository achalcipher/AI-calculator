# 🧪 Automated Tests (Because Math is Hard)

The core engine of this app handles financial math. If we tell a CFO they are wasting $10k, we better be right. That's why the entire logic engine is covered by a rigorous Jest test suite.

## The Test Suite (`src/logic/pricingEngine.test.ts`)

1. **`should recommend downgrading Cursor from Enterprise to Pro for a small team`**
   - **Why we test this**: Makes sure that if a 3-person team is on Cursor Enterprise, we accurately flag them to downgrade and spit out the exact dollar amount saved.

2. **`should keep Claude on Enterprise if team size meets the threshold`**
   - **Why we test this**: We don't want to look stupid by telling a 50-person engineering org to downgrade to Pro when they actually *need* Enterprise. This ensures we return $0 in savings for legit enterprise setups.

3. **`should identify overpayment on a Pro plan`**
   - **Why we test this**: Sometimes people are just getting ripped off. If they input a monthly spend higher than the standard $20/seat Pro rate, the engine catches it even if the plan tier stays the same.

4. **`should correctly calculate total annual savings for multiple tools`**
   - **Why we test this**: The big kahuna. We throw an array of multiple tools at it (Cursor + Gemini) and make sure our `reduce` function correctly calculates the cumulative annual savings without dropping a zero.

5. **`should return 0 savings if the plan is optimal`**
   - **Why we test this**: Verifies that standard, optimized setups don't magically generate fake savings. Integrity is everything.
