export type AITool = 'Cursor' | 'Claude' | 'ChatGPT' | 'Gemini';

export interface ToolUsageInput {
  tool: AITool;
  currentPlan: 'Pro' | 'Enterprise';
  seatCount: number;
  monthlySpend: number;
}

export interface SavingsRecommendation {
  tool: AITool;
  currentPlan: 'Pro' | 'Enterprise';
  recommendedPlan: 'Pro' | 'Enterprise';
  currentMonthlySpend: number;
  recommendedMonthlySpend: number;
  monthlySavings: number;
  justification: string;
}

export interface AuditResult {
  recommendations: SavingsRecommendation[];
  totalMonthlySavings: number;
  totalAnnualSavings: number;
}
