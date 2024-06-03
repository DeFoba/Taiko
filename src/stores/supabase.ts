import type { AuthSession, SupabaseClient } from '@supabase/supabase-js';

import type { Database } from '../database.types';
import { writable } from 'svelte/store';
import { zeroAddress } from 'viem';

export const input = writable<string>('');
export const supabaseClient = writable<SupabaseClient<Database>>();
export const session = writable<AuthSession>();
export const githubUsername = writable<string>('');
export const githubId = writable<string>('');
export const signature = writable<string>('');
export const boundedAddress = writable<string>(zeroAddress);

export const githubAllocation = writable<number>(0);
export const githubAllocationLoading = writable<boolean>(false);
export const addressAlloction = writable<number>(0);
export const addressAlloctionLoading = writable<boolean>(false);
