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
  data-carbon-icon="HelpFilled16"
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
  <path d="M8,1C4.1,1,1,4.1,1,8s3.1,7,7,7s7-3.1,7-7S11.9,1,8,1z M8,12.5c-0.4,0-0.8-0.3-0.8-0.8S7.6,11,8,11c0.4,0,0.8,0.3,0.8,0.8	S8.4,12.5,8,12.5z M8.6,8.6v1.2H7.4V7.5h1.1c0.7,0,1.2-0.6,1.1-1.3c0-0.6-0.5-1.1-1.1-1.1H7.8c-0.7,0-1.2,0.5-1.2,1.2v0.3H5.4V6.3	C5.4,5,6.5,4,7.8,4h0.7c1.3,0,2.3,1.1,2.2,2.4C10.7,7.6,9.8,8.6,8.6,8.6L8.6,8.6z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>