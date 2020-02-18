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
  data-carbon-icon="Accessibility20"
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
  <path d="M29.55 26.11L26.5 27.63 23.66 21H15a2 2 0 0 1-2-2V13a2 2 0 0 1 4 0v4h7V15H19V13a4 4 0 0 0-8 0v1a9 9 0 1 0 8.77 11H17.71A7 7 0 1 1 11 16v3a4 4 0 0 0 4 4h7.34l3.16 7.37 4.95-2.48zM15.5 8A3.5 3.5 0 1 1 19 4.5 3.5 3.5 0 0 1 15.5 8zm0-5A1.5 1.5 0 1 0 17 4.5 1.5 1.5 0 0 0 15.5 3z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>