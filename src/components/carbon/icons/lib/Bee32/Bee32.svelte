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
  data-carbon-icon="Bee32"
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
  <path d="M16 10a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0V16A6 6 0 0 0 16 10zm-4.25 7.87h8.5v4.25h-8.5zM16 28.25A4.27 4.27 0 0 1 11.75 24v-.13h8.5V24A4.27 4.27 0 0 1 16 28.25zm4.25-12.13h-8.5V16a4.25 4.25 0 0 1 8.5 0zM30.66 19.21L24 13v9.1a4 4 0 0 0 8 0A3.83 3.83 0 0 0 30.66 19.21zM28 24.35a2.25 2.25 0 0 1-2.25-2.25V17l3.72 3.47h0A2.05 2.05 0 0 1 30.2 22 2.25 2.25 0 0 1 28 24.35zM0 22.1a4 4 0 0 0 8 0V13L1.34 19.21A3.88 3.88 0 0 0 0 22.1zm2.48-1.56h0L6.25 17v5.1a2.25 2.25 0 0 1-4.5 0A2.05 2.05 0 0 1 2.48 20.54zM15 5.5A3.5 3.5 0 1 0 11.5 9 3.5 3.5 0 0 0 15 5.5zm-5.25 0A1.75 1.75 0 1 1 11.5 7.25 1.77 1.77 0 0 1 9.75 5.5zM20.5 2A3.5 3.5 0 1 0 24 5.5 3.5 3.5 0 0 0 20.5 2zm0 5.25A1.75 1.75 0 1 1 22.25 5.5 1.77 1.77 0 0 1 20.5 7.25z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>