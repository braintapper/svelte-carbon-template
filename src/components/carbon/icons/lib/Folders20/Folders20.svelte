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
  data-carbon-icon="Folders20"
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
  <path d="M26 28H6a2.0021 2.0021 0 0 1-2-2V11A2.0021 2.0021 0 0 1 6 9h5.6665a2.0119 2.0119 0 0 1 1.2007.4L16.3335 12H26a2.0021 2.0021 0 0 1 2 2V26A2.0021 2.0021 0 0 1 26 28zM11.6665 11H5.9985L6 26H26V14H15.6665zM28 9H17.6665l-4-3H6V4h7.6665a2.0119 2.0119 0 0 1 1.2007.4L18.3335 7H28z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>