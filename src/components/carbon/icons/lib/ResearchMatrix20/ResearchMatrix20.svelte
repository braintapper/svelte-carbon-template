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
  data-carbon-icon="ResearchMatrix20"
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
  <path d="M18 13L18 4 16 4 16 6 13 6 13 8 16 8 16 13 13 13 13 15 21 15 21 13 18 13zM16.5 20A3.5 3.5 0 1 1 13 23.5 3.5 3.5 0 0 1 16.5 20m0-2A5.5 5.5 0 1 0 22 23.5 5.5 5.5 0 0 0 16.5 18zM8 30L2 30 2 2 8 2 8 4 4 4 4 28 8 28 8 30zM30 30L24 30 24 28 28 28 28 4 24 4 24 2 30 2 30 30z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>