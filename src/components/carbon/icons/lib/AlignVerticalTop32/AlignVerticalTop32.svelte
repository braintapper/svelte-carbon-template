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
  data-carbon-icon="AlignVerticalTop32"
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
  <path d="M24 20H20a2.0023 2.0023 0 0 1-2-2V11a2.0023 2.0023 0 0 1 2-2h4a2.0023 2.0023 0 0 1 2 2v7A2.0023 2.0023 0 0 1 24 20zm-4-9v7h4.0012L24 11zM12 28H8a2.0023 2.0023 0 0 1-2-2V11A2.0023 2.0023 0 0 1 8 9h4a2.0023 2.0023 0 0 1 2 2V26A2.0023 2.0023 0 0 1 12 28zM8 11V26h4.0012L12 11zM2 4H30V6H2z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>