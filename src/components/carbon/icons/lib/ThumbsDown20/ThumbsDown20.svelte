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
  data-carbon-icon="ThumbsDown20"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:keyup
  on:keydown
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
  class={className}
  {preserveAspectRatio}
  {style}
  {id}
  {...attributes}>
  <path d="M26.76,21A3.64,3.64,0,0,0,30,17V11c0-3.65-1.56-8-9-8H2V17H8.46L12,22.37,13,28.71v.12A1.51,1.51,0,0,0,14.43,30H16a3.22,3.22,0,0,0,.76,0A3.64,3.64,0,0,0,20,26V21h6A3.22,3.22,0,0,0,26.76,21ZM8,15H4V5H8Zm20,2c0,1.44-.56,2-2,2H18v7c0,1.44-.56,2-2,2H14.87l-.14-1L14,21.63,10,15.7V5H21c4.78,0,7,1.91,7,6Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>