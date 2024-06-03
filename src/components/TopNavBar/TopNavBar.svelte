<script lang="ts">
  // variables
  import Logo from '$images/taiko-h-wht.svg';
  import HamburgerIcon from '$images/hamburger.svg';
  import XIcon from '$images/x.svg';

  import { screen } from '$stores/responsiveness';

  import { MobileNavigation } from '$components/MobileNavigation';
  import ConnectWalletButton from '$components/Button/ConnectWalletButton.svelte';
  import { account } from '$stores/account';
  import { beforeNavigate } from '$app/navigation';

  let screenSize: number;
  let mobileMenu = false;

  function toggleMobileMenu() {
    console.log('toggleMobileMenu');
    mobileMenu = !mobileMenu;
  }
  beforeNavigate(() => {
    mobileMenu = false;
  });
</script>

<svelte:window bind:innerWidth={screenSize} />

<div
  class="flex body-regular justify-between items-center box-border mx-auto w-full max-w-[1440px] mt-8 py-2 pl-6 pr-2 rounded-full">
  {#if $screen == 'mobile'}
    <a href="#">
      <div class="flex justify-around items-center">
        <img src={Logo} alt="logo" />
      </div>
    </a>
    <!-- Mobile Burger Button -->
    <button
      class="indicator btn bg-elevated-background size-[50px] btn-circle fixed z-30 right-7"
      on:click={toggleMobileMenu}>
      <span class="indicator-item badge badge-xs {$account?.isConnected ? 'badge-primary' : 'badge-accent'}"></span>
      {#if !mobileMenu}
        <img src={HamburgerIcon} alt="menu" />
      {:else}
        <img src={XIcon} alt="menu" />
      {/if}
    </button>
  {/if}
  {#if $screen == 'desktop'}
    <a href="#">
      <img src={Logo} alt="logo" class="h-[24.5px]" />
    </a>
    <div class="flex items-center justify-center relative gap-4 h-9 text-primary-content body-regular">
      <a href="#">
        <div
          class="dropdown dropdown-hover dropdown-bottom rounded-full lg:bg-elevated-background lg:hover:bg-neutral-background px-8 py-3">
          <div tabindex="0" role="button" onClick="modalOpen()">Claim TKO</div>
        </div>
      </a>
      <!-- <div
        class="dropdown dropdown-hover dropdown-bottom rounded-full lg:bg-elevated-background lg:hover:bg-neutral-background px-8 py-3">
        <a href="#top">
          <div tabindex="0" role="button">Claim +</div>
        </a>
      </div> -->

      <!-- <div class="rounded-full lg:bg-container px-8 py-3">
        <div class="text-tertiary-content">Leaderboard</div>
      </div> -->
    </div>
    <ConnectWalletButton />
  {/if}
  {#if mobileMenu}
    <MobileNavigation />
  {/if}
</div>
