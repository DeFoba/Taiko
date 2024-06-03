<script>
  import { page } from '$app/stores';
  import { Page } from '$components/Page';
</script>

<svelte:head>
  <title>Taiko Airdrop | Error</title>
</svelte:head>

<div class="f-center h-full">
  {#if $page && $page.error && $page.error.message}
    <h1>{$page.error.message}</h1>
  {/if}
</div>
