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
  data-carbon-icon="Attachment16"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:keyup
  on:keydown
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"
  class={className}
  {preserveAspectRatio}
  {style}
  {id}
  {...attributes}>
  <path d="M14.1,9L7,1.9C5.6,0.6,3.3,0.7,2,2.1S0.7,5.6,1.9,7l1.6,1.6l0.8-0.8L2.7,6.2c-1-0.9-1-2.5-0.1-3.5s2.5-1,3.5-0.1l0.1,0.1	l7.1,7.1c1,0.9,1,2.5,0.1,3.5s-2.5,1-3.5,0.1l-0.1-0.1L6.5,9.9C5.9,9.4,5.9,8.5,6.5,8s1.4-0.5,1.9,0l0,0l1.7,1.7L10.9,9L9.1,7.2	c-1-0.9-2.5-0.9-3.5,0.1c-0.9,0.9-0.9,2.4,0,3.3L9,14.1c1.4,1.3,3.7,1.2,5-0.2S15.3,10.4,14.1,9z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>