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
  data-carbon-icon="Mp432"
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
  <path d="M27.5 22.5L27.5 18.5 22.5 18.5 22.5 9.5 23.5 9.5 23.5 17.5 27.5 17.5 27.5 9.5 28.5 9.5 28.5 17.5 29.5 17.5 29.5 18.5 28.5 18.5 28.5 22.5 27.5 22.5z"></path><path d="M28 10v8h0V10m1-1H27v8H24V9H22V19h5v4h2V19h1V17H29V9zM14 23H12V9h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H14zm0-7h4V11H14zM8 9L6.49 14 6 15.98 5.54 14 4 9 2 9 2 23 4 23 4 15 3.84 13 4.42 15 6 19.63 7.58 15 8.16 13 8 15 8 23 10 23 10 9 8 9z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>