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
  data-carbon-icon="Fade24"
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
  <path d="M8.24 25.14L7 26.67a13.79 13.79 0 0 0 4.18 2.44l.69-1.87A12 12 0 0 1 8.24 25.14zM4.19 18l-2 .41A14.09 14.09 0 0 0 3.86 23L5.59 22A12.44 12.44 0 0 1 4.19 18zM11.82 4.76l-.69-1.87A13.79 13.79 0 0 0 7 5.33L8.24 6.86A12 12 0 0 1 11.82 4.76zM5.59 10L3.86 9a14.37 14.37 0 0 0-1.64 4.59l2 .34A12.05 12.05 0 0 1 5.59 10zM16 2V4a12 12 0 0 1 0 24v2A14 14 0 0 0 16 2z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>