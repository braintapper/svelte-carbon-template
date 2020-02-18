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
  data-carbon-icon="Hurricane32"
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
  <circle cx="16" cy="16" r="2"></circle><path d="M16,7a8.9658,8.9658,0,0,0-2.6547.4006A15.6132,15.6132,0,0,1,16.811,5.5767,25.9687,25.9687,0,0,1,25.001,4L25,2C24.82,2,7,2.16,7,16A9,9,0,0,0,18.6547,24.6a15.61,15.61,0,0,1-3.4657,1.8234A25.9749,25.9749,0,0,1,7,28l0,2c.18,0,18-.16,18-14A9.01,9.01,0,0,0,16,7Zm0,16a7,7,0,1,1,7-7A7.0081,7.0081,0,0,1,16,23Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>