'use client';

import { useState } from 'react';
import { generateAudit } from '@/logic/pricingEngine';
import { AITool, ToolUsageInput, AuditResult } from '@/types';
import AuditResultsDashboard from '@/components/AuditResultsDashboard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const TOOLS: AITool[] = ['Cursor', 'Claude', 'ChatGPT', 'Gemini'];

export default function Home() {
  const [inputs, setInputs] = useState<ToolUsageInput[]>(
    TOOLS.map((tool) => ({ tool, currentPlan: 'Pro', seatCount: 1, monthlySpend: 20 }))
  );
  const [auditResult, setAuditResult] = useState<AuditResult | null>(null);

  const handleInputChange = (index: number, field: keyof ToolUsageInput, value: string | number) => {
    const newInputs = [...inputs];
    newInputs[index] = { ...newInputs[index], [field]: value } as ToolUsageInput;
    setInputs(newInputs);
  };

  const handleRunAudit = () => {
    // Only pass tools where they spend > 0 or have seats > 0
    const activeInputs = inputs.filter(i => i.seatCount > 0 && i.monthlySpend > 0);
    const result = generateAudit(activeInputs);
    setAuditResult(result);
  };

  if (auditResult) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-emerald-500/30">
        <AuditResultsDashboard result={auditResult} onReset={() => setAuditResult(null)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 text-slate-50">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            🛑 Stop burning cash on AI tools
          </h1>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            Enter your current AI seat counts below. We&apos;ll run a blazing-fast audit and show you exactly where you&apos;re bleeding cash. <br/><span className="text-sm opacity-75">(Takes 10 seconds. No credit card required).</span>
          </p>
        </div>

        <Card className="bg-slate-900 border-slate-800 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-100">Your AI Stack</CardTitle>
            <CardDescription className="text-slate-400">Input your current spending and seats.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {inputs.map((input, idx) => (
              <div key={input.tool} className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-3 font-medium text-slate-200">{input.tool}</div>
                <div className="col-span-3">
                  <select
                    className="w-full bg-slate-800 border-slate-700 rounded-md p-2 text-sm text-slate-200"
                    value={input.currentPlan}
                    onChange={(e) => handleInputChange(idx, 'currentPlan', e.target.value)}
                  >
                    <option value="Pro">Pro</option>
                    <option value="Enterprise">Enterprise</option>
                  </select>
                </div>
                <div className="col-span-3">
                  <Input
                    type="number"
                    placeholder="Seats"
                    className="bg-slate-800 border-slate-700 text-slate-200"
                    value={input.seatCount || ''}
                    onChange={(e) => handleInputChange(idx, 'seatCount', Number(e.target.value))}
                  />
                </div>
                <div className="col-span-3 relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                  <Input
                    type="number"
                    placeholder="Spend"
                    className="bg-slate-800 border-slate-700 text-slate-200 pl-7"
                    value={input.monthlySpend || ''}
                    onChange={(e) => handleInputChange(idx, 'monthlySpend', Number(e.target.value))}
                  />
                </div>
              </div>
            ))}
            <Button
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold h-12 mt-4 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
              onClick={handleRunAudit}
            >
              💸 Analyze My Spend (100% Free)
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
