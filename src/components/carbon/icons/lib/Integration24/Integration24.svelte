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
  data-carbon-icon="Integration24"
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
  <path d="M29.88,15.52l-6-11A1,1,0,0,0,23,4H9a1,1,0,0,0-.88.52l-6,11a1,1,0,0,0,0,1l6,11A1,1,0,0,0,9,28H23a1,1,0,0,0,.88-.52l6-11A1,1,0,0,0,29.88,15.52ZM22.93,7l4.39,8h-9.5ZM16,14.14,10.82,6H21.18ZM9.07,7l5.11,8H4.68ZM4.68,17h9.5L9.07,25ZM16,17.86,21.18,26H10.82ZM22.93,25l-5.11-8h9.5Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>