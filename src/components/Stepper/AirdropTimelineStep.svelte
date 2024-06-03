<script lang="ts">
  export let isActive: boolean = false;
  export let topTitle: string = 'top title';
  export let topText: string = 'top';
  export let bottomText: string = 'bottom';
  export let stick: 'long' | 'short' = 'long';
</script>

<div
  class="relative flex items-center justify-center overflow-visible break-keep text-nowrap {isActive
    ? 'w-[36px]'
    : ''}">
  <div class="absolute flex-col gap-[20px] items-center bottom-[41px] hidden lg:flex">
    <div class="stepper-title">{topTitle}</div>
    <div class="body-regular hidden lg:block">{topText}</div>
  </div>

  <!-- stick -->
  {#if stick === 'long'}
    <div class="absolute lg:hidden block bottom-0">
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="92" viewBox="0 0 8 92" fill="none">
        <path d="M4 3.15552L4 91.1555" stroke="#E81899" />
        <circle cx="4" cy="4.15552" r="4" fill="#E81899" />
      </svg>
      <div
        class="absolute flex flex-col gap-[20px] bottom-[98px] -translate-x-1/2 max-w-[100px] text-wrap break-words text-center">
        <div class="stepper-title">{topTitle}</div>
        <div class="body-regular hidden lg:block">{topText}</div>
      </div>
    </div>
  {:else if stick === 'short'}
    <div class="absolute lg:hidden block bottom-0">
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="41" viewBox="0 0 8 41" fill="none">
        <path d="M4 4L4 41" stroke="#E81899" />
        <circle cx="4" cy="4" r="4" fill="#E81899" />
      </svg>
      <div
        class="absolute flex flex-col gap-[20px] bottom-[48px] -translate-x-1/2 max-w-[100px] text-wrap break-words text-center">
        <div class="stepper-title">{topTitle}</div>
        <div class="body-regular hidden lg:block">{topText}</div>
      </div>
    </div>
  {/if}

  <!-- Glowing Ring -->
  {#if isActive}
    <svg class="absolute" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="28" cy="28" r="28" fill="url(#paint0_radial_976_253)" />
      <circle cx="28" cy="28" r="6" fill="#E81899" />
      <defs>
        <radialGradient
          id="paint0_radial_976_253"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(27.4909 28.5091) rotate(90) scale(25.9636)">
          <stop offset="0.35" stop-color="#E81899" stop-opacity="0" />
          <stop offset="0.6" stop-color="#E81899" />
          <stop offset="1" stop-color="#820D56" stop-opacity="0" />
          <stop offset="1" stop-color="#0B101B" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
    <!-- <svg class="absolute" xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
      <circle cx="27.5" cy="27.5" r="27.5" fill="url(#paint0_radial_1177_20125)" />
      <defs>
        <radialGradient
          id="paint0_radial_1177_20125"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(27 28) rotate(90) scale(25.5)">
          <stop offset="0.35" stop-color="#E81899" stop-opacity="0" />
          <stop offset="0.6" stop-color="#E81899" />
          <stop offset="1" stop-color="#820D56" stop-opacity="0" />
          <stop offset="1" stop-color="#0B101B" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg> -->
  {:else}
    <div class="absolute size-[56px]"></div>
  {/if}
  <!-- Step -->
  <svg class="absolute" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
    <circle cx="6" cy="6" r="6" fill="#E81899" />
  </svg>
  <div
    class="absolute top-[46px] max-w-[160px] text-center text-wrap break-words {isActive
      ? 'text-primary-content body-bold'
      : 'text-secondary-content body-regular'}">
    {bottomText}
  </div>
</div>
