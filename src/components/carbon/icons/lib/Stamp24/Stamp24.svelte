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
  data-carbon-icon="Stamp24"
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
  <path d="M26,18H20V14.8982a7.4938,7.4938,0,0,1,1.1587-3.8542,5.9751,5.9751,0,0,0-1.3735-7.7006,5.9968,5.9968,0,0,0-9.6829,3.54,5.91,5.91,0,0,0,.7478,4.175A7.2573,7.2573,0,0,1,12,14.7942V18H6a2.002,2.002,0,0,0-2,2v4a2.0025,2.0025,0,0,0,2,2v2a2.0025,2.0025,0,0,0,2,2H24a2.0025,2.0025,0,0,0,2-2V26a2.0025,2.0025,0,0,0,2-2V20A2.002,2.002,0,0,0,26,18ZM12.07,7.244a3.9994,3.9994,0,1,1,7.3728,2.7731A9.76,9.76,0,0,0,18.0664,14H13.94a9.5433,9.5433,0,0,0-1.376-3.9736A3.9366,3.9366,0,0,1,12.07,7.244ZM18,16v2H14V16Zm6,12H8V26H24ZM6,24V20H26v4Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>