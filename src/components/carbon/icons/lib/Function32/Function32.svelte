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
  data-carbon-icon="Function32"
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
  <path d="M8.5,30a2.5,2.5,0,0,1,0-5c.63-.07,2.35-1.53,2.49-7.22l-1.78-.45a2.92,2.92,0,0,1,0-5.66L11,11.21C11.55,4,19.32,2,23.5,2a2.5,2.5,0,0,1,0,5c-.08,0-2.23.15-2.48,4.22l1.77.45a2.92,2.92,0,0,1,0,5.66L21,17.79C20.49,29.86,8.62,30,8.5,30Zm15-26C23.07,4,13,4.11,13,12v.78l-3.3.83a.92.92,0,0,0,0,1.78l3.3.83V17c0,9.72-4,10-4.5,10a.5.5,0,0,0,0,1C8.93,28,19,27.83,19,17v-.78l3.3-.83a.92.92,0,0,0,0-1.78L19,12.78V12c0-6.92,4.46-7,4.5-7a.5.5,0,0,0,0-1Z"></path><path d="M4.15 23.46A14 14 0 0 1 10.61 3.08l.77 1.84A12 12 0 0 0 5.85 22.4zM21.39 28.92l-.77-1.84A12 12 0 0 0 26.11 9.54L27.8 8.46a14 14 0 0 1-6.41 20.46z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>