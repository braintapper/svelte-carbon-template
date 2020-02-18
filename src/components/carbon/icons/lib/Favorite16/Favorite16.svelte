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
  data-carbon-icon="Favorite16"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:keyup
  on:keydown
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"
  class={className}
  {preserveAspectRatio}
  {style}
  {id}
  {...attributes}>
  <path d="M11.2,3c0.7,0,1.4,0.3,2,0.8c1.1,1.1,1.1,2.9,0,4L8,13.1L2.8,7.8c-1.1-1.1-1.1-2.9,0-4c1.1-1.1,2.8-1.1,3.9,0c0,0,0,0,0,0	L8,5.1l1.3-1.3C9.8,3.3,10.5,3,11.2,3 M11.2,2c-1,0-2,0.4-2.7,1.1L8,3.7L7.4,3.1C6,1.6,3.6,1.6,2.1,3.1c0,0,0,0,0,0	C0.6,4.6,0.6,7,2.1,8.5l5.9,6l5.9-6c1.5-1.5,1.5-3.9,0-5.4C13.2,2.4,12.2,2,11.2,2z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>