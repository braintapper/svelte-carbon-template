<script>
  let className = undefined;
  export { className as class };
  export let id = undefined;
  export let tabindex = undefined;
  export let focusable = false;
  export let title = undefined;
  export let style = 'will-change: transform;';

  const preserveAspectRatio = 'xMidYMid meet';
  $: ariaLabel = $$props['aria-label'];
  $: ariaLabelledBy = $$props['aria-labelledby'];
  $: labelled = ariaLabel || ariaLabelledBy || title;
  $: attributes = {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-hidden': labelled ? undefined : true,
    role: labelled ? 'img' : undefined,
    focusable: tabindex === '0' ? true : focusable,
    tabindex
  };
</script>

<svg
  data-carbon-icon="BluetoothOff24"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:keyup
  on:keydown
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24"
  class={className}
  {preserveAspectRatio}
  {style}
  {id}
  {...attributes}>
  <path d="M28 26.59L5.41 4 4 5.41 14.59 16 7 23.59 8.41 25 15 18.41V29a1 1 0 0 0 .58.91A1.06 1.06 0 0 0 16 30a1 1 0 0 0 .65-.24l6.3-5.4L26.59 28zm-11 .24V18.41l4.53 4.53zM17 12.75V5.17l4.53 3.89-4.11 4.11 1.41 1.41 4.88-4.87A1 1 0 0 0 24 9a1 1 0 0 0-.35-.72l-7-6a1 1 0 0 0-1.07-.15A1 1 0 0 0 15 3v7.75z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>