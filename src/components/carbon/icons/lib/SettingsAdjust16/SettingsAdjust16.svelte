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
  data-carbon-icon="SettingsAdjust16"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:keyup
  on:keydown
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"
  class={className}
  {preserveAspectRatio}
  {style}
  {id}
  {...attributes}>
  <path d="M15 4h-2.1c-.2-1.1-1.2-2-2.4-2S8.3 2.9 8.1 4H1v1h7.1c.2 1.1 1.2 2 2.4 2s2.2-.9 2.4-2H15V4zM10.5 6C9.7 6 9 5.3 9 4.5S9.7 3 10.5 3 12 3.7 12 4.5 11.3 6 10.5 6zM1 12h2.1c.2 1.1 1.2 2 2.4 2s2.2-.9 2.4-2H15v-1H7.9C7.7 9.9 6.7 9 5.5 9s-2.2.9-2.4 2H1V12zM5.5 10C6.3 10 7 10.7 7 11.5S6.3 13 5.5 13 4 12.3 4 11.5 4.7 10 5.5 10z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>