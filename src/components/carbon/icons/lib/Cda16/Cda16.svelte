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
  data-carbon-icon="Cda16"
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
  <path d="M28 9H24a2.002 2.002 0 0 0-2 2V23h2V18h4v5h2V11A2.0023 2.0023 0 0 0 28 9zm-4 7V11h4v5zM16 23H12V9h4a4.0042 4.0042 0 0 1 4 4v6A4.0039 4.0039 0 0 1 16 23zm-2-2h2a2.0027 2.0027 0 0 0 2-2V13a2.0023 2.0023 0 0 0-2-2H14zM10 23H4a2.0023 2.0023 0 0 1-2-2V11A2.002 2.002 0 0 1 4 9h6v2H4V21h6z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>