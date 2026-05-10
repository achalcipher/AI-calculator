# Prompts Used During Development

This document outlines the primary LLM prompts used to assist in the architectural setup and generation of the mathematical logic. 

## Prompt 1: The Logic Engine
**Prompt**: 
> "Write a TypeScript-based audit engine for AI tool spending. It should not use AI for calculations; use hardcoded rules based on the following tools: Cursor, Claude, ChatGPT, and Gemini. The logic must identify overspending—for example, flagging if a team of 2 is on an Enterprise plan when a Pro plan is cheaper. Write the engine as a series of pure functions that take current plan, monthly spend, and seat count as inputs and return a 'savings recommendation' object. Include 5 Jest test cases in a separate file."

**Why I wrote it that way**: 
By explicitly requiring *pure functions*, I ensured the logic was entirely decoupled from the Next.js React UI. By specifying the exact inputs and the desired object output, the LLM generated highly structured code that plugged perfectly into my types.

**What failed**: 
Initially, the LLM tried to hallucinate live pricing API endpoints instead of using hardcoded numbers. I had to reiterate the prompt to explicitly say "It should not use AI for calculations; use hardcoded rules".

## Prompt 2: The "Mint for AI" UI
**Prompt**: 
> "Build a high-fidelity 'Audit Results' dashboard page. It needs to look like a 'Mint for AI' product ready for Product Hunt. Use a clean, data-heavy layout with a hero section showing 'Total Annual Savings' in large, clear typography. Below, create a list of cards for each tool showing 'Current Spend' vs 'Recommended Spend' with a one-sentence justification for the change. If total savings are over $500, include a prominent call-to-action for a 'Credex Consultation'."

**Why I wrote it that way**: 
"Mint for AI" is a very specific design heuristic that tells the LLM to use large, readable typography, high-contrast financial numbers, and a trustworthy aesthetic. 

**What failed**: 
The first iteration lacked animation and looked quite flat. I had to manually edit the output to add `animate-in fade-in` Tailwind classes to achieve the polished feel requested in the prompt.
