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
  data-carbon-icon="DistributeHorizontalRight32"
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
  <path d="M28 2H30V30H28zM24 22H20a2.0021 2.0021 0 0 1-2-2V12a2.0021 2.0021 0 0 1 2-2h4a2.0021 2.0021 0 0 1 2 2v8A2.0021 2.0021 0 0 1 24 22zM20 12h-.0015L20 20h4V12zM12 2H14V30H12zM8 26H4a2.0021 2.0021 0 0 1-2-2V8A2.0021 2.0021 0 0 1 4 6H8a2.0021 2.0021 0 0 1 2 2V24A2.0021 2.0021 0 0 1 8 26zM4 8H3.9985L4 24H8V8z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>