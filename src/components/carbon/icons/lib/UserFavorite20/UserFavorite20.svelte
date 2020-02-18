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
  data-carbon-icon="UserFavorite20"
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
  <path d="M27.303 12a2.6616 2.6616 0 0 0-1.9079.8058l-.3932.4054-.397-.4054a2.6615 2.6615 0 0 0-3.8157 0 2.7992 2.7992 0 0 0 0 3.8964L25.0019 21l4.2089-4.2978a2.7992 2.7992 0 0 0 0-3.8964A2.6616 2.6616 0 0 0 27.303 12zM2 30H4V25a5.0059 5.0059 0 0 1 5-5h6a5.0059 5.0059 0 0 1 5 5v5h2V25a7.0082 7.0082 0 0 0-7-7H9a7.0082 7.0082 0 0 0-7 7zM12 4A5 5 0 1 1 7 9a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7A7 7 0 0 0 12 2z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>