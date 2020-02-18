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
  data-carbon-icon="Group32"
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
  <path d="M31 30H29V27a3 3 0 0 0-3-3H22a3 3 0 0 0-3 3v3H17V27a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5zM24 12a3 3 0 1 1-3 3 3 3 0 0 1 3-3m0-2a5 5 0 1 0 5 5A5 5 0 0 0 24 10zM15 22H13V19a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v3H1V19a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5zM8 4A3 3 0 1 1 5 7 3 3 0 0 1 8 4M8 2a5 5 0 1 0 5 5A5 5 0 0 0 8 2z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>