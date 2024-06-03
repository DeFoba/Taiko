<script lang="ts">
  import SectionContainer from '../Container/SectionContainer.svelte';
  import { slide } from 'svelte/transition';

  export let question: string = 'Placeholder Preview Text';
  export let answer: string = 'Placeholder FAQ Text';

  let isOpen = false;

  function toggleDropdown() {
    isOpen = !isOpen;
  }
</script>

<div
  class="join-item flex flex-col w-full p-6 bg-gradient-background box-border items-start text-left justify-start border border-grey-500">
  <button class="flex justify-between items-center text-left cursor-pointer w-full" on:click={toggleDropdown}>
    <div class="body-regular">{question}</div>
    <div class="icon" class:open={isOpen}>+</div>
  </button>
  {#if isOpen}
    <div class="dropdown-content mt-8" transition:slide>
      <!-- Dropdown content goes here -->
      <p class="body-regular">{answer}</p>
    </div>
  {/if}
</div>

<style lang="scss">
  .icon {
    display: inline-block;
    font-size: 2rem;
    line-height: 1rem;

    transition: transform 0.3s ease;
  }

  .icon.open {
    transform: rotate(45deg); /* Plus icon turns into a 'x' */
  }

  .dropdown-content {
    padding: 1em;
    border-top: 1px solid #444; /* Slight contrast to the dropdown */
    width: 100%;
  }
</style>
