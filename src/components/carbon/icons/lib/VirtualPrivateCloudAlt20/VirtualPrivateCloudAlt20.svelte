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
  data-carbon-icon="VirtualPrivateCloudAlt20"
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
  <path d="M23.4141,22,10,8.5859V2H2v8H8.5859L22,23.4141V30h8V22ZM8,8H4V4H8ZM28,28H24V24h4Z"></path><path d="M30 6a3.9915 3.9915 0 0 0-7.8579-1H13V7h9.1421A3.9945 3.9945 0 0 0 25 9.8579V19h2V9.8579A3.9962 3.9962 0 0 0 30 6zM26 8a2 2 0 1 1 2-2A2.0023 2.0023 0 0 1 26 8zM19 25H9.8579A3.9945 3.9945 0 0 0 7 22.1421V13H5v9.1421A3.9915 3.9915 0 1 0 9.8579 27H19zM6 28a2 2 0 1 1 2-2A2.0023 2.0023 0 0 1 6 28z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>