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
  data-carbon-icon="WatsonHealth3DCursor20"
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
  <path d="M13 4L4 4 4 13.01 6 13.01 6 6 13 6 13 4zM29.49 13.12l-9-5a1 1 0 0 0-1 0l-9 5A1 1 0 0 0 10 14V24a1 1 0 0 0 .52.87l9 5A1 1 0 0 0 20 30a1.05 1.05 0 0 0 .49-.13l9-5A1 1 0 0 0 30 24V14A1 1 0 0 0 29.49 13.12zM19 27.3l-7-3.89V15.69l7 3.89zm1-9.45L13.06 14 20 10.14 26.94 14zm8 5.56L21 27.3V19.58l7-3.89z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>