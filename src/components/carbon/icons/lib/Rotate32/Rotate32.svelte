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
  data-carbon-icon="Rotate32"
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
  <path d="M17.91 26.82l.35 2a12.9 12.9 0 0 0 4.24-1.54l-1-1.73A10.88 10.88 0 0 1 17.91 26.82zM24.42 23.07L26 24.35a13 13 0 0 0 2.24-3.91l-1.87-.68A11 11 0 0 1 24.42 23.07zM9.5 27.25a12.9 12.9 0 0 0 4.24 1.54l.35-2a10.88 10.88 0 0 1-3.59-1.3zM5.67 19.76l-1.87.68A13 13 0 0 0 6 24.35l.32-.26 1.22-1h0a11 11 0 0 1-1.91-3.31zM29 16a12.85 12.85 0 0 0-.8-4.44l-1.87.68A11.18 11.18 0 0 1 27 16zM26 7.65a13 13 0 0 0-20 0V4H4v8h8V10H6.81A11 11 0 0 1 24.42 8.93z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>