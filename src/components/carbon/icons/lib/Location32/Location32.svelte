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
  data-carbon-icon="Location32"
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
  <path d="M16,10a3,3,0,1,1-3,3,3,3,0,0,1,3-3m0-2a5,5,0,1,0,5,5A5,5,0,0,0,16,8Z"></path><path d="M16,4a8.88,8.88,0,0,1,9,8.71,8.47,8.47,0,0,1-1.79,5.21l0,0,0,0L16,28.46,8.85,18l0,0,0,0A8.47,8.47,0,0,1,7,12.71,8.88,8.88,0,0,1,16,4m0-2A10.86,10.86,0,0,0,5,12.71a10.53,10.53,0,0,0,2.2,6.43L16,32l8.8-12.86A10.53,10.53,0,0,0,27,12.71,10.86,10.86,0,0,0,16,2Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>