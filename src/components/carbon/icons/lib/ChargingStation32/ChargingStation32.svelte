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
  data-carbon-icon="ChargingStation32"
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
  <path d="M11.857 21.514L10.143 20.486 12.234 17 7.234 17 11.143 10.486 12.857 11.514 10.766 15 15.766 15 11.857 21.514z"></path><path d="M30,7H29V4H27V7H26v6h1V24.5a1.5,1.5,0,0,1-3,0V16a1,1,0,0,0-1-1H19V5a1,1,0,0,0-1-1H5A1,1,0,0,0,4,5V26H2v2H21V26H19V17h3v7.5a3.5,3.5,0,0,0,7,0V13h1ZM17,26H6V6H17Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>