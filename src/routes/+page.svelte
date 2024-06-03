<script lang="ts">
  import { Footer } from '$components/Footer';
  import { Page } from '$components/Page';

  import {
    AirdropTitleSection,
    DiscoverTokenAllocation,
    FAQSection,
    LearnAboutTaikoTokenAllocation,
    TimerSection,
    TokenClaimTimelineSection,
  } from '$components/Section';
  import AirdropTimeline from '$components/Stepper/AirdropTimeline.svelte';
  import { startWatching, wagmiConfig } from '$libs/wagmi';
  import { reconnect } from '@wagmi/core';
  import { onMount } from 'svelte';

  onMount(() => {
    reconnect(wagmiConfig);
    startWatching();
  });

  // Unix timestamp for January 1, 2025
  let targetTimestamp = new Date('2024-05-26T00:00:00Z').getTime() / 1000;
</script>

<div
  class="flex items-center justify-center overflow-visible bg-landing-page-mobile-bg lg:bg-landing-page-bg w-full bg-cover bg-no-repeat">
  <Page>
    <div class="flex flex-col align-middle justify-center w-full gap-[100px] break-words">
      <AirdropTitleSection />
      <!-- <TimerSection {targetTimestamp} /> -->
      <AirdropTimeline step={1} />
      <DiscoverTokenAllocation />
      <LearnAboutTaikoTokenAllocation />
      <FAQSection />
      <div class="flex items-center justify-center w-full">
        <Footer></Footer>
      </div>
    </div>
  </Page>
</div>
