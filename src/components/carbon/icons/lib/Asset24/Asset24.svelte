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
  data-carbon-icon="Asset24"
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
  <path d="M12.0752,24a4,4,0,1,1,4-4A4.0042,4.0042,0,0,1,12.0752,24Zm0-6a2,2,0,1,0,2,2A2.0023,2.0023,0,0,0,12.0752,18Z"></path><path d="M30,6a4.0042,4.0042,0,0,0-4-4,3.949,3.949,0,0,0-1.8537.4768L7.7571,10.9579A9.9921,9.9921,0,1,0,21.066,24.1929l8.49-16.3994A3.9491,3.9491,0,0,0,30,6ZM26,4a2,2,0,1,1-2,2A2.0023,2.0023,0,0,1,26,4ZM22.0194,5.8083C22.0163,5.8732,22,5.9343,22,6a4.0042,4.0042,0,0,0,4,4c.0645,0,.1245-.016.1882-.019l-4.3318,8.3617a10.0168,10.0168,0,0,0-8.2158-8.1962ZM12,28a8,8,0,1,1,8-8A8.0092,8.0092,0,0,1,12,28Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>