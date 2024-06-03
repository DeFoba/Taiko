<script lang="ts">
  import SectionContainer from '$components/Container/SectionContainer.svelte';
  import Button from '$components/Button/Button.svelte';
  import TotalAirdropAllocationDisplay from '$components/Display/TotalAirdropAllocationDisplay.svelte';
</script>

<div
  class="flex flex-col relative bg-im rounded-[20px] py-6 lg:px-4 w-full box-border max-w-[1362px] gap-16 items-center">
  <!-- Section Info -->
  <div class="flex flex-col lg:flex-row w-full gap-8 justify-center lg:justify-between">
    <div class="flex flex-col gap-8 lg:w-2/3">
      <div class="display-small-medium text-center lg:text-start lg:w-2/3">Learn about TKO Tokenomics</div>
      <div class="body-regular text-center lg:text-start lg:w-2/3">
        We’re kicking off Phase 1 of our airdrop season by offering up a substantial 5% of the initial token supply for
        claiming. Buckle up your seatbelts and get your space gear on, it’s time to check if you qualify!
      </div>
    </div>
  </div>
  <TotalAirdropAllocationDisplay />
</div>
