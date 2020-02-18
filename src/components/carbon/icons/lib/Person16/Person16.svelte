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
  data-carbon-icon="Person16"
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
  <path d="M18 30H14a2 2 0 0 1-2-2V21a2 2 0 0 1-2-2V13a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a2 2 0 0 1-2 2v7A2 2 0 0 1 18 30zM13 12a.94.94 0 0 0-1 1v6h2v9h4V19h2V13a.94.94 0 0 0-1-1zM16 9a4 4 0 1 1 4-4h0A4 4 0 0 1 16 9zm0-6a2 2 0 1 0 2 2h0a2 2 0 0 0-2-2z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>