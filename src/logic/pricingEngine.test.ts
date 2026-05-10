import { calculateSavingsForTool, generateAudit } from './pricingEngine';
import { ToolUsageInput } from '../types';

describe('Pricing Engine', () => {
  it('1. should recommend downgrading Cursor from Enterprise to Pro for a small team', () => {
    const input: ToolUsageInput = {
      tool: 'Cursor',
      currentPlan: 'Enterprise',
      seatCount: 2,
      monthlySpend: 80, // $40 * 2
    };
    
    const result = calculateSavingsForTool(input);
    expect(result.recommendedPlan).toBe('Pro');
    expect(result.recommendedMonthlySpend).toBe(40); // 2 * $20
    expect(result.monthlySavings).toBe(40);
    expect(result.justification).toContain("doesn't need Enterprise features");
  });

  it('2. should keep Claude on Enterprise if team size meets the threshold', () => {
    const input: ToolUsageInput = {
      tool: 'Claude',
      currentPlan: 'Enterprise',
      seatCount: 6, // Threshold is 5
      monthlySpend: 360,
    };
    
    const result = calculateSavingsForTool(input);
    expect(result.recommendedPlan).toBe('Enterprise');
    expect(result.monthlySavings).toBe(0);
  });

  it('3. should identify overpayment on a Pro plan', () => {
    const input: ToolUsageInput = {
      tool: 'ChatGPT',
      currentPlan: 'Pro',
      seatCount: 3,
      monthlySpend: 100, // Should be 3 * $20 = $60
    };
    
    const result = calculateSavingsForTool(input);
    expect(result.recommendedPlan).toBe('Pro');
    expect(result.recommendedMonthlySpend).toBe(60);
    expect(result.monthlySavings).toBe(40);
    expect(result.justification).toContain("standard Pro");
  });

  it('4. should correctly calculate total annual savings for multiple tools', () => {
    const inputs: ToolUsageInput[] = [
      {
        tool: 'Cursor',
        currentPlan: 'Enterprise',
        seatCount: 2,
        monthlySpend: 80, // Savings: 40/mo
      },
      {
        tool: 'Gemini',
        currentPlan: 'Pro',
        seatCount: 3,
        monthlySpend: 100, // Savings: 40/mo
      }
    ];

    const result = generateAudit(inputs);
    expect(result.totalMonthlySavings).toBe(80);
    expect(result.totalAnnualSavings).toBe(960);
  });

  it('5. should return 0 savings if the plan is optimal', () => {
    const input: ToolUsageInput = {
      tool: 'Cursor',
      currentPlan: 'Pro',
      seatCount: 4,
      monthlySpend: 80,
    };
    
    const result = calculateSavingsForTool(input);
    expect(result.monthlySavings).toBe(0);
    expect(result.recommendedPlan).toBe('Pro');
    expect(result.currentMonthlySpend).toBe(80);
  });
});
