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
  data-carbon-icon="ExamMode32"
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
  <path d="M25 23v3H7V16.83l3.59 3.58L12 19 6 13 0 19l1.41 1.41L5 16.83V26a2 2 0 0 0 2 2H25a2 2 0 0 0 2-2V23zM27 7v9.17l3.59-3.58L32 14l-6 6-6-6 1.41-1.41L25 16.17V7H13V5H25A2 2 0 0 1 27 7zM8 10H4A2 2 0 0 1 2 8V4A2 2 0 0 1 4 2H8a2 2 0 0 1 2 2V8A2 2 0 0 1 8 10zM4 4V8H8V4z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>