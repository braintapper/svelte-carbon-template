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
  data-carbon-icon="Humidity16"
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
  <path d="M23.5 30H8.5A6.4944 6.4944 0 0 1 7.2 17.1415a8.9943 8.9943 0 0 1 17.6006 0A6.4945 6.4945 0 0 1 23.5 30zM16 12.0053a6.9987 6.9987 0 0 0-6.9414 6.1431L8.96 18.96l-.8155.0639A4.4947 4.4947 0 0 0 8.5 28h15a4.4947 4.4947 0 0 0 .3564-8.9757L23.041 18.96l-.0986-.812A7.0012 7.0012 0 0 0 16 12.0053zM26 12a4.0045 4.0045 0 0 1-4-4c0-2.6624 2.9893-5.4353 3.33-5.7427a1.0005 1.0005 0 0 1 1.34.0005C27.0112 2.5657 30 5.3418 30 8A4.0045 4.0045 0 0 1 26 12zm0-7.5828c-.853.9307-2 2.4385-2 3.5828a2 2 0 0 0 4 0C28 6.8525 26.8535 5.3464 26.0005 4.4172z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>