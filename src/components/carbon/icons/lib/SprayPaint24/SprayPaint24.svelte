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
  data-carbon-icon="SprayPaint24"
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
  <path d="M22.5,23A4.5,4.5,0,1,1,27,18.5,4.505,4.505,0,0,1,22.5,23Zm0-7A2.5,2.5,0,1,0,25,18.5,2.5026,2.5026,0,0,0,22.5,16Z"></path><path d="M28 8H26V3H19V8H17a2.002 2.002 0 0 0-2 2V28a2.0023 2.0023 0 0 0 2 2H28a2.0027 2.0027 0 0 0 2-2V10A2.0023 2.0023 0 0 0 28 8zM21 5h3V8H21zM17 28V10H28l.002 18zM2 14H5V17H2zM7 9H10V12H7zM2 9H5V12H2zM12 4H15V7H12zM7 4H10V7H7zM2 4H5V7H2z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>