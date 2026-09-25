import { createClient } from '@supabase/supabase-js';
export const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);
export type Role = 'super_admin' | 'procurement_manager';
export type Invoice = { id?: string; omni_id: string; supplier_name: string; invoice_number?: string; invoice_date: string; currency: 'USD'|'ZWG'|'ZAR'; amount: number; usd_rate: number; usd_amount?: number; status?: string };
