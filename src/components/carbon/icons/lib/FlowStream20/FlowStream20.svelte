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
  data-carbon-icon="FlowStream20"
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
  <path d="M20 24H11.86a4.17 4.17 0 0 0-.43-1L22 12.43A3.86 3.86 0 0 0 24 13a4 4 0 1 0-3.86-5H14v2h6.14a4.17 4.17 0 0 0 .43 1L10 21.57A3.86 3.86 0 0 0 8 21a4 4 0 1 0 3.86 5H20v3h8V21H20zM24 7a2 2 0 1 1-2 2A2 2 0 0 1 24 7zM8 27a2 2 0 1 1 2-2A2 2 0 0 1 8 27zm14-4h4v4H22zM7.05 15.75a9 9 0 0 1 0-13.5l1.32 1.5a7 7 0 0 0 0 10.5z"></path><path d="M9.69,12.75a5,5,0,0,1,0-7.5L11,6.75a3,3,0,0,0,0,4.5Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>