'use client';

import { useState } from 'react';
import { AuditResult } from '@/types';
import { submitLead } from '@/app/actions/submitLead';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function LeadCaptureForm({ auditData }: { auditData: AuditResult }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    const res = await submitLead(email, auditData);
    if (res.success) {
      setSuccess(true);
    } else {
      alert('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  if (success) {
    return (
      <Card className="bg-slate-900 border-emerald-500/30 text-center py-8">
        <CardContent>
          <div className="w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
          <h3 className="text-xl font-bold text-white mb-2">We'll be in touch!</h3>
          <p className="text-slate-400">Check your inbox for next steps on claiming your savings.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-slate-900 border-slate-800 shadow-2xl">
      <CardHeader>
        <CardTitle className="text-xl text-white">Unlock Your Savings</CardTitle>
        <CardDescription className="text-slate-400">
          Enter your work email to get a detailed breakdown and schedule your consultation.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input 
            type="email" 
            placeholder="you@company.com" 
            required 
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="bg-slate-950 border-slate-800 text-white"
          />
          <Button 
            type="submit" 
            disabled={loading} 
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold"
          >
            {loading ? 'Submitting...' : 'Send me the report'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
