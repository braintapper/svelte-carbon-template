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
  data-carbon-icon="Sdk20"
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
  <path d="M30 9L27.9 9 24 15.6 24 9 22 9 22 23 24 23 24 18.7 24.9 17.2 27.9 23 30 23 26.1 15.4 30 9zM16 23H12V9h4a4.0118 4.0118 0 0 1 4 4v6A4.0118 4.0118 0 0 1 16 23zm-2-2h2a2.0059 2.0059 0 0 0 2-2V13a2.0059 2.0059 0 0 0-2-2H14zM8 23H2V21H8V17H4a2.0059 2.0059 0 0 1-2-2V11A2.0059 2.0059 0 0 1 4 9h6v2H4v4H8a2.0059 2.0059 0 0 1 2 2v4A2.0059 2.0059 0 0 1 8 23z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>