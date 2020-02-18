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
  data-carbon-icon="VolumeDown20"
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
  <path d="M25.1 10.66L23.58 12a6 6 0 0 1-.18 7.94l1.47 1.36a8 8 0 0 0 .23-10.59zM20 30a1 1 0 0 1-.71-.3L11.67 22H5a1 1 0 0 1-1-1H4V11a1 1 0 0 1 1-1h6.67l7.62-7.7a1 1 0 0 1 1.41 0A1 1 0 0 1 21 3V29A1 1 0 0 1 20 30zM6 20h6a1.17 1.17 0 0 1 .79.3L19 26.57V5.43L12.79 11.7A1.17 1.17 0 0 1 12 12H6z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>