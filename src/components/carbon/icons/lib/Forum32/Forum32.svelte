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
  data-carbon-icon="Forum32"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:keyup
  on:keydown
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32"
  class={className}
  {preserveAspectRatio}
  {style}
  {id}
  {...attributes}>
  <path d="M27,7H10a3.0033,3.0033,0,0,0-3,3V21a3.0033,3.0033,0,0,0,3,3h6V22H10a1.0009,1.0009,0,0,1-1-1V10a1.0013,1.0013,0,0,1,1-1H27a1.0009,1.0009,0,0,1,1,1V21a1.0006,1.0006,0,0,1-1,1H21.8L17,28.8535,18.6387,30l4.2021-6H27a3.0033,3.0033,0,0,0,3-3V10A3.0033,3.0033,0,0,0,27,7Z"></path><path d="M3,17H1V4A3.0033,3.0033,0,0,1,4,1H17V3H4A1.0013,1.0013,0,0,0,3,4Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>