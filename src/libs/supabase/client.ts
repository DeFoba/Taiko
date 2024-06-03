import { boundedAddress, githubId, githubUsername, isBound, session } from '$stores';

import type { Database } from '../../database.types';
import { createClient } from '@supabase/supabase-js';
import { getBoundAddress, getBoundedAddress } from './endpoints';
import { zeroAddress } from 'viem';
import { successToast } from '$components/NotificationToast';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.log('SUPABASE_URL or SUPABASE_ANON_KEY is not set. Please set it in .env!');
}

export const supabaseClient = createClient<Database>(supabaseUrl, supabaseAnonKey);

export function getSession() {
  return supabaseClient.auth.getSession();
}

export function startWatching() {
  return supabaseClient.auth.onAuthStateChange(async (_event, _session) => {
    if (!_session) return;

    if (_event === 'INITIAL_SESSION') {
      session.set(_session);
      githubUsername.set(_session?.user?.user_metadata?.preferred_username);
      githubId.set(_session?.user?.user_metadata?.provider_id);
      //   await getBoundedAddress(_session?.user?.user_metadata.provider_id);
      await getBoundAddress(_session?.user?.user_metadata.provider_id);
    } else if (_event === 'SIGNED_IN') {
      session.set(_session);
      githubUsername.set(_session?.user?.user_metadata?.preferred_username);
      githubId.set(_session?.user?.user_metadata?.provider_id);
      //   await getBoundedAddress(_session?.user?.user_metadata.provider_id);
      //   await getBoundAddress(_session?.user?.user_metadata.provider_id);
      successToast({ title: 'Github signed in successfully' });
    } else if (_event === 'SIGNED_OUT') {
      // handle sign out event

      githubUsername.set('');
      githubId.set('');
      boundedAddress.set(zeroAddress);
      isBound.set(false);
      session.set(_session);
    } else if (_event === 'PASSWORD_RECOVERY') {
      // handle password recovery event
    } else if (_event === 'TOKEN_REFRESHED') {
      // handle token refreshed event
    } else if (_event === 'USER_UPDATED') {
      // handle user updated event
    }
  });
}
