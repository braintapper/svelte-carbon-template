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
  data-carbon-icon="NotificationOff24"
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
  <path d="M5 23V21.4l2.7-2.7A.91.91 0 0 0 8 18V13A8 8 0 0 1 21 6.76l1.44-1.43A9.79 9.79 0 0 0 17 3V1H15V3A10.15 10.15 0 0 0 6 13v4.6L3.3 20.3A.91.91 0 0 0 3 21v2zM26 17.6V13a10 10 0 0 0-1.09-4.5L30 3.41 28.59 2 2 28.59 3.41 30l5-5H11a5 5 0 0 0 10 0h7a.94.94 0 0 0 1-1V21a.91.91 0 0 0-.3-.7zM16 28a3 3 0 0 1-3-3h6A3 3 0 0 1 16 28zm11-5H10.42l13-13A8.06 8.06 0 0 1 24 13v5a.91.91 0 0 0 .3.7L27 21.4z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>