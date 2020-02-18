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
  data-carbon-icon="FlashOffFilled20"
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
  <path d="M30 28.59L3.41 2 2 3.41 8.4 9.82 7 15.77A1 1 0 0 0 8 17h4.83L11 28.85a1 1 0 0 0 .6 1.07A1.09 1.09 0 0 0 12 30a1 1 0 0 0 .79-.39l6.68-8.73L28.59 30zM22.53 16.87l3.26-4.26a1 1 0 0 0 .11-1A1 1 0 0 0 25 11H20.25L22 3.22a1 1 0 0 0-.2-.85A1 1 0 0 0 21 2H11a1 1 0 0 0-1 .77l-.3 1.3z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>