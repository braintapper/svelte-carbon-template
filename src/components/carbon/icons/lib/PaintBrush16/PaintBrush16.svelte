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
  data-carbon-icon="PaintBrush16"
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
  <path d="M28.83,23.17,23,17.33V13a1,1,0,0,0-.29-.71l-10-10a1,1,0,0,0-1.42,0l-9,9a1,1,0,0,0,0,1.42l10,10A1,1,0,0,0,13,23h4.34l5.83,5.84a4,4,0,0,0,5.66-5.66ZM6,10.41l2.29,2.3,1.42-1.42L7.41,9,9,7.41l4.29,4.3,1.42-1.42L10.41,6,12,4.41,18.59,11,11,18.59,4.41,12Zm21.41,17a2,2,0,0,1-2.82,0l-6.13-6.12a1.8,1.8,0,0,0-.71-.29H13.41l-1-1L20,12.41l1,1v4.34a1,1,0,0,0,.29.7l6.12,6.14a2,2,0,0,1,0,2.82Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>