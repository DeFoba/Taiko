<script lang="ts">
  import AirdropAllocationDisplay from './AirdropAllocationDisplay.svelte';
  import StackedCoins from '$images/stacked-circles.svg';

  let totalAllocation: number = 1000000000;
</script>

<div class="flex-container-row px-6 lg:px-8 w-full bg-gradient-to-r from-[#EA36A4] to-[#F997D0] bg-cover h-[150px]">
  <div class="flex flex-col w-full">
    <div class="flex w-full justify-between items-center">
      <div class="flex flex-col align-bottom justify-between w-full">
        <div class="flex flex-col relative items-center lg:flex-row lg:gap-8">
          <img
            src={StackedCoins}
            alt="stacked-coins"
            class="size-[66px] absolute lg:static -top-10 -translate-y-1/2 -translate-x-1/2 left-1/2 lg:top-auto lg:left-auto lg:translate-x-0 lg:translate-y-0" />
          <div class="flex flex-col text-center h-fit bottom-0 lg:text-left">
            <div class="body-regular title">Total Token Supply</div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="title-section-medium text-[32px] lg:display-large-medium">1,000,000,000 TKO</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="self-center py-4">
  <AirdropAllocationDisplay />
</div>
