<script lang="ts">
  import { account } from '$stores/account';

  import { shortenAddress } from '$libs/util/shortenAddress';
  import { web3Modal } from '$libs/wagmi';
  import { UserIcon } from '$components/Icon';

  function handleConnectWallet() {
    // Do not open if connection is active
    web3Modal.open({ view: 'Connect' });
  }

  function handleConfigureWallet() {
    // Do not open if connection is active
    web3Modal.open({ view: 'Account' });
  }
</script>

{#if !$account?.isConnected}
  <!-- Show Connect Wallet -->
  <button
    class="btn btn-primary border-0 text-primary-content rounded-full body-bold px-6 min-h-12 h-12 w-fit"
    on:click={modalOpen}>
    <UserIcon />
    Connect Wallet
  </button>
{:else}
  <!-- Show user address -->
  <button
    class="btn bg-neutral border-0 text-primary-content rounded-full body-bold px-6 min-h-12 h-12 w-fit"
    on:click={handleConfigureWallet}>
    <UserIcon />
    {shortenAddress($account.address ?? 'undefined')}
  </button>
{/if}
