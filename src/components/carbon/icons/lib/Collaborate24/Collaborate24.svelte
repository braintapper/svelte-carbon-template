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
  data-carbon-icon="Collaborate24"
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
  <path d="M6 21V20H4v1a7 7 0 0 0 7 7h3V26H11A5 5 0 0 1 6 21zM24 11v1h2V11a7 7 0 0 0-7-7H16V6h3A5 5 0 0 1 24 11zM11 11H5a3 3 0 0 0-3 3v2H4V14a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2V14A3 3 0 0 0 11 11zM8 10A4 4 0 1 0 4 6 4 4 0 0 0 8 10zM8 4A2 2 0 1 1 6 6 2 2 0 0 1 8 4zM27 25H21a3 3 0 0 0-3 3v2h2V28a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2V28A3 3 0 0 0 27 25zM20 20a4 4 0 1 0 4-4A4 4 0 0 0 20 20zm6 0a2 2 0 1 1-2-2A2 2 0 0 1 26 20z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>