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
  data-carbon-icon="LetterWw20"
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
  <path d="M24.3 13L23.39 21.61 22 13 20 13 18.61 21.61 17.7 13 16 13 17.36 23 19.64 23 21 14.63 22.36 23 24.64 23 26 13 24.3 13zM12.21 9L11.87 17 11.61 21.54 11.2 18 10.52 12.54 8.5 12.54 7.82 18 7.41 21.54 7.16 17 6.81 9 5.01 9 6.01 23 8.28 23 9.04 18.07 9.5 14 9.51 13.97 9.52 14 9.98 18.07 10.74 23 13.01 23 14.01 9 12.21 9z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>