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
  data-carbon-icon="UserFavoriteAltFilled20"
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
  <path d="M26.4938 3a3.4735 3.4735 0 0 0-2.48 1.0393l-.5111.5228-.5161-.5228a3.4792 3.4792 0 0 0-4.96 0 3.59 3.59 0 0 0 0 5.0251l5.4766 5.5427 5.4716-5.5427a3.59 3.59 0 0 0 0-5.0251A3.4738 3.4738 0 0 0 26.4938 3zM16 30H14V25a3.0033 3.0033 0 0 0-3-3H7a3.0033 3.0033 0 0 0-3 3v5H2V25a5.0059 5.0059 0 0 1 5-5h4a5.0059 5.0059 0 0 1 5 5zM9 10a3 3 0 1 1-3 3 3 3 0 0 1 3-3M9 8a5 5 0 1 0 5 5A5 5 0 0 0 9 8z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>