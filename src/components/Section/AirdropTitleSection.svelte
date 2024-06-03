<script lang="ts">
  import PlusIcon from '$images/plus-icon.svg';
</script>

<!-- bg-[url('../public/images/airdrop-title-bg.png')]  -->

<div
  class="flex relative w-full max-w-[1440px] lg:px-[80px] lg:pb-[229px] lg:pt-[171px] items-center justify-center lg:h-[850px]">
  <div class="flex flex-col items-center lg:flex-row lg:justify-between lg:gap-5 relative">
    <!-- Airdrop -->
    <div
      class="lg:font-clash-grotesk lg:text-[120px]/[90px] pb-[33px] display-large-medium-mobile text-center lg:text-left lg:max-w-[842px] lg:tracking-[-2.4px] lg:leading-[90px] break-words">
      unlock community incentives
    </div>
    <!-- Words -->
    <div class="flex flex-col h-full w-auto text-center lg:text-left justify-end">
      <div class="flex flex-col lg:flex-row align-bottom gap-[25px]">
        <img class="hidden lg:block size-[32px] mt-2 m-auto" src={PlusIcon} alt="plus-icon" />
        <div class="body-regular lg:body-regular-medium lg:text-[18px] max-w-[260px] lg:max-w-[300px] self-end">
          Contribute to Ethereum’s growth, and get rewarded with Taiko.
        </div>
      </div>
    </div>
  </div>
</div>
