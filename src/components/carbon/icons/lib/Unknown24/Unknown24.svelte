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
  data-carbon-icon="Unknown24"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:keyup
  on:keydown
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24"
  class={className}
  {preserveAspectRatio}
  {style}
  {id}
  {...attributes}>
  <circle cx="16" cy="22.5" r="1.5"></circle><path d="M17,19H15V15h2a2,2,0,0,0,0-4H15a2.0023,2.0023,0,0,0-2,2v.5H11V13a4.0045,4.0045,0,0,1,4-4h2a4,4,0,0,1,0,8Z"></path><path d="M16,30a2.0763,2.0763,0,0,1-1.4732-.6094L2.6094,17.4732a2.0855,2.0855,0,0,1,0-2.9464L14.5268,2.6094a2.0855,2.0855,0,0,1,2.9464,0L29.3906,14.5268a2.0855,2.0855,0,0,1,0,2.9464L17.4732,29.3906A2.0763,2.0763,0,0,1,16,30ZM16,3.9992a.0841.0841,0,0,0-.0591.0244L4.0236,15.9409a.0838.0838,0,0,0,0,.1182L15.9409,27.9764a.0842.0842,0,0,0,.1182,0L27.9764,16.0591a.0838.0838,0,0,0,0-.1182L16.0591,4.0236A.0841.0841,0,0,0,16,3.9992Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>