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
  data-carbon-icon="DataShare20"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:keyup
  on:keydown
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
  class={className}
  {preserveAspectRatio}
  {style}
  {id}
  {...attributes}>
  <path d="M5 25V15.8281l-3.5859 3.586L0 18l6-6 6 6-1.4141 1.4141L7 15.8281V25H19v2H7A2.0024 2.0024 0 0 1 5 25zM24 22h4a2.002 2.002 0 0 1 2 2v4a2.002 2.002 0 0 1-2 2H24a2.002 2.002 0 0 1-2-2V24A2.002 2.002 0 0 1 24 22zm4 6V24H23.9985L24 28zM27 6v9.1719l3.5859-3.586L32 13l-6 6-6-6 1.4141-1.4141L25 15.1719V6H13V4H25A2.0024 2.0024 0 0 1 27 6zM2 6H8V8H2zM2 2H10V4H2z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>