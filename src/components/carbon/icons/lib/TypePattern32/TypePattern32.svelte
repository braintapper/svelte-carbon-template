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
  data-carbon-icon="TypePattern32"
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
  <path d="M30 15L17 15 17 2 15 2 15 15 2 15 2 17 15 17 15 30 17 30 17 17 30 17 30 15z"></path><path d="M25.586 20L27 21.414 23.414 25 27 28.586 25.586 30 20.586 25 25.586 20zM11 30H3a1 1 0 0 1-.8945-1.4473l4-8a1.0412 1.0412 0 0 1 1.789 0l4 8A1 1 0 0 1 11 30zM4.6182 28H9.3818L7 23.2363zM28 12H22a2.0023 2.0023 0 0 1-2-2V4a2.0023 2.0023 0 0 1 2-2h6a2.0023 2.0023 0 0 1 2 2v6A2.0023 2.0023 0 0 1 28 12zM22 4v6h6.001L28 4zM7 12a5 5 0 1 1 5-5A5.0059 5.0059 0 0 1 7 12zM7 4a3 3 0 1 0 3 3A3.0033 3.0033 0 0 0 7 4z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>