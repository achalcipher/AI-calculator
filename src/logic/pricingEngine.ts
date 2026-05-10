import { AITool, ToolUsageInput, SavingsRecommendation, AuditResult } from '../types';

const PRO_PRICE = 20;
// Enterprise price is custom, but we use an estimated threshold price for comparison 
// when smaller teams are overpaying for Enterprise when they could use Pro.
const ENTERPRISE_PRICE_ESTIMATE = 60; 
const CURSOR_ENTERPRISE_PRICE_ESTIMATE = 40;

const ENTERPRISE_THRESHOLDS: Record<AITool, number> = {
  Cursor: 10,
  Claude: 5,
  ChatGPT: 5,
  Gemini: 5,
};

export const calculateSavingsForTool = (input: ToolUsageInput): SavingsRecommendation => {
  const { tool, currentPlan, seatCount, monthlySpend } = input;
  const threshold = ENTERPRISE_THRESHOLDS[tool];
  
  let recommendedPlan: 'Pro' | 'Enterprise' = currentPlan;
  let recommendedMonthlySpend = monthlySpend;
  let justification = 'Your current plan is optimal for your team size.';
  
  const proCost = seatCount * PRO_PRICE;
  const entPriceEst = tool === 'Cursor' ? CURSOR_ENTERPRISE_PRICE_ESTIMATE : ENTERPRISE_PRICE_ESTIMATE;
  const entCost = seatCount * entPriceEst;

  if (currentPlan === 'Enterprise' && seatCount < threshold) {
    recommendedPlan = 'Pro';
    recommendedMonthlySpend = proCost;
    justification = `A team of ${seatCount} doesn't need Enterprise features. Downgrading to Pro saves money.`;
  } else if (currentPlan === 'Pro' && seatCount >= threshold) {
    // Sometimes it makes sense to upgrade to Enterprise for security/admin features,
    // but this audit tool focuses strictly on saving cash where obvious.
    // So we don't necessarily recommend upgrading to spend MORE, unless it's a bulk discount.
    // For this simple hardcoded engine, we'll assume Pro is cheaper and optimal unless they need SAML.
    justification = `You're on Pro. Keep an eye out if you need Enterprise admin controls.`;
  } else if (currentPlan === 'Enterprise' && seatCount >= threshold) {
    justification = `Enterprise is appropriate for a team of your size (${seatCount} seats).`;
  }
  
  // Also check if they are paying more than the standard rate for their current plan
  if (currentPlan === 'Pro' && monthlySpend > proCost) {
    recommendedMonthlySpend = proCost;
    justification = `You are paying $${monthlySpend} but standard Pro for ${seatCount} seats is $${proCost}.`;
  }

  const monthlySavings = monthlySpend - recommendedMonthlySpend;

  return {
    tool,
    currentPlan,
    recommendedPlan,
    currentMonthlySpend: monthlySpend,
    recommendedMonthlySpend,
    monthlySavings: monthlySavings > 0 ? monthlySavings : 0,
    justification,
  };
};

export const generateAudit = (inputs: ToolUsageInput[]): AuditResult => {
  const recommendations = inputs.map(calculateSavingsForTool);
  
  const totalMonthlySavings = recommendations.reduce((acc, curr) => acc + curr.monthlySavings, 0);
  const totalAnnualSavings = totalMonthlySavings * 12;

  return {
    recommendations,
    totalMonthlySavings,
    totalAnnualSavings,
  };
};
