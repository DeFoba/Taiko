import { account, address } from '$stores/account';
import { getCurrentAddressOrNull, wagmiConfig } from '.';

import { get } from 'svelte/store';
import { watchAccount } from '@wagmi/core';
import { boundedAddress } from '$stores/supabase';
import { isBound } from '$stores#ing';

let isWatching = false;
let unWatchAccount: () => void;

export async function startWatching() {
  address.set(getCurrentAddressOrNull());

  if (!isWatching) {
    // Action for subscribing to network changes.
    // See https://wagmi.sh/core/actions/watchNetwork
    unWatchAccount = watchAccount(wagmiConfig, {
      onChange(data) {

        account.set(data);

        // Update address if different
        if (data.address !== get(address)) {
          boundedAddress.set('');
          isBound.set(false);
          address.set(data.address);
        }
        isWatching = true;
      },
    });
  }
}

export function stopWatching() {
  unWatchAccount();
  isWatching = false;
}
