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
  data-carbon-icon="UserXRay32"
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
  <path fill="none" d="M28 9L28 7 25 7 25 5 23 5 23 7 20 7 20 9 23 9 23 12 20 12 20 14 23 14 23 16 25 16 25 14 28 14 28 12 25 12 25 9 28 9z"></path><path d="M31 3H17a1 1 0 0 0-1 1V17a1 1 0 0 0 1 1H31a1 1 0 0 0 1-1V4A1 1 0 0 0 31 3zM28 9H25v3h3v2H25v2H23V14H20V12h3V9H20V7h3V5h2V7h3zM15 30H13V26a2.9465 2.9465 0 0 0-3-3H6a2.9465 2.9465 0 0 0-3 3v4H1V26a4.9514 4.9514 0 0 1 5-5h4a4.9514 4.9514 0 0 1 5 5zM8 11a3 3 0 0 1 0 6 3 3 0 0 1 0-6M8 9A5 5 0 0 0 8 19 5 5 0 0 0 8 9z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>