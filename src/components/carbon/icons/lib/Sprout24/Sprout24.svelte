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
  data-carbon-icon="Sprout24"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:keyup
  on:keydown
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24"
  class={className}
  {preserveAspectRatio}
  {style}
  {id}
  {...attributes}>
  <path d="M25,2A11.01,11.01,0,0,0,14.7549,9.0244,6.9939,6.9939,0,0,0,9,6H6V9a7.0078,7.0078,0,0,0,7,7h1v9.0493a9.9229,9.9229,0,0,0-6.071,2.8794l1.414,1.4141a8,8,0,0,1,12.3086,1.2134l1.6616-1.1128A9.98,9.98,0,0,0,16,25.062V16h1A11.0125,11.0125,0,0,0,28,5V2ZM13,14A5.0057,5.0057,0,0,1,8,9V8H9a5.0054,5.0054,0,0,1,5,5v1ZM26,5a9.01,9.01,0,0,1-9,9H16V13a9.01,9.01,0,0,1,9-9h1Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>