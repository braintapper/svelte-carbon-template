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
  data-carbon-icon="NoImage24"
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
  <path d="M30 3.4141L28.5859 2 2 28.5859 3.4141 30l2-2H26a2.0027 2.0027 0 0 0 2-2V5.4141zM26 26H7.4141l7.7929-7.793 2.3788 2.3787a2 2 0 0 0 2.8284 0L22 19l4 3.9973zm0-5.8318l-2.5858-2.5859a2 2 0 0 0-2.8284 0L19 19.1682l-2.377-2.3771L26 7.4141zM6 22V19l5-4.9966 1.3733 1.3733 1.4159-1.416-1.375-1.375a2 2 0 0 0-2.8284 0L6 16.1716V6H22V4H6A2.002 2.002 0 0 0 4 6V22z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>