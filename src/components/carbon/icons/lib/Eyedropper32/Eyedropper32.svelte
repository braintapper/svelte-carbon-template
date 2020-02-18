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
  data-carbon-icon="Eyedropper32"
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
  <path d="M2 27H5V30H2zM29.71 7.29l-5-5a1 1 0 0 0-1.41 0h0L20 5.59l-1.29-1.3L17.29 5.71 18.59 7 8.29 17.29A1 1 0 0 0 8 18v1.59l-2.71 2.7a1 1 0 0 0 0 1.41h0l3 3a1 1 0 0 0 1.41 0h0L12.41 24H14a1 1 0 0 0 .71-.29L25 13.41l1.29 1.3 1.42-1.42L26.41 12l3.3-3.29a1 1 0 0 0 0-1.41zM13.59 22h-2L9 24.59 7.41 23 10 20.41v-2l10-10L23.59 12zM25 10.59L21.41 7 24 4.41 27.59 8z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>