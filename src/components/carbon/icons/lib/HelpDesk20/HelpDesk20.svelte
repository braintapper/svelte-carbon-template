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
  data-carbon-icon="HelpDesk20"
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
  <path d="M27 10H21a3.0033 3.0033 0 0 0-3 3v6a2.0023 2.0023 0 0 0 2 2v7a2.0023 2.0023 0 0 0 2 2h4a2.0023 2.0023 0 0 0 2-2V21a2.0023 2.0023 0 0 0 2-2V13A3.0033 3.0033 0 0 0 27 10zm1 9H26v9H22V19H20V13a1.0009 1.0009 0 0 1 1-1h6a1.0009 1.0009 0 0 1 1 1zM20 5a4 4 0 1 1 4 4A4.0042 4.0042 0 0 1 20 5zm2 0a2 2 0 1 0 2-2A2.0023 2.0023 0 0 0 22 5zM14 16V13a3.0033 3.0033 0 0 0-3-3H5a3.0033 3.0033 0 0 0-3 3v3H0v2H16V16zM4 13a1.0009 1.0009 0 0 1 1-1h6a1.0009 1.0009 0 0 1 1 1v3H4zM4 5A4 4 0 1 1 8 9 4.0042 4.0042 0 0 1 4 5zM6 5A2 2 0 1 0 8 3 2.0023 2.0023 0 0 0 6 5z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>