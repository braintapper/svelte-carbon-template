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
  data-carbon-icon="UserCertification16"
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
  <path d="M25 10L26.593 13 30 13.414 27.5 15.667 28 19 25 17.125 22 19 22.5 15.667 20 13.414 23.5 13 25 10zM22 30H20V25a5.0059 5.0059 0 0 0-5-5H9a5.0059 5.0059 0 0 0-5 5v5H2V25a7.0082 7.0082 0 0 1 7-7h6a7.0082 7.0082 0 0 1 7 7zM12 4A5 5 0 1 1 7 9a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7A7 7 0 0 0 12 2z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>