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
  data-carbon-icon="QBlochSphere32"
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
  <path d="M21.87,7.84l-1.74-1L16,14h0a2,2,0,1,0,2,2,2,2,0,0,0-.27-1Z"></path><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,2a12,12,0,0,1,11.17,7.65,25.69,25.69,0,0,0-3.69-1.5l-1,1.77a22.7,22.7,0,0,1,5.41,2.39,11.05,11.05,0,0,1,0,3.38A22.92,22.92,0,0,1,16,21,22.92,22.92,0,0,1,4.13,17.69a11.05,11.05,0,0,1,0-3.38A22.8,22.8,0,0,1,15,11V9a25,25,0,0,0-10.17,2.6A12,12,0,0,1,16,4Zm0,24A12,12,0,0,1,4.83,20.35,24.88,24.88,0,0,0,16,23a24.88,24.88,0,0,0,11.17-2.65A12,12,0,0,1,16,28Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>