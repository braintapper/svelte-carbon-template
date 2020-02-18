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
  data-carbon-icon="DataError24"
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
  <circle cx="11" cy="8" r="1"></circle><circle cx="11" cy="16" r="1"></circle><circle cx="11" cy="24" r="1"></circle><path d="M24,3H8A2,2,0,0,0,6,5V27a2,2,0,0,0,2,2h8V27H8V21H26V5A2,2,0,0,0,24,3Zm0,16H8V13H24Zm0-8H8V5H24Z"></path><path d="M29.24 29.58L26.41 26.75 29.24 23.92 27.83 22.51 25 25.33 22.17 22.51 20.76 23.92 23.59 26.75 20.76 29.58 22.17 30.99 25 28.16 27.83 30.99 29.24 29.58z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>