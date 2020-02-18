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
  data-carbon-icon="Grid16"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:keyup
  on:keydown
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"
  class={className}
  {preserveAspectRatio}
  {style}
  {id}
  {...attributes}>
  <path d="M6 2H3C2.4 2 2 2.4 2 3v3c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V3C7 2.4 6.6 2 6 2zM6 6H3V3h3V6zM13 2h-3C9.4 2 9 2.4 9 3v3c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V3C14 2.4 13.6 2 13 2zM13 6h-3V3h3V6zM6 9H3c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h3c.6 0 1-.4 1-1v-3C7 9.4 6.6 9 6 9zM6 13H3v-3h3V13zM13 9h-3c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h3c.6 0 1-.4 1-1v-3C14 9.4 13.6 9 13 9zM13 13h-3v-3h3V13z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>