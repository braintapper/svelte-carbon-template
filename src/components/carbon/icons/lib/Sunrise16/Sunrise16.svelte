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
  data-carbon-icon="Sunrise16"
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
  <path d="M2 27H29.998V29H2zM16 20a4.0045 4.0045 0 0 1 4 4h2a6 6 0 0 0-12 0h2A4.0045 4.0045 0 0 1 16 20zM25 22H30V24H25z"></path><path d="M21.668 14.854H26.625999999999998V16.854H21.668z" transform="rotate(-45 24.146 15.854)"></path><path d="M16 4L11 9 12.41 10.41 15 7.83 15 8 15 15 17 15 17 8 17 7.83 19.59 10.41 21 9 16 4z"></path><path d="M6.854 13.374H8.854V18.332H6.854z" transform="rotate(-45 7.854 15.854)"></path><path d="M2 22H7V24H2z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>