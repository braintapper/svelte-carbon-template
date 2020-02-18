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
  data-carbon-icon="ModelReference32"
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
  <path d="M4 21L4 23 7.586 23 2 28.586 3.414 30 9 24.414 9 28 11 28 11 21 4 21z"></path><path d="M23.5,4H8.5l-6,8-.7843,1.0454L6.8773,19l1.3233-1.5264L5.19,14h5.1119L16,29.5269,30.2842,13.0454ZM27,12H21.5543l-3.75-6H22.5Zm-7.8044,0H12.8043L16,6.8867ZM5,12,9.5,6h4.6957l-3.75,6ZM15.999,23.7212,12.4318,14H19.568Zm1.9437.51L21.6978,14H26.81Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>