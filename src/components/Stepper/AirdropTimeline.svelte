<script lang="ts">
  import AirdropTimelineStep from './AirdropTimelineStep.svelte';

  export let step: number = 2;
</script>

<div class="max-w-[1360.66px] flex justify-center items-center h-[188px]">
  <svg xmlns="http://www.w3.org/2000/svg" width="373" height="4" viewBox="0 0 373 4" fill="none">
    <path d="M0 2H373" stroke="url(#paint0_linear_1177_20106)" stroke-width="3" />
    <defs>
      <linearGradient id="paint0_linear_1177_20106" x1="0" y1="2.5" x2="373" y2="2.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#700748" stop-opacity="0" />
        <stop offset="0.8" stop-color="#D60D89" />
      </linearGradient>
    </defs>
  </svg>

  <AirdropTimelineStep
    isActive={true}
    topTitle="Claim TKO"
    topText="GitHub contributors bind address for token claim"
    bottomText="22/05/2024" />

  <svg xmlns="http://www.w3.org/2000/svg" width="390" height="4" viewBox="0 0 390 4" fill="#E81899">
    <path d="M567 2L0 2" stroke="#E81899" stroke-width="3" />
  </svg>

  <AirdropTimelineStep
    isActive={false}
    topTitle="Calculation"
    topText="Merkle proof generation"
    bottomText="28/05/2024" />

  <svg xmlns="http://www.w3.org/2000/svg" width="390" height="4" viewBox="0 0 390 4" fill="#E81899">
    <path d="M567 2L0 2" stroke="#E81899" stroke-width="3" />
  </svg>

  <AirdropTimelineStep isActive={false} stick="short" topTitle="Claim" topText="" bottomText="Now" />

  <svg xmlns="http://www.w3.org/2000/svg" width="390" height="4" viewBox="0 0 390 4" fill="none">
    <path d="M389.66 2L0.660156 2.00003" stroke="url(#paint0_linear_1177_20107)" stroke-width="3" />
    <defs>
      <linearGradient
        id="paint0_linear_1177_20107"
        x1="389.66"
        y1="2.5"
        x2="0.660156"
        y2="2.50003"
        gradientUnits="userSpaceOnUse">
        <stop stop-color="#700748" stop-opacity="0" />
        <stop offset="0.8" stop-color="#D60D89" />
      </linearGradient>
    </defs>
  </svg>
</div>
