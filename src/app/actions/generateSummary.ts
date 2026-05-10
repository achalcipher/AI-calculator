'use server';

import { AuditResult } from '@/types';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
});

export async function generateSummary(auditData: AuditResult): Promise<string> {
  // Graceful fallback template
  const fallbackTemplate = `Based on your team's current setup, we've identified $${auditData.totalAnnualSavings.toLocaleString()} in potential annual savings. By downgrading unnecessary enterprise tiers to Pro equivalents, you can optimize your AI spend without sacrificing core functionality.`;

  if (!process.env.ANTHROPIC_API_KEY || auditData.totalAnnualSavings === 0) {
    return fallbackTemplate;
  }

  try {
    const toolBreakdown = auditData.recommendations
      .filter(r => r.monthlySavings > 0)
      .map(r => `${r.tool}: Currently paying $${r.currentMonthlySpend} for ${r.currentPlan}. Recommended: ${r.recommendedPlan} ($${r.recommendedMonthlySpend}). Saving: $${r.monthlySavings}/mo`)
      .join('\n');

    const response = await anthropic.messages.create({
      model: 'claude-3-haiku-20240307',
      max_tokens: 150,
      system: 'You are an expert SaaS financial auditor and fractional CFO. You are reviewing an AI spend audit for a potential client. Your goal is to write a punchy, professional, and personalized ~100-word paragraph summarizing their results. The tone should be direct, slightly urgent (they are wasting money!), but reassuring that we can fix it. Do not use generic greetings like "Dear user". Start immediately with the insight.',
      messages: [
        {
          role: 'user',
          content: `Here is the raw audit data:\nTotal Annual Savings: $${auditData.totalAnnualSavings}\n\nBreakdown of waste by tool:\n${toolBreakdown}\n\nWrite the ~100-word summary paragraph based on this data. Focus on the biggest area of waste.`,
        },
      ],
    });

    const content = response.content[0];
    if (content.type === 'text') {
       return content.text;
    }
    return fallbackTemplate;
  } catch (error) {
    console.error('Failed to generate AI summary:', error);
    return fallbackTemplate;
  }
}
