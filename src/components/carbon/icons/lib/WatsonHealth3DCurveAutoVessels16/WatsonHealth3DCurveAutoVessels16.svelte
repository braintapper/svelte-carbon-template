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
  data-carbon-icon="WatsonHealth3DCurveAutoVessels16"
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
  <path d="M17,11a3,3,0,0,1,3-3h.1a5,5,0,1,0,0-2H20a5,5,0,0,0-5,5v1H13a3,3,0,0,1-3-3V7A5,5,0,0,0,5,2H4V4H5A3,3,0,0,1,8,7V9a5,5,0,0,0,5,5h2v7a3,3,0,0,1-3,3h-.1a5,5,0,1,0,0,2H12a5,5,0,0,0,5-5h2.5A2.5,2.5,0,0,1,22,23.5,4.51,4.51,0,0,0,26.5,28H28V26H26.5A2.5,2.5,0,0,1,24,23.5,4.51,4.51,0,0,0,19.5,19H17Zm8-7a3,3,0,1,1-3,3A3,3,0,0,1,25,4ZM7,28a3,3,0,1,1,3-3A3,3,0,0,1,7,28Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>