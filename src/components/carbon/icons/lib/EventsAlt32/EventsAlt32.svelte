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
  data-carbon-icon="EventsAlt32"
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
  <path d="M18 31h2V29a1.0006 1.0006 0 0 1 1-1h6a1.0006 1.0006 0 0 1 1 1v2h2V29a3.0033 3.0033 0 0 0-3-3H21a3.0033 3.0033 0 0 0-3 3zM24 25a4 4 0 1 1 4-4A4.0039 4.0039 0 0 1 24 25zm0-6a2 2 0 1 0 2 2A2.0027 2.0027 0 0 0 24 19zM2 31H4V29a1.0009 1.0009 0 0 1 1-1h6a1.0009 1.0009 0 0 1 1 1v2h2V29a3.0033 3.0033 0 0 0-3-3H5a3.0033 3.0033 0 0 0-3 3zM8 25a4 4 0 1 1 4-4A4.0042 4.0042 0 0 1 8 25zm0-6a2 2 0 1 0 2 2A2.0023 2.0023 0 0 0 8 19zM18 16h2V14a1.0009 1.0009 0 0 1 1-1h6a1.0009 1.0009 0 0 1 1 1v2h2V14a3.0033 3.0033 0 0 0-3-3H21a3.0033 3.0033 0 0 0-3 3zM24 10a4 4 0 1 1 4-4A4.0042 4.0042 0 0 1 24 10zm0-6a2 2 0 1 0 2 2A2.0023 2.0023 0 0 0 24 4zM2 16H4V14a1.0013 1.0013 0 0 1 1-1h6a1.0013 1.0013 0 0 1 1 1v2h2V14a3.0033 3.0033 0 0 0-3-3H5a3.0033 3.0033 0 0 0-3 3zM8 10a4 4 0 1 1 4-4A4.0045 4.0045 0 0 1 8 10zM8 4a2 2 0 1 0 2 2A2.002 2.002 0 0 0 8 4z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>