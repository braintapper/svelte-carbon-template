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
  data-carbon-icon="PhoneOff32"
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
  <path d="M9.19 18.56A25.66 25.66 0 0 1 5 6.08V6A1 1 0 0 1 6 5h5.28l1.5 3.77L9.94 11.64l.06.48a13 13 0 0 0 1.46 4.17l1.46-1.46a9.34 9.34 0 0 1-.84-2.52l2.13-2.15A2 2 0 0 0 14.65 8L13.13 4.26A2 2 0 0 0 11.27 3H5.76A3 3 0 0 0 3 6.23 28 28 0 0 0 7.79 20zM27.77 18.86L24 17.35a2 2 0 0 0-2.17.41l-2.17 2.15A9.17 9.17 0 0 1 15.45 18L30 3.41 28.59 2 2 28.59 3.41 30l7-7c3.38 3.18 8.28 5.62 15.39 6H26a3 3 0 0 0 3-3V20.72A2 2 0 0 0 27.77 18.86zM27 26v.06a1 1 0 0 1-1.06.94c-6.51-.37-11-2.54-14.11-5.42L14 19.44A10.77 10.77 0 0 0 19.88 22l.48.06 2.87-2.85L27 20.72z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>