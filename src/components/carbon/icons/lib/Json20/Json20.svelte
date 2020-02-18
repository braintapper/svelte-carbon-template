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
  data-carbon-icon="Json20"
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
  <path d="M31 11L31 21 29 21 27 15 27 21 25 21 25 11 27 11 29 17 29 11 31 11zM21.3335 21h-2.667A1.6684 1.6684 0 0 1 17 19.3335v-6.667A1.6684 1.6684 0 0 1 18.6665 11h2.667A1.6684 1.6684 0 0 1 23 12.6665v6.667A1.6684 1.6684 0 0 1 21.3335 21zM19 19h2V13H19zM13.3335 21H9V19h4V17H11a2.002 2.002 0 0 1-2-2V12.6665A1.6684 1.6684 0 0 1 10.6665 11H15v2H11v2h2a2.002 2.002 0 0 1 2 2v2.3335A1.6684 1.6684 0 0 1 13.3335 21zM5.3335 21H2.6665A1.6684 1.6684 0 0 1 1 19.3335V17H3v2H5V11H7v8.3335A1.6684 1.6684 0 0 1 5.3335 21z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>