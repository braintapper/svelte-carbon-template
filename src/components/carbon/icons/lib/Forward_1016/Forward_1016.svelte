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
  data-carbon-icon="Forward_1016"
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
  <path d="M26,18A10,10,0,1,1,16,8h4v5l6-6L20,1V6H16A12,12,0,1,0,28,18Z"></path><path d="M19.63 22.13a2.84 2.84 0 0 1-1.28-.27 2.44 2.44 0 0 1-.89-.77 3.57 3.57 0 0 1-.52-1.25 7.69 7.69 0 0 1-.17-1.68 7.83 7.83 0 0 1 .17-1.68 3.65 3.65 0 0 1 .52-1.25 2.44 2.44 0 0 1 .89-.77 2.84 2.84 0 0 1 1.28-.27 2.44 2.44 0 0 1 2.16 1 5.23 5.23 0 0 1 .7 2.93 5.23 5.23 0 0 1-.7 2.93A2.44 2.44 0 0 1 19.63 22.13zm0-1.22a1.07 1.07 0 0 0 1-.55A3.38 3.38 0 0 0 21 18.85V17.47a3.31 3.31 0 0 0-.29-1.5 1.23 1.23 0 0 0-2.06 0 3.31 3.31 0 0 0-.29 1.5v1.38a3.38 3.38 0 0 0 .29 1.51A1.06 1.06 0 0 0 19.63 20.91zM10.63 22V20.82h2V15.63l-1.86 1-.55-1.06 2.32-1.3H14v6.5h1.78V22z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>