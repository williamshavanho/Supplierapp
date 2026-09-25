# Supplier Analysis

React + TypeScript PWA for analysing Omni Accounts supplier invoices in USD.

## Setup
1. `npm install`
2. Copy `.env.example` to `.env` and set the Supabase URL/key.
3. Apply `supabase/migrations/202609250001_supplier_analysis.sql` with Supabase CLI or SQL editor.
4. Deploy the Edge Function and set `OMNI_API_URL`, `OMNI_API_TOKEN`, and Supabase service-role secrets. Adapt the `/invoices` mapping in `supabase/functions/omni-invoices/index.ts` to the exact Omni Accounts response.
5. `npm run dev` (or `npm run build && npm run preview`).

The schema deliberately stores the transaction exchange rate (`usd_rate`) alongside each invoice, so historical analysis is not affected by later rate changes. Promote the first account to `super_admin` in `profiles`; all new accounts default to `procurement_manager`. PWA installation is supported through the generated manifest and service worker in production builds.
