'use server';

import { createClient } from '@supabase/supabase-js';
import { AuditResult } from '@/types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mock.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'mock-key';

const supabase = createClient(supabaseUrl, supabaseKey);

// Basic in-memory store for mocked scenario (for demonstration during dev)
const mockStore: Record<string, AuditResult> = {};

export async function saveAudit(auditData: AuditResult): Promise<{ id: string }> {
  // Generate a random ID
  const id = Math.random().toString(36).substring(2, 10);
  
  if (supabaseUrl.includes('mock')) {
    console.log(`[Supabase Mock] Saved audit with ID: ${id}`);
    mockStore[id] = auditData;
    return { id };
  }

  // Real implementation:
  // await supabase.from('shared_audits').insert([{ id, data: auditData }]);

  return { id };
}

export async function getAuditById(id: string): Promise<AuditResult | null> {
  if (supabaseUrl.includes('mock')) {
    return mockStore[id] || null;
  }

  // Real implementation:
  // const { data } = await supabase.from('shared_audits').select('*').eq('id', id).single();
  // return data?.data;
  return null;
}
