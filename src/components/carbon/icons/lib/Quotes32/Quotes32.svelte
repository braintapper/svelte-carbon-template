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
  data-carbon-icon="Quotes32"
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
  <path d="M12 15H6.11A9 9 0 0 1 10 8.86l1.79-1.2L10.69 6 8.9 7.2A11 11 0 0 0 4 16.35V23a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V17A2 2 0 0 0 12 15zM26 15H20.11A9 9 0 0 1 24 8.86l1.79-1.2L24.7 6 22.9 7.2A11 11 0 0 0 18 16.35V23a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V17A2 2 0 0 0 26 15z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>