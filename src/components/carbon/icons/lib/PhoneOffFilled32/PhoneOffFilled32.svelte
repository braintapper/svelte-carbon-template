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
  data-carbon-icon="PhoneOffFilled32"
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
  <path d="M26.74 19.56l-2.52-1a2 2 0 0 0-2.15.44L20 21.06a9.93 9.93 0 0 1-5.35-2.29L30 3.41 28.59 2 2 28.59 3.41 30l7.93-7.92c3.24 3.12 7.89 5.5 14.55 5.92A2 2 0 0 0 28 26V21.41A2 2 0 0 0 26.74 19.56zM8.15 18.19l3.52-3.52A11.68 11.68 0 0 1 10.85 12l2.07-2.07a2 2 0 0 0 .44-2.15l-1-2.52A2 2 0 0 0 10.5 4H6A2 2 0 0 0 4 6.22 29 29 0 0 0 8.15 18.19z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>