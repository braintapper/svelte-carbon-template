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
  data-carbon-icon="DataSet24"
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
  <path d="M25 13L25 4 23 4 23 6 20 6 20 8 23 8 23 13 20 13 20 15 28 15 28 13 25 13zM8.5 6A3.5 3.5 0 1 1 5 9.5 3.5 3.5 0 0 1 8.5 6m0-2A5.5 5.5 0 1 0 14 9.5 5.5 5.5 0 0 0 8.5 4zM8.5 20A3.5 3.5 0 1 1 5 23.5 3.5 3.5 0 0 1 8.5 20m0-2A5.5 5.5 0 1 0 14 23.5 5.5 5.5 0 0 0 8.5 18zM23.5 20A3.5 3.5 0 1 1 20 23.5 3.5 3.5 0 0 1 23.5 20m0-2A5.5 5.5 0 1 0 29 23.5 5.5 5.5 0 0 0 23.5 18z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>