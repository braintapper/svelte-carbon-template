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
  data-carbon-icon="Categories32"
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
  <path d="M6.76 6l.45.89L7.76 8H12v5H4V6H6.76m.62-2H3A1 1 0 0 0 2 5v9a1 1 0 0 0 1 1H13a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9L8.28 4.55A1 1 0 0 0 7.38 4zM22.76 6l.45.89L23.76 8H28v5H20V6h2.76m.62-2H19a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1H29a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H25l-.72-1.45a1 1 0 0 0-.9-.55zM6.76 19l.45.89L7.76 21H12v5H4V19H6.76m.62-2H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1H13a1 1 0 0 0 1-1V20a1 1 0 0 0-1-1H9l-.72-1.45a1 1 0 0 0-.9-.55zM22.76 19l.45.89L23.76 21H28v5H20V19h2.76m.62-2H19a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1H29a1 1 0 0 0 1-1V20a1 1 0 0 0-1-1H25l-.72-1.45a1 1 0 0 0-.9-.55z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>