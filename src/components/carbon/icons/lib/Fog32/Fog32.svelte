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
  data-carbon-icon="Fog32"
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
  <path d="M9 30H3a1 1 0 0 1 0-2H9a1 1 0 0 1 0 2zM23 30H13a1 1 0 0 1 0-2H23a1 1 0 0 1 0 2zM27 26H23a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zM19 26H3a1 1 0 0 1 0-2H19a1 1 0 0 1 0 2zM15 22H3a1 1 0 0 1 0-2H15a1 1 0 0 1 0 2z"></path><path d="M24.8008,9.1416a8.9929,8.9929,0,0,0-17.6006,0A6.5321,6.5321,0,0,0,2,15.5054,6.4518,6.4518,0,0,0,2.5,18H4.76A4.4633,4.4633,0,0,1,4,15.5054a4.517,4.517,0,0,1,4.144-4.481L8.96,10.96l.0991-.812a6.9931,6.9931,0,0,1,13.8838,0l.0986.812.8154.064A4.4947,4.4947,0,0,1,23.5,20H18v2h5.5A6.4944,6.4944,0,0,0,24.8008,9.1416Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>