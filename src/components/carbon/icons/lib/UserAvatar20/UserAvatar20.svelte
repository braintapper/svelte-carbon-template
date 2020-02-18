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
  data-carbon-icon="UserAvatar20"
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
  <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2ZM10,26.38v-2A3.22,3.22,0,0,1,13,21h6a3.22,3.22,0,0,1,3,3.39v2a11.92,11.92,0,0,1-12,0Zm14-1.46v-.61A5.21,5.21,0,0,0,19,19H13a5.2,5.2,0,0,0-5,5.31s0,0,0,0v.59a12,12,0,1,1,16,0Z"></path><path d="M16,7a5,5,0,1,0,5,5A5,5,0,0,0,16,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,16,15Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>