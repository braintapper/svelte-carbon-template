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
  data-carbon-icon="AudioConsole16"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:keyup
  on:keydown
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16"
  class={className}
  {preserveAspectRatio}
  {style}
  {id}
  {...attributes}>
  <path d="M30 20H29V2H27V20H26a2.0027 2.0027 0 0 0-2 2v2a2.0027 2.0027 0 0 0 2 2h1v4h2V26h1a2.0027 2.0027 0 0 0 2-2V22A2.0027 2.0027 0 0 0 30 20zm0 4H26V22h4zM22 14H21V2H19V14H18a2.002 2.002 0 0 0-2 2v2a2.0023 2.0023 0 0 0 2 2h1V30h2V20h1a2.0027 2.0027 0 0 0 2-2V16A2.0023 2.0023 0 0 0 22 14zm0 4H18V16h4zM14 7H13V2H11V7H10A2.002 2.002 0 0 0 8 9v2a2.002 2.002 0 0 0 2 2h1V30h2V13h1a2.002 2.002 0 0 0 2-2V9A2.002 2.002 0 0 0 14 7zm0 4H10V9h4zM6 21H5V2H3V21H2a2.0023 2.0023 0 0 0-2 2v2a2.0023 2.0023 0 0 0 2 2H3v3H5V27H6a2.0023 2.0023 0 0 0 2-2V23A2.0023 2.0023 0 0 0 6 21zm0 4H2V23l4-.001z" transform="translate(0 .005)"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>