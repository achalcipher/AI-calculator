'use client';

import { useState } from 'react';
import { AuditResult } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Share, ChevronLeft, CheckCircle2 } from 'lucide-react';
import LeadCaptureForm from './LeadCaptureForm';
import { saveAudit } from '@/app/actions/saveAudit';

export default function AuditResultsDashboard({ result, onReset }: { result: AuditResult; onReset: () => void }) {
  const [isSharing, setIsSharing] = useState(false);
  const [shareUrl, setShareUrl] = useState('');
  const [showLeadForm, setShowLeadForm] = useState(false);

  const handleShare = async () => {
    setIsSharing(true);
    try {
      const { id } = await saveAudit(result);
      const url = `${window.location.origin}/share/${id}`;
      setShareUrl(url);
      navigator.clipboard.writeText(url);
    } catch (e) {
      console.error(e);
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 pt-12 pb-24">
      <button onClick={onReset} className="text-slate-400 hover:text-white mb-8 flex items-center transition-colors">
        <ChevronLeft className="w-4 h-4 mr-1" /> Back to input
      </button>

      {/* Hero Section */}
      <div className="text-center mb-16 animate-in slide-in-from-bottom-4 duration-700 fade-in">
        <h2 className="text-2xl font-medium text-slate-400 mb-4 tracking-wide uppercase">Potential Annual Savings</h2>
        <div className="text-8xl font-black text-white tracking-tighter mb-6 flex justify-center items-center gap-2">
          <span className="bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
            ${result.totalAnnualSavings.toLocaleString()}
          </span>
        </div>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Based on your current team setup, we've identified significant areas where you are overpaying for AI tooling.
        </p>
      </div>

      {/* Tool Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {result.recommendations.map((rec, i) => (
          <Card key={rec.tool} className="bg-slate-900/50 border-slate-800 backdrop-blur-xl animate-in slide-in-from-bottom-8 duration-700 fill-mode-both" style={{ animationDelay: `${i * 100}ms` }}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center mb-2">
                <CardTitle className="text-2xl text-slate-100">{rec.tool}</CardTitle>
                {rec.monthlySavings > 0 ? (
                  <Badge className="bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border-0">Save ${rec.monthlySavings}/mo</Badge>
                ) : (
                  <Badge variant="outline" className="text-slate-400 border-slate-700">Optimized</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4 mt-4 bg-slate-950/50 rounded-lg p-4 border border-slate-800">
                <div className="text-center flex-1">
                  <div className="text-sm text-slate-500 mb-1">Current</div>
                  <div className="font-semibold text-slate-300">{rec.currentPlan}</div>
                  <div className="text-slate-400 text-sm">${rec.currentMonthlySpend}</div>
                </div>
                <ArrowRight className="text-slate-600 w-5 h-5 mx-2" />
                <div className="text-center flex-1">
                  <div className="text-sm text-slate-500 mb-1">Recommended</div>
                  <div className="font-bold text-emerald-400">{rec.recommendedPlan}</div>
                  <div className="text-emerald-400 text-sm">${rec.recommendedMonthlySpend}</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm">{rec.justification}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mb-16">
        <Button 
          variant="outline" 
          className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
          onClick={handleShare}
          disabled={isSharing}
        >
          {isSharing ? 'Generating...' : <><Share className="w-4 h-4 mr-2" /> Share Anonymous Audit</>}
        </Button>
      </div>

      {shareUrl && (
        <div className="max-w-md mx-auto mb-16 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-center animate-in fade-in">
          <p className="text-emerald-400 text-sm mb-2 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 mr-1" /> Copied to clipboard!</p>
          <code className="text-xs text-slate-400 break-all">{shareUrl}</code>
        </div>
      )}

      {/* Conditional Call to Action */}
      {result.totalAnnualSavings > 500 && !showLeadForm && (
        <div className="text-center bg-gradient-to-r from-emerald-900/40 to-teal-900/40 border border-emerald-500/20 p-12 rounded-2xl animate-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
          <h3 className="text-3xl font-bold text-white mb-4">Leave the configuration to us.</h3>
          <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
            You're leaving ${result.totalAnnualSavings.toLocaleString()} on the table. Let our experts optimize your AI stack and negotiate enterprise contracts on your behalf.
          </p>
          <Button 
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold h-12 px-8 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
            onClick={() => setShowLeadForm(true)}
          >
            Get a Credex Consultation
          </Button>
        </div>
      )}

      {showLeadForm && (
        <div className="max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4">
          <LeadCaptureForm auditData={result} />
        </div>
      )}
    </div>
  );
}
