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
  data-carbon-icon="UserIdentification20"
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
  <path d="M22,11h4a1,1,0,0,1,1,1v2a0,0,0,0,1,0,0H21a0,0,0,0,1,0,0V12A1,1,0,0,1,22,11Z"></path><circle cx="24" cy="8" r="2"></circle><path d="M30 18H18a2.0023 2.0023 0 0 1-2-2V4a2.002 2.002 0 0 1 2-2H30a2.0023 2.0023 0 0 1 2 2V16A2.0027 2.0027 0 0 1 30 18zM18 4V16H30.001L30 4zM15 30H13V26a2.9465 2.9465 0 0 0-3-3H6a2.9465 2.9465 0 0 0-3 3v4H1V26a4.9514 4.9514 0 0 1 5-5h4a4.9514 4.9514 0 0 1 5 5zM8 11a3 3 0 0 1 0 6 3 3 0 0 1 0-6M8 9A5 5 0 0 0 8 19 5 5 0 0 0 8 9z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>