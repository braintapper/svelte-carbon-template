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
  data-carbon-icon="ExpandAll16"
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
  <path d="M12,10H26a2.0025,2.0025,0,0,0,2-2V4a2.0025,2.0025,0,0,0-2-2H12a2.0025,2.0025,0,0,0-2,2V5H6V2H4V25a2.0025,2.0025,0,0,0,2,2h4v1a2.0025,2.0025,0,0,0,2,2H26a2.0025,2.0025,0,0,0,2-2V24a2.0025,2.0025,0,0,0-2-2H12a2.0025,2.0025,0,0,0-2,2v1H6V17h4v1a2.0025,2.0025,0,0,0,2,2H26a2.0025,2.0025,0,0,0,2-2V14a2.0025,2.0025,0,0,0-2-2H12a2.0025,2.0025,0,0,0-2,2v1H6V7h4V8A2.0025,2.0025,0,0,0,12,10Zm0-6H26l.0012,4H12Zm0,20H26l.0012,4H12Zm0-10H26l.0012,4H12Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>