import { shortenAddress } from './../util/shortenAddress';
import { signMessage, type SignMessageParameters } from '@wagmi/core';
import type { Json } from '../../database.types';
import { supabaseClient } from './client';
import { UserRejectedRequestError, zeroAddress } from 'viem';
import { wagmiConfig } from '$libs/wagmi';
import { isBound } from '$stores#ing';
import { PUBLIC_API_ENDPOINT } from '$env/static/public';

import { successToast, warningToast, errorToast } from '$components/NotificationToast';
import { truncateString } from '$libs/util/truncateString';
import { boundedAddress, session } from '$stores/supabase';
import { get } from 'svelte/store';
import { fetchWithRetry } from '$libs/fetch';

type GithubToAddress = {
  evmAddress: string;
  githubUsername: string;
};

export async function checkIfAddressBound(_address: string): Promise<boolean> {
  try {
    const response = await fetchWithRetry(`${PUBLIC_API_ENDPOINT}/api/bound?address=${_address}`);

    if (response.status !== 200) {
      throw Error('Error checking if github is bound');
    } else {
      let data = await response.json();

      if (!data) {
        return false;
      } else {
        errorToast({ title: `Address already bound`, message: `Bound to ${truncateString(data.github_username, 16)}` });
        return true;
      }
    }
  } catch (error) {
    throw error;
  }
}

export async function checkIfGithubBound(_githubId: string): Promise<boolean> {
  try {
    const response = await fetchWithRetry(`${PUBLIC_API_ENDPOINT}/api/username?username=${_githubId}`);
    if (response.status !== 200) {
      throw Error('Error checking if github is bound');
    } else {
      let data = await response.json();

      if (data && data?.length !== 0) {
        isBound.set(true);
        errorToast({ title: `Github already bound`, message: `Bound to ${shortenAddress(data.address)}` });
      }
      if (!data) {
        return false;
      } else {
        return true;
      }
    }
  } catch (error) {
    throw error;
  }
}

export async function getBoundAddress(_githubId: string): Promise<string> {
  try {
    const response = await fetchWithRetry(`${PUBLIC_API_ENDPOINT}/api/username?username=${_githubId}`);

    if (response.status !== 200) {
      throw Error('Error checking if github is bound');
    } else {
      let data = await response.json();

      if (!data) {
        return zeroAddress;
      } else {
        isBound.set(true);
        errorToast({ title: `Github already bound`, message: `Bound to ${shortenAddress(data.address)}` });

        return data;
      }
    }
  } catch (error) {
    throw error;
  }
}

export async function bindAddressToGithub(_githubId: string, _githubUsername: string, _address: string): Promise<void> {
  try {
    if (await checkIfAddressBound(_address)) {
      isBound.set(true);
      return;
    }
  } catch (error) {
    errorToast({ title: 'Error', message: 'Error checking if address is bound' });
    throw error;
  }

  try {
    if (await checkIfGithubBound(_githubId)) {
      isBound.set(true);
      errorToast({ title: 'Error', message: 'Github already bound' });
      return;
    }
  } catch (error) {
    errorToast({ title: 'Error', message: 'Error checking if github is bound' });
    throw error;
  }

  const message = `Bind Github: ${_githubUsername} to address: ${_address}`;
  let args: SignMessageParameters = {
    message: message,
  };
  let _signature: string;
  try {
    _signature = await signMessage(wagmiConfig, args);

    let access_token = get(session).access_token;

    const response = await fetchWithRetry(`${PUBLIC_API_ENDPOINT}/api#`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        address: _address as string,
        signature: _signature as string,
        message: message as string,
        github_id: _githubId as string,
        github_username: _githubUsername as string,
        token: access_token,
      }),
    });

    if (response.status !== 200) {
      errorToast({ title: 'Error', message: 'Failed to bind address to Github' });
      throw new Error('Failed to bind address to Github');
    }
    isBound.set(true);
  } catch (error) {
    errorToast({ title: 'Error', message: 'Error binding address to Github' });
    throw error;
  }
}

export async function getBoundedAddress(githubId: string | undefined): Promise<void> {
  if (!githubId) {
    return;
  }

  try {
    let { data, error } = await supabaseClient
      .from('github_mapping')
      .select('evm_address,github_username')
      .eq('github_id', githubId);

    // If it returns data, then it is bound
    if (data && data?.length !== 0) {
      isBound.set(true);
      errorToast({ title: `Github already bound`, message: `Bound to ${shortenAddress(data[0].evm_address)}` });
    }
  } catch (error) {
    console.error('Error fetching bound address:', error);
  }
}

type AirdropDataReturn = {
  address: string;
  amount: string;
  proof: Json;
};

export async function fetchAirdropProofs(userAddress: string): Promise<AirdropDataReturn> {
  let { data: airdropProofs, error } = await supabaseClient
    .from('airdrop_data') // Ensure this matches your table name exactly
    .select('*')
    .eq('address', userAddress);

  if (error) {
    console.error('Error fetching airdrop proofs:', error);
    return { address: zeroAddress, amount: '0', proof: [] };
  }

  if (!airdropProofs || airdropProofs.length === 0) {
    return { address: zeroAddress, amount: '0', proof: [] };
  }

  // Return the first proof
  return airdropProofs[0];
}

export async function fetchAirdropRoot(): Promise<string> {
  let { data, error } = await supabaseClient
    .from('airdrop_merkle_root') // Ensure this matches your table name exactly
    .select('*');

  if (error) {
    console.error('Error fetching airdrop proofs:', error);
    throw error;
  }

  if (!data || data.length === 0) {
    throw new Error('No airdrop root found');
  }

  // Return the first proof
  return data[0].merkle_root;
}
