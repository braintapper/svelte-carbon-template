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
  data-carbon-icon="FaceAdd32"
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
  <path d="M16 22a6 6 0 0 1-5.14-2.92l-1.71 1a8 8 0 0 0 13.7 0l-1.71-1A6 6 0 0 1 16 22zM30 4L26 4 26 0 24 0 24 4 20 4 20 6 24 6 24 10 26 10 26 6 30 6 30 4zM11.5 11A2.5 2.5 0 1 0 14 13.5 2.48 2.48 0 0 0 11.5 11zM20.5 11A2.5 2.5 0 1 0 23 13.5 2.48 2.48 0 0 0 20.5 11z"></path><path d="M27.61,13A12.33,12.33,0,0,1,28,16,12,12,0,1,1,16,4V2A14,14,0,1,0,29.67,13Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>