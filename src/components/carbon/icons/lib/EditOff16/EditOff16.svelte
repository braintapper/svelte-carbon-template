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
  data-carbon-icon="EditOff16"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:keyup
  on:keydown
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"
  class={className}
  {preserveAspectRatio}
  {style}
  {id}
  {...attributes}>
  <path d="M15 14.3L1.7 1 1 1.7l5 5-4 4V14h3.2l4-4 5 5L15 14.3zM4.8 13H3v-1.8l3.8-3.8 1.8 1.8L4.8 13zM14.7 3.1L14.7 3.1l-1.8-1.8c-.4-.4-1-.4-1.4 0 0 0 0 0 0 0l0 0-4 4L8.2 6 10 4.2 11.8 6 10 7.8l.7.7 4-4C15.1 4.1 15.1 3.5 14.7 3.1 14.7 3.1 14.7 3.1 14.7 3.1zM12.5 5.3l-1.8-1.8L12.2 2 14 3.8 12.5 5.3z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>