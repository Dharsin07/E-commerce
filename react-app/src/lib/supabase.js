import { createClient } from '@supabase/supabase-js';

// Singleton Supabase client (no auth session handling here; auth is via Firebase)
let supabaseClient = null;

export const getSupabaseClient = () => {
  if (!supabaseClient) {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error('Supabase environment variables are not configured');
    }

    supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
  }

  return supabaseClient;
};

export const supabase = getSupabaseClient();

// Profile helpers (sync Firebase user with Supabase profiles table)
export const upsertProfile = async (uid, email, name, role = 'user') => {
  const { data, error } = await supabase
    .from('profiles')
    .upsert(
      { id: uid, email, name, role, updated_at: new Date().toISOString() },
      { onConflict: 'id' }
    )
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const getProfile = async (uid) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('name, role')
    .eq('id', uid)
    .single();
  if (error && error.code !== 'PGRST116') throw error; // ignore not found
  return data;
};

