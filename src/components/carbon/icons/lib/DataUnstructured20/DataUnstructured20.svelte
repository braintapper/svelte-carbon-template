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
  data-carbon-icon="DataUnstructured20"
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
  <path d="M6 24a2 2 0 1 1-2 2 2 2 0 0 1 2-2m0-2a4 4 0 1 0 4 4A4 4 0 0 0 6 22zM16 4a2 2 0 1 1-2 2 2 2 0 0 1 2-2m0-2a4 4 0 1 0 4 4A4 4 0 0 0 16 2zM26 4a2 2 0 1 1-2 2 2 2 0 0 1 2-2m0-2a4 4 0 1 0 4 4A4 4 0 0 0 26 2zM18 24v4H14V24h4m2-2H12v8h8z"></path><path d="M27,22.14V17a2,2,0,0,0-2-2H7V10h3V2H2v8H5v5a2,2,0,0,0,2,2H25v5.14a4,4,0,1,0,2,0ZM4,4H8V8H4ZM26,28a2,2,0,1,1,2-2A2,2,0,0,1,26,28Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>