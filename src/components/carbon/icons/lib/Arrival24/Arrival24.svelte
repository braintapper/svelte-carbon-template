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
  data-carbon-icon="Arrival24"
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
  <path d="M2 28H30V30H2zM17.21 5.23l1.39.38 1 11.29 5.87 1.57A2 2 0 0 1 27 20.62a1.88 1.88 0 0 1-1.37 1.52 2 2 0 0 1-1 0l-18.7-5a1.89 1.89 0 0 1-1.33-2.3L6.35 8.34l1.44.38L8.4 13.9l6 1.62L17.21 5.23m-1-2.2a1 1 0 0 0-.68.69L13 13.07l-2.81-.75L9.69 7.79A1 1 0 0 0 9 7L5.87 6.14a.94.94 0 0 0-.5 0 1 1 0 0 0-.68.68l-2 7.49a3.87 3.87 0 0 0 2.74 4.74l18.71 5A3.87 3.87 0 0 0 29 21a4 4 0 0 0-3-4.42l-4.52-1.21L20.53 4.71a1 1 0 0 0-.72-.85L16.73 3a1.06 1.06 0 0 0-.5 0z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>