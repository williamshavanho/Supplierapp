import { supabase, Invoice } from './supabase';
export async function fetchInvoices(from: string, to: string): Promise<Invoice[]> {
  const { data, error } = await supabase.from('invoices').select('*').gte('invoice_date', from).lte('invoice_date', to).order('invoice_date', { ascending: false });
  if (error) throw error; return data ?? [];
}
export async function syncOmni(from: string, to: string) {
  const { data, error } = await supabase.functions.invoke('omni-invoices', { body: { from, to } });
  if (error) throw error; return data;
}
