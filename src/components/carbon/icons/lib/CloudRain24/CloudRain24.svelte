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
  data-carbon-icon="CloudRain24"
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
  <path d="M23.5 22H8.5A6.5 6.5 0 0 1 7.2 9.14a9 9 0 0 1 17.6 0A6.5 6.5 0 0 1 23.5 22zM16 4a7 7 0 0 0-6.94 6.14L9 11 8.14 11a4.5 4.5 0 0 0 .36 9h15a4.5 4.5 0 0 0 .36-9L23 11l-.1-.82A7 7 0 0 0 16 4zM14 30a.93.93 0 0 1-.45-.11 1 1 0 0 1-.44-1.34l2-4a1 1 0 1 1 1.78.9l-2 4A1 1 0 0 1 14 30zM20 30a.93.93 0 0 1-.45-.11 1 1 0 0 1-.44-1.34l2-4a1 1 0 1 1 1.78.9l-2 4A1 1 0 0 1 20 30zM8 30a.93.93 0 0 1-.45-.11 1 1 0 0 1-.44-1.34l2-4a1 1 0 1 1 1.78.9l-2 4A1 1 0 0 1 8 30z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>