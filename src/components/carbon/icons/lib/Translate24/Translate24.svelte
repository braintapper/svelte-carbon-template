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
  data-carbon-icon="Translate24"
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
  <path d="M27.85 29H30L24 14H21.65l-6 15H17.8l1.6-4h6.85zM20.2 23l2.62-6.56L25.45 23zM18 7V5H11V2H9V5H2V7H12.74a14.71 14.71 0 0 1-3.19 6.18A13.5 13.5 0 0 1 7.26 9H5.16a16.47 16.47 0 0 0 3 5.58A16.84 16.84 0 0 1 3 18l.75 1.86A18.47 18.47 0 0 0 9.53 16a16.92 16.92 0 0 0 5.76 3.84L16 18a14.48 14.48 0 0 1-5.12-3.37A17.64 17.64 0 0 0 14.8 7z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>