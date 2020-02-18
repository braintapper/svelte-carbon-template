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
  data-carbon-icon="Attachment32"
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
  <path d="M27.1,17.9l-13-13a6.51,6.51,0,0,0-9.2,9.2l3,3,1.41-1.41-3-3a4.5,4.5,0,1,1,6.36-6.36l13,13a4.5,4.5,0,1,1-6.36,6.36l-6.13-6.13A2.5,2.5,0,0,1,16.72,16l3.17,3.17,1.41-1.41s-3.22-3.23-3.25-3.24a4.49,4.49,0,0,0-6.34,6.35L17.9,27.1a6.51,6.51,0,0,0,9.2-9.2Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>