# Automated Tests

The core math engine of this application handles financial calculations and is covered by an automated test suite using Jest. The tests ensure that recommendations for savings are always mathematically sound and properly handle edge cases.

## Test Suite: Pricing Engine (`src/logic/pricingEngine.test.ts`)

1. **`should recommend downgrading Cursor from Enterprise to Pro for a small team`**
   - **Purpose**: Verifies that teams below the 10-seat threshold on Cursor Enterprise are correctly flagged to downgrade to Pro, returning the exact monthly savings dollar amount.
2. **`should keep Claude on Enterprise if team size meets the threshold`**
   - **Purpose**: Ensures that teams who legitimately meet the 5-seat threshold for Claude Enterprise are NOT recommended to downgrade, returning $0 in savings.
3. **`should identify overpayment on a Pro plan`**
   - **Purpose**: Verifies that if a user inputs a monthly spend that is mathematically higher than the standard $20/seat Pro rate, the engine flags the overpayment even if the plan type shouldn't change.
4. **`should correctly calculate total annual savings for multiple tools`**
   - **Purpose**: A comprehensive integration test that passes an array of multiple tools (e.g., Cursor + Gemini) and verifies the `reduce` function correctly calculates the cumulative annual savings.
5. **`should return 0 savings if the plan is optimal`**
   - **Purpose**: Verifies that standard, optimized inputs do not accidentally generate fake savings, ensuring the engine maintains integrity.
