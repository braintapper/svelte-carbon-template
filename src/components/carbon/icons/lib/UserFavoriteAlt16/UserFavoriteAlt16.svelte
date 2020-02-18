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
  data-carbon-icon="UserFavoriteAlt16"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:keyup
  on:keydown
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16"
  class={className}
  {preserveAspectRatio}
  {style}
  {id}
  {...attributes}>
  <path d="M28.7663 4.2558A4.2121 4.2121 0 0 0 23 4.0321a4.2121 4.2121 0 0 0-5.7663.2237 4.319 4.319 0 0 0 0 6.0447L22.998 16.14 23 16.1376l.002.0019 5.7643-5.839A4.319 4.319 0 0 0 28.7663 4.2558zM27.342 8.8948l-4.34 4.3973L23 13.29l-.002.002-4.34-4.3973a2.3085 2.3085 0 0 1 0-3.2338 2.2639 2.2639 0 0 1 3.1561 0l1.181 1.2074L23 6.8634l.0049.005 1.181-1.2074a2.2639 2.2639 0 0 1 3.1561 0A2.3085 2.3085 0 0 1 27.342 8.8948zM16 30H14V25a3.0033 3.0033 0 0 0-3-3H7a3.0033 3.0033 0 0 0-3 3v5H2V25a5.0059 5.0059 0 0 1 5-5h4a5.0059 5.0059 0 0 1 5 5zM9 10a3 3 0 1 1-3 3 3 3 0 0 1 3-3M9 8a5 5 0 1 0 5 5A5 5 0 0 0 9 8z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>