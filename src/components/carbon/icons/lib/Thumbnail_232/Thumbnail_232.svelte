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
  data-carbon-icon="Thumbnail_232"
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
  <path d="M8 30H4a2 2 0 0 1-2-2V24a2 2 0 0 1 2-2H8a2 2 0 0 1 2 2v4A2 2 0 0 1 8 30zM4 24v4H8V24zM18 30H14a2 2 0 0 1-2-2V24a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4A2 2 0 0 1 18 30zm-4-6v4h4V24zM28 30H24a2 2 0 0 1-2-2V24a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4A2 2 0 0 1 28 30zm-4-6v4h4V24zM8 20H4a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2H8a2 2 0 0 1 2 2v4A2 2 0 0 1 8 20zM4 14v4H8V14zM18 20H14a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4A2 2 0 0 1 18 20zm-4-6v4h4V14zM28 20H24a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4A2 2 0 0 1 28 20zm-4-6v4h4V14zM8 10H4A2 2 0 0 1 2 8V4A2 2 0 0 1 4 2H8a2 2 0 0 1 2 2V8A2 2 0 0 1 8 10zM4 4V8H8V4zM18 10H14a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2V8A2 2 0 0 1 18 10zM14 4V8h4V4zM28 10H24a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2V8A2 2 0 0 1 28 10zM24 4V8h4V4z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>