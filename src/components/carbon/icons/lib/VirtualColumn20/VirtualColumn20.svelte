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
  data-carbon-icon="VirtualColumn20"
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
  <path d="M25 11L26.414 12.414 23.828 15 30 15 30 17 23.828 17 26.414 19.586 25 21 20 16 25 11z"></path><path d="M30 28H20a2.0023 2.0023 0 0 1-2-2V6a2.0023 2.0023 0 0 1 2-2H30V6H20V26H30zM12 28H2V26H12V6H2V4H12a2.0023 2.0023 0 0 1 2 2V26A2.0023 2.0023 0 0 1 12 28z"></path><path d="M7 11L5.586 12.414 8.172 15 2 15 2 17 8.172 17 5.586 19.586 7 21 12 16 7 11z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>