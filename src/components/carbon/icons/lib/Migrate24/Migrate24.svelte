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
  data-carbon-icon="Migrate24"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:keyup
  on:keydown
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24"
  class={className}
  {preserveAspectRatio}
  {style}
  {id}
  {...attributes}>
  <path d="M26 2H6A2 2 0 0 0 4 4V8a2 2 0 0 0 2 2h9v6.17l-2.59-2.58L11 15l5 5 5-5-1.41-1.41L17 16.17V10h9a2 2 0 0 0 2-2V4A2 2 0 0 0 26 2zM6 4h4V8H6zM26 8H12V4H26zM26 22H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2H26a2 2 0 0 0 2-2V24A2 2 0 0 0 26 22zM6 24H20v4H6zm20 4H22V24h4z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>