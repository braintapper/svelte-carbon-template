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
  data-carbon-icon="Sunset32"
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
  <path d="M2 27.005H29.998V29.005H2z"></path><path d="M16,20a4.0045,4.0045,0,0,1,4,4h2a6,6,0,0,0-12,0h2A4.0045,4.0045,0,0,1,16,20Z" transform="translate(0 .005)"></path><path d="M25 22.005H30V24.005H25z"></path><path d="M21.668 14.854H26.625999999999998V16.854H21.668z" transform="rotate(-45 24.152 15.856)"></path><path d="M19.59 9.595L17 12.175 17 4.005 15 4.005 15 12.175 12.41 9.595 11 11.005 16 16.005 21 11.005 19.59 9.595z"></path><path d="M6.854 13.374H8.854V18.332H6.854z" transform="rotate(-45 7.86 15.856)"></path><path d="M2 22.005H7V24.005H2z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>