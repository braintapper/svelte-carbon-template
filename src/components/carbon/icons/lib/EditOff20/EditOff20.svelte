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
  data-carbon-icon="EditOff20"
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
  <path d="M30 28.59L3.41 2 2 3.41 12.09 13.5 4 21.59V28h6.41l8.09-8.09L28.59 30zM9.59 26H6V22.41l7.5-7.5 3.59 3.59zM29.41 6.17h0L25.83 2.59a2 2 0 0 0-2.83 0h0l-8.08 8.08 1.41 1.41L20 8.41 23.59 12l-3.67 3.67 1.41 1.41L29.41 9A2 2 0 0 0 29.41 6.17zM25 10.59L21.41 7l3-3L28 7.59z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>