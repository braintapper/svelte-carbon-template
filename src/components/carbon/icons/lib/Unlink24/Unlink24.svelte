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
  data-carbon-icon="Unlink24"
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
  <path d="M5 3.59H7V8.42H5z" transform="rotate(-45.01 5.996 6.005)"></path><path d="M25 23.58H27V28.409999999999997H25z" transform="rotate(-44.99 25.995 25.999)"></path><path d="M11 2H13V6H11zM2 11H6V13H2zM26 19H30V21H26zM19 26H21V30H19zM16.58 21.07l-3.71 3.72a4 4 0 1 1-5.66-5.66l3.72-3.72L9.51 14 5.8 17.72a6 6 0 0 0-.06 8.54A6 6 0 0 0 10 28a6.07 6.07 0 0 0 4.32-1.8L18 22.49zM15.41 10.93l3.72-3.72a4 4 0 1 1 5.66 5.66l-3.72 3.72L22.49 18l3.71-3.72a6 6 0 0 0 .06-8.54A6 6 0 0 0 22 4a6.07 6.07 0 0 0-4.32 1.8L14 9.51z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>