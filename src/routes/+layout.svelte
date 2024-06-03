<script lang="ts">
  import '../app.css';
  import '../i18n';
  // import '../styles/styles.css';
  import TopNavBar from '$components/TopNavBar/TopNavBar.svelte';
  import { onDestroy, onMount } from 'svelte';
  import MaxWidthContainer from '$components/Container/MaxWidthContainer.svelte';

  import Footer from '$components/Footer/Footer.svelte';
  import Responsiveness from '$components/Responsiveness/Responsiveness.svelte';
  import { PUBLIC_WALLETCONNECT_PROJECT_ID } from '$env/static/public';
  import { userBlacklisted } from '$stores/ip';
  import { BlacklistScreen } from '$components/Blacklist';
  import { NotificationToast } from '$components/NotificationToast';
  import { page } from '$app/stores';

  // Throw Error if no projectId is set
  if (!PUBLIC_WALLETCONNECT_PROJECT_ID) {
    console.log(
      'PUBLIC_WALLETCONNECT_PROJECT_ID is not set. Please set it in .env! https://cloud.walletconnect.com/app',
    );
  }
  let background = 'bg-landing-page-bg';
  let mobileBackground = 'bg-landing-page-mobile-bg';
  // If change to account, update address

  function updateBackground() {
    // Get Url and update background based on it
    const url = window.location.pathname;
    console.log(url);
    if (url === '/') {
      background = 'bg-landing-page-bg';
      mobileBackground = 'bg-landing-page-mobile-bg';
    } else {
      background = 'bg-main-bg';
      mobileBackground = 'bg-main-mobile-bg';
    }
  }

  const syncPointer = ({ x, y }: { x: number; y: number }) => {
    document.documentElement.style.setProperty('--x', x.toFixed(2));
    document.documentElement.style.setProperty('--xp', (x / window.innerWidth).toFixed(2));
    document.documentElement.style.setProperty('--y', y.toFixed(2));
    document.documentElement.style.setProperty('--yp', (y / window.innerHeight).toFixed(2));
  };

  onDestroy(() => {
    document.body.removeEventListener('pointermove', syncPointer);
  });

  onMount(async () => {
    document.body.addEventListener('pointermove', syncPointer);

    updateBackground();
    window.addEventListener('popstate', () => {});
  });
</script>

<Responsiveness />

{#if $page && $page.error && $page.error.message}
  <h1>{$page.error.message}</h1>
{:else}
  <div class="flex flex-col min-w-[300px] items-center justify-center w-full">
    <div class="w-full">
      <header>
        <MaxWidthContainer>
          <TopNavBar />
        </MaxWidthContainer>
      </header>
      <main>
        <slot />
      </main>
    </div>
  </div>
{/if}

<NotificationToast />

<style>
  header {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  main {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
</style>
