'use server';

import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { AuditResult } from '@/types';

// Use mock/placeholder env variables if actual ones are not present
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mock.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'mock-key';
const resendApiKey = process.env.RESEND_API_KEY || 're_mock';

const supabase = createClient(supabaseUrl, supabaseKey);
const resend = new Resend(resendApiKey);

export async function submitLead(email: string, auditData: AuditResult) {
  try {
    // 1. Save Lead to Supabase (Mocked/Optional)
    // const { error: dbError } = await supabase.from('leads').insert([{ email, data: auditData }]);
    console.log(`[Supabase Mock] Lead saved for email: ${email}`);

    // 2. Send email via Resend (Mocked via console if key is 're_mock')
    if (resendApiKey === 're_mock') {
      console.log(`[Resend Mock] Email sent to: ${email} for total savings: $${auditData.totalAnnualSavings}`);
      return { success: true };
    }

    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [email],
      subject: 'Your AI Spend Audit Results',
      html: `<strong>You can save $${auditData.totalAnnualSavings}/year!</strong><br />Let's book a consultation.`,
    });

    return { success: true };
  } catch (error) {
    console.error('Error submitting lead:', error);
    return { success: false, error: 'Failed to submit lead' };
  }
}
