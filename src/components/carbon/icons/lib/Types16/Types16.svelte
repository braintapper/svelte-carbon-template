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
  data-carbon-icon="Types16"
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
  <path d="M30 16L22 24 20.586 22.586 27.172 16 20.586 9.414 22 8 30 16z"></path><path d="M16,22a.9967.9967,0,0,1-.707-.293l-5-5a.9994.9994,0,0,1,0-1.414l5-5a.9994.9994,0,0,1,1.414,0l5,5a.9994.9994,0,0,1,0,1.414l-5,5A.9967.9967,0,0,1,16,22Zm-3.5859-6L16,19.5859,19.5859,16,16,12.4141Z"></path><path d="M2 16L10 8 11.414 9.414 4.828 16 11.414 22.586 10 24 2 16z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>