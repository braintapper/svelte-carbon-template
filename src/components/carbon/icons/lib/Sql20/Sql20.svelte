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
  data-carbon-icon="Sql20"
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
  <path d="M24 21L24 9 22 9 22 23 30 23 30 21 24 21zM18 9H14a2 2 0 0 0-2 2V21a2 2 0 0 0 2 2h1v2a2 2 0 0 0 2 2h2V25H17V23h1a2 2 0 0 0 2-2V11A2 2 0 0 0 18 9zM14 21V11h4V21zM8 23H2V21H8V17H4a2 2 0 0 1-2-2V11A2 2 0 0 1 4 9h6v2H4v4H8a2 2 0 0 1 2 2v4A2 2 0 0 1 8 23z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>