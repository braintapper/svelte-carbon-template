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
  data-carbon-icon="UserProfileAlt20"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:keyup
  on:keydown
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
  class={className}
  {preserveAspectRatio}
  {style}
  {id}
  {...attributes}>
  <path d="M19 13H26V15H19zM19 8H30V10H19zM19 3H30V5H19zM11 30H7a2.0059 2.0059 0 0 1-2-2V21a2.0059 2.0059 0 0 1-2-2V13a2.9465 2.9465 0 0 1 3-3h6a2.9465 2.9465 0 0 1 3 3v6a2.0059 2.0059 0 0 1-2 2v7A2.0059 2.0059 0 0 1 11 30zM6 12a.9448.9448 0 0 0-1 1v6H7v9h4V19h2V13a.9448.9448 0 0 0-1-1zM9 9a4 4 0 1 1 4-4h0A4.0118 4.0118 0 0 1 9 9zM9 3a2 2 0 1 0 2 2h0A2.0059 2.0059 0 0 0 9 3z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>