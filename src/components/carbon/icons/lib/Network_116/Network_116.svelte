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
  data-carbon-icon="Network_116"
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
  <path d="M16 20a4 4 0 1 1 4-4A4.0045 4.0045 0 0 1 16 20zm0-6a2 2 0 1 0 2 2A2.0021 2.0021 0 0 0 16 14zM5 20a4 4 0 1 1 4-4A4.0045 4.0045 0 0 1 5 20zm0-6a2 2 0 1 0 2 2A2.0023 2.0023 0 0 0 5 14zM10 31a4 4 0 1 1 4-4A4.0045 4.0045 0 0 1 10 31zm0-6a2 2 0 1 0 2 2A2.0021 2.0021 0 0 0 10 25zM22 31a4 4 0 1 1 4-4A4.0045 4.0045 0 0 1 22 31zm0-6a2 2 0 1 0 2 2A2.0021 2.0021 0 0 0 22 25zM27 20a4 4 0 1 1 4-4A4.0045 4.0045 0 0 1 27 20zm0-6a2 2 0 1 0 2 2A2.0021 2.0021 0 0 0 27 14zM22 9a4 4 0 1 1 4-4A4.0045 4.0045 0 0 1 22 9zm0-6a2 2 0 1 0 2 2A2.0021 2.0021 0 0 0 22 3zM10 9a4 4 0 1 1 4-4A4.0045 4.0045 0 0 1 10 9zm0-6a2 2 0 1 0 2 2A2.0021 2.0021 0 0 0 10 3z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>