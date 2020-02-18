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
  data-carbon-icon="DistributeHorizontalLeft16"
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
  <path d="M28 22H24a2.0021 2.0021 0 0 1-2-2V12a2.0021 2.0021 0 0 1 2-2h4a2.0021 2.0021 0 0 1 2 2v8A2.0021 2.0021 0 0 1 28 22zM24 12v8h4V12zM18 2H20V30H18zM12 26H8a2.0021 2.0021 0 0 1-2-2V8A2.0021 2.0021 0 0 1 8 6h4a2.0021 2.0021 0 0 1 2 2V24A2.0021 2.0021 0 0 1 12 26zM8 8V24h4V8zM2 2H4V30H2z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>