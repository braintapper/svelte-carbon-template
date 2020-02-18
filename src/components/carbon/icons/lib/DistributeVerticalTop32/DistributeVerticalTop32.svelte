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
  data-carbon-icon="DistributeVerticalTop32"
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
  <path d="M24 30H8a2.0021 2.0021 0 0 1-2-2V24a2.0021 2.0021 0 0 1 2-2H24a2.0021 2.0021 0 0 1 2 2v4A2.0021 2.0021 0 0 1 24 30zM8 24v4H24V24zM2 18H30V20H2zM20 14H12a2.0021 2.0021 0 0 1-2-2V8a2.0021 2.0021 0 0 1 2-2h8a2.0021 2.0021 0 0 1 2 2v4A2.0021 2.0021 0 0 1 20 14zM12 8v4h8V8zM2 2H30V4H2z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>