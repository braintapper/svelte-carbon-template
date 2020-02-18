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
  data-carbon-icon="ChartBubble24"
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
  <path d="M30,30H4a2,2,0,0,1-2-2V2H4V28H30Z"></path><path d="M10 16a2 2 0 1 1-2 2 2 2 0 0 1 2-2m0-2a4 4 0 1 0 4 4 4 4 0 0 0-4-4zM21 6a4 4 0 1 1-4 4 4 4 0 0 1 4-4m0-2a6 6 0 1 0 6 6 6 6 0 0 0-6-6zM24.5 21A1.5 1.5 0 1 1 23 22.5 1.5 1.5 0 0 1 24.5 21m0-2A3.5 3.5 0 1 0 28 22.5 3.5 3.5 0 0 0 24.5 19z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>