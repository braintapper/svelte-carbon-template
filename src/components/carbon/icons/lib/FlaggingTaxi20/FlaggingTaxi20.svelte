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
  data-carbon-icon="FlaggingTaxi20"
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
  <path d="M24.7976,2,20.3555,8.6641A2.9941,2.9941,0,0,1,17.8594,10H12a3.0033,3.0033,0,0,0-3,3v6a2.0023,2.0023,0,0,0,2,2v7a2.0023,2.0023,0,0,0,2,2h4a2.0023,2.0023,0,0,0,2-2V16H17V28H13V19H11V13a1.0009,1.0009,0,0,1,1-1h5.8594a4.9881,4.9881,0,0,0,4.16-2.2266l4.4422-6.664Z"></path><path d="M11,5a4,4,0,1,1,4,4A4.0042,4.0042,0,0,1,11,5Zm2,0a2,2,0,1,0,2-2A2.0023,2.0023,0,0,0,13,5Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>