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
  data-carbon-icon="App32"
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
  <path d="M28 10H22V24h2V20h4a2.0027 2.0027 0 0 0 2-2V12A2.0023 2.0023 0 0 0 28 10zm-4 8V12h4v6zM18 10H12V24h2V20h4a2.0027 2.0027 0 0 0 2-2V12A2.0023 2.0023 0 0 0 18 10zm-4 8V12h4v6zM8 10H3v2H8v2H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6V12A2.0023 2.0023 0 0 0 8 10zm0 8H4V16H8z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>