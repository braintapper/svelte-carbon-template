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
  data-carbon-icon="Iso24"
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
  <path d="M28 23H24a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2V21A2 2 0 0 1 28 23zM24 11V21h4V11zM18 23H12V21h6V17H14a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h6v2H14v4h4a2 2 0 0 1 2 2v4A2 2 0 0 1 18 23zM2 11L5 11 5 21 2 21 2 23 10 23 10 21 7 21 7 11 10 11 10 9 2 9 2 11z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>