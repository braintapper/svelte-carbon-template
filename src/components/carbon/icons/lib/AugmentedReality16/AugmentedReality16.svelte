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
  data-carbon-icon="AugmentedReality16"
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
  <path d="M27.4473,9.1055l-6-3a1.0008,1.0008,0,0,0-.8946,0l-6,3A1,1,0,0,0,14,10v7a1,1,0,0,0,.5527.8945l6,3a1.001,1.001,0,0,0,.8946,0l6-3A1,1,0,0,0,28,17V10A1,1,0,0,0,27.4473,9.1055ZM21,8.1182,24.7637,10,21,11.8818,17.2363,10Zm-5,3.5,4,2v4.7636l-4-2Zm6,6.7636V13.6182l4-2v4.7636Z"></path><circle cx="13.5" cy="24.5" r="1.5"></circle><path d="M20,30H7a2.0023,2.0023,0,0,1-2-2V4A2.0023,2.0023,0,0,1,7,2H20V4H7V28H20V24h2v4A2.0023,2.0023,0,0,1,20,30Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>