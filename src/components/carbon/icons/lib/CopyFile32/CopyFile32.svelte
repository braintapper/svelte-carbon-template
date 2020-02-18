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
  data-carbon-icon="CopyFile32"
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
  <path d="M27.4346,14.6987,21.377,8.5776A1.9488,1.9488,0,0,0,19.998,8H12a2.002,2.002,0,0,0-2,2V29a2.002,2.002,0,0,0,2,2H26a2.002,2.002,0,0,0,2-2V16.0771A1.9755,1.9755,0,0,0,27.4346,14.6987ZM20,10.03,25.9235,16H20ZM12,29V10h6v6a2.0023,2.0023,0,0,0,2,2h6.0006l.0009,11Z"></path><path d="M6,18H4V4A2.002,2.002,0,0,1,6,2H20V4H6Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>