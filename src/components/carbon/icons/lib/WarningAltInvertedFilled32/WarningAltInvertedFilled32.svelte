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
  data-carbon-icon="WarningAltInvertedFilled32"
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
  <path d="M29.8594,2.4893A1,1,0,0,0,29,2H3a1.0015,1.0015,0,0,0-.8794,1.4785l13,25.0366a1.04,1.04,0,0,0,1.7583,0l13-25.0366A1.0034,1.0034,0,0,0,29.8594,2.4893ZM14.875,5h2.25V15h-2.25ZM16,21a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,21Z"></path><path fill="none" d="M14.875,5h2.25V15h-2.25ZM16,21a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,21Z" data-icon-path="inner-path"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>