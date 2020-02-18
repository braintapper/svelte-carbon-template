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
  data-carbon-icon="Data_116"
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
  <path d="M15 6H28V8H15zM15 24H28V26H15zM4 15H17V17H4zM7 11a4 4 0 1 1 4-4A4 4 0 0 1 7 11zM7 5A2 2 0 1 0 9 7 2 2 0 0 0 7 5zM7 29a4 4 0 1 1 4-4A4 4 0 0 1 7 29zm0-6a2 2 0 1 0 2 2A2 2 0 0 0 7 23zM25 20a4 4 0 1 1 4-4A4 4 0 0 1 25 20zm0-6a2 2 0 1 0 2 2A2 2 0 0 0 25 14z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>