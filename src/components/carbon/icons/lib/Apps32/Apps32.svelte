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
  data-carbon-icon="Apps32"
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
  <path d="M8,4v4H4V4H8z M10,2H2v8h8V2z M18,4v4h-4V4H18z M20,2h-8v8h8V2z M28,4v4h-4V4H28z M30,2h-8v8h8V2z M8,14v4H4v-4H8z M10,12H2	v8h8V12z M18,14v4h-4v-4H18z M20,12h-8v8h8V12z M28,14v4h-4v-4H28z M30,12h-8v8h8V12z M8,24v4H4v-4H8z M10,22H2v8h8V22z M18,24v4h-4	v-4H18z M20,22h-8v8h8V22z M28,24v4h-4v-4H28z M30,22h-8v8h8V22z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>