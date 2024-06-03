<script lang="ts">
  import { spring } from 'svelte/motion';
  export let handleClick: () => void = () => {
    console.log('Unassigned Button');
  };
  import Icon from '../Icon/Icon.svelte';
  export let buttonText = 'Button';
  export let arrow: 'left' | 'right' | null = null;
  export let buttonStyle: 'filled' | 'transparent' | 'text' = 'filled';

  $: arrowMovement = spring();

  function handleHover() {
    arrowMovement.set(10);
  }

  function handleHoverExit() {
    arrowMovement.set(0);
  }
</script>

<button
  class="flex {buttonStyle} {buttonStyle === 'filled' &&
    'btn btn-primary'} box-border items-center justify-between relative px-4 py-4 w-full h-12 rounded-full cursor-pointer"
  on:click={handleClick}
  on:mouseenter={handleHover}
  on:mouseleave={handleHoverExit}>
  {#if arrow == 'left'}
    <div
      class="flex absolute ml-2 size-8 bg-white rounded-full items-center content-center justify-center flipped"
      style="transform: translate({$arrowMovement}%, 0%)">
      <Icon type={'arrow-right'} fillClass="fill-secondary-brand"></Icon>
    </div>
    <div class="body-semibold leading-none px-2 lg:ml-8">{buttonText}</div>
  {/if}
  {#if arrow == 'right'}
    <div class="body-semibold leading-none px-2 lg:mr-8" onClick="modalOpen()">{buttonText}</div>
    <div
      class="flex absolute right-0 mr-2 size-8 bg-white rounded-full items-center content-center justify-center"
      style="transform: translate({$arrowMovement}%, 0%)">
      <Icon type={'arrow-right'} fillClass="fill-secondary-brand"></Icon>
    </div>
  {/if}
  {#if arrow == null}
    <div class="body-semibold leading-none px-2">{buttonText}</div>
  {/if}
</button>

<style lang="scss">
  .filled {
    background: var(--primary-interactive);
    border: 0px;
  }

  .transparent {
    background: none;
    border: 1px var(--primary-interactive) solid;
  }

  .text {
    background: none;
    border: 0px;
    text-decoration-line: underline;
    color: var(--primary-interactive);
  }

  button::before {
    content: '';
    margin-right: auto; /* This will push the first real child to the center */
  }

  button::after {
    content: '';
    margin-left: auto; /* This will push the second child to the right */
  }

  .flipped {
    /* mirror flip */
    rotate: 180deg;
    left: 0px;
  }
</style>
