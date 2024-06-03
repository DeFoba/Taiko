<script lang="ts">
  export let flexDirection: 'row' | 'column' = 'row';
  export let backgroundColor: string = '';
  let background = backgroundColor == '' ? '' : `background: ${backgroundColor};`;
</script>

<div
  class="flex relative bg-container bg-im rounded-[20px] py-6 lg:px-4 w-full box-border max-w-[1362px] gap-4 {flexDirection} items-center"
  style={background}>
  <slot />
</div>

<style>
  .row {
    flex-direction: row;
  }

  .column {
    flex-direction: column;
  }
</style>
