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
  data-carbon-icon="DistributeVerticalBottom24"
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
  <path d="M2 28H30V30H2zM24 26H8a2.0021 2.0021 0 0 1-2-2V20a2.0021 2.0021 0 0 1 2-2H24a2.0021 2.0021 0 0 1 2 2v4A2.0021 2.0021 0 0 1 24 26zm0-6.0012L8 20v4H24zM2 12H30V14H2zM20 10H12a2.0021 2.0021 0 0 1-2-2V4a2.0021 2.0021 0 0 1 2-2h8a2.0021 2.0021 0 0 1 2 2V8A2.0021 2.0021 0 0 1 20 10zm0-6.0012L12 4V8h8z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>