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
  data-carbon-icon="CircleDash24"
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
  <path d="M7.7 4.7a14.7 14.7 0 0 0-3 3.1L6.3 9A13.26 13.26 0 0 1 8.9 6.3zM4.6 12.3l-1.9-.6A12.51 12.51 0 0 0 2 16H4A11.48 11.48 0 0 1 4.6 12.3zM2.7 20.4a14.4 14.4 0 0 0 2 3.9l1.6-1.2a12.89 12.89 0 0 1-1.7-3.3zM7.8 27.3a14.4 14.4 0 0 0 3.9 2l.6-1.9A12.89 12.89 0 0 1 9 25.7zM11.7 2.7l.6 1.9A11.48 11.48 0 0 1 16 4V2A12.51 12.51 0 0 0 11.7 2.7zM24.2 27.3a15.18 15.18 0 0 0 3.1-3.1L25.7 23A11.53 11.53 0 0 1 23 25.7zM27.4 19.7l1.9.6A15.47 15.47 0 0 0 30 16H28A11.48 11.48 0 0 1 27.4 19.7zM29.2 11.6a14.4 14.4 0 0 0-2-3.9L25.6 8.9a12.89 12.89 0 0 1 1.7 3.3zM24.1 4.6a14.4 14.4 0 0 0-3.9-2l-.6 1.9a12.89 12.89 0 0 1 3.3 1.7zM20.3 29.3l-.6-1.9A11.48 11.48 0 0 1 16 28v2A21.42 21.42 0 0 0 20.3 29.3z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>