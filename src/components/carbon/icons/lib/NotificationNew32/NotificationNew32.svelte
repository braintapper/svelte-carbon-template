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
  data-carbon-icon="NotificationNew32"
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
  <path d="M26,17.6V15H24v3a.91.91,0,0,0,.3.7L27,21.4V23H5V21.4l2.7-2.7A.91.91,0,0,0,8,18V13a8,8,0,0,1,8-8,7.89,7.89,0,0,1,4,1.09V3.8A9.71,9.71,0,0,0,17,3V1H15V3A10.15,10.15,0,0,0,6,13v4.6L3.3,20.3A.91.91,0,0,0,3,21v3a.94.94,0,0,0,1,1h7a5,5,0,0,0,10,0h7a.94.94,0,0,0,1-1V21a.91.91,0,0,0-.3-.7ZM16,28a3,3,0,0,1-3-3h6A3,3,0,0,1,16,28Z"></path><circle cx="26" cy="8" r="4"></circle>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>