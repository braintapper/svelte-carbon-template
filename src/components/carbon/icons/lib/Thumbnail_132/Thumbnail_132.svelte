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
  data-carbon-icon="Thumbnail_132"
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
  <path d="M8 30H4a2 2 0 0 1-2-2V24a2 2 0 0 1 2-2H8a2 2 0 0 1 2 2v4A2 2 0 0 1 8 30zM4 24v4H8V24zM18 30H14a2 2 0 0 1-2-2V24a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4A2 2 0 0 1 18 30zm-4-6v4h4V24zM28 30H24a2 2 0 0 1-2-2V24a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4A2 2 0 0 1 28 30zm-4-6v4h4V24zM28 20H4a2 2 0 0 1-2-2V4A2 2 0 0 1 4 2H28a2 2 0 0 1 2 2V18A2 2 0 0 1 28 20zM4 4V18H28V4z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>