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
  data-carbon-icon="Cyclist24"
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
  <path d="M25 30a6 6 0 1 1 6-6A6.0069 6.0069 0 0 1 25 30zm0-10a4 4 0 1 0 4 4A4.0045 4.0045 0 0 0 25 20zM7 30a6 6 0 1 1 6-6A6.0069 6.0069 0 0 1 7 30zM7 20a4 4 0 1 0 4 4A4.0045 4.0045 0 0 0 7 20z"></path><path d="M17 27H15V20.4139L9.5849 15a2.003 2.003 0 0 1 0-2.8292l4.5859-4.5859a2.0024 2.0024 0 0 1 2.8286 0L21.414 12H27v1.9993L20.5853 14l-5-5L11 13.5849l6 6zM21.5 8A3.5 3.5 0 1 1 25 4.5 3.5042 3.5042 0 0 1 21.5 8zm0-5A1.5 1.5 0 1 0 23 4.5 1.5017 1.5017 0 0 0 21.5 3z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>