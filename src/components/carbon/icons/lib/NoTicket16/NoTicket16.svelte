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
  data-carbon-icon="NoTicket16"
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
  <path d="M28 6h-.5859L30 3.4141 28.5859 2 2 28.5859 3.4141 30l4-4H28a2.0027 2.0027 0 0 0 2-2V19a1 1 0 0 0-1-1 2 2 0 0 1 0-4 1 1 0 0 0 1-1V8A2.0023 2.0023 0 0 0 28 6zm0 6.1265a4 4 0 0 0 0 7.7465V24H21V21H19v3H9.4141L19 14.4141V19h2V12.4141L25.4141 8H28zM4 12.1265V8H19V6H4A2.0023 2.0023 0 0 0 2 8v5a1 1 0 0 0 1 1 2 2 0 0 1 0 4 1 1 0 0 0-1 1v5H4V19.873a4 4 0 0 0 0-7.7465z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>