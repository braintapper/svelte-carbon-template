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
  data-carbon-icon="ListBoxes24"
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
  <path d="M16 8H30V10H16zM16 22H30V24H16zM10 14H4a2.0023 2.0023 0 0 1-2-2V6A2.0023 2.0023 0 0 1 4 4h6a2.0023 2.0023 0 0 1 2 2v6A2.0023 2.0023 0 0 1 10 14zM4 6v6h6.0012L10 6zM10 28H4a2.0023 2.0023 0 0 1-2-2V20a2.0023 2.0023 0 0 1 2-2h6a2.0023 2.0023 0 0 1 2 2v6A2.0023 2.0023 0 0 1 10 28zM4 20v6h6.0012L10 20z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>