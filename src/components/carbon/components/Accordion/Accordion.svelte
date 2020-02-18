<script>
  let className = undefined;
  export { className as class };
  export let style = undefined;

  export let skeleton = false;
  export let count = 4;
  export let open = true;

  import { cx } from '../../lib';
</script>

{#if skeleton}
  <AccordionSkeleton {count} {open} class={className} {style} />
{/if}
