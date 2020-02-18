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
  data-carbon-icon="WarningAltFilled16"
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
  <path d="M14.9,13.3l-6.5-12C8.3,1,8,0.9,7.8,1.1c-0.1,0-0.2,0.1-0.2,0.2l-6.5,12c-0.1,0.2-0.1,0.3,0,0.5C1.2,13.9,1.3,14,1.5,14h13	c0.2,0,0.3-0.1,0.4-0.2C15,13.6,15,13.4,14.9,13.3z M7.4,5.5h1.1v4H7.4V5.5z M8,12.2c-0.4,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.3,0.8,0.8S8.4,12.2,8,12.2z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>