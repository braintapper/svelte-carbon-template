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
  data-carbon-icon="Meter20"
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
  <path d="M26 16a9.9283 9.9283 0 0 0-1.1392-4.6182l-1.4961 1.4961A7.9483 7.9483 0 0 1 24 16zM23.4141 10L22 8.5859l-4.7147 4.7147A2.9659 2.9659 0 0 0 16 13a3 3 0 1 0 3 3 2.9659 2.9659 0 0 0-.3006-1.2853zM16 17a1 1 0 1 1 1-1A1.0013 1.0013 0 0 1 16 17zM16 8a7.9515 7.9515 0 0 1 3.1223.6353l1.4961-1.4961A9.9864 9.9864 0 0 0 6 16H8A8.0092 8.0092 0 0 1 16 8z"></path><path d="M16,30A14,14,0,1,1,30,16,14.0158,14.0158,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12.0137,12.0137,0,0,0,16,4Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>