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
  data-carbon-icon="Misuse24"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:keyup
  on:keydown
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
  class={className}
  {preserveAspectRatio}
  {style}
  {id}
  {...attributes}>
  <path d="M12,1C6,1,1,6,1,12s5,11,11,11s11-4.9,11-11S18.1,1,12,1z M16.2,17.5L12,13.3l-4.2,4.2l-1.3-1.3l4.2-4.2L6.5,7.8l1.3-1.3	l4.2,4.2l4.2-4.2l1.3,1.3L13.3,12l4.2,4.2L16.2,17.5z"></path><path fill="none" d="M16.2,17.5L12,13.3l-4.2,4.2l-1.3-1.3l4.2-4.2L6.5,7.8l1.3-1.3l4.2,4.2l4.2-4.2l1.3,1.3	L13.3,12l4.2,4.2L16.2,17.5z" data-icon-path="inner-path" opacity="0"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>