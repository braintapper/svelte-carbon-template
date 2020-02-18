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
  data-carbon-icon="CategoryNewEach20"
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
  <path d="M29 10H24v2h5v6H22v2h3v2.142a4 4 0 1 0 2 0V20h2a2.0027 2.0027 0 0 0 2-2V12A2.0023 2.0023 0 0 0 29 10zM28 26a2 2 0 1 1-2-2A2.0027 2.0027 0 0 1 28 26zM19 6H14V8h5v6H12v2h3v6.142a4 4 0 1 0 2 0V16h2a2.0023 2.0023 0 0 0 2-2V8A2.0023 2.0023 0 0 0 19 6zM18 26a2 2 0 1 1-2-2A2.0027 2.0027 0 0 1 18 26zM9 2H3A2.002 2.002 0 0 0 1 4v6a2.002 2.002 0 0 0 2 2H5V22.142a4 4 0 1 0 2 0V12H9a2.002 2.002 0 0 0 2-2V4A2.002 2.002 0 0 0 9 2zM8 26a2 2 0 1 1-2-2A2.0023 2.0023 0 0 1 8 26zM3 10V4H9l.0015 6z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>