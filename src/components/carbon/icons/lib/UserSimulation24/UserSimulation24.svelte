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
  data-carbon-icon="UserSimulation24"
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
  <path d="M25.232 12.866H29.232V14.866H25.232z" transform="rotate(30 27.232 13.866)"></path><path d="M26 8H30V10H26z"></path><path d="M2.768 12.866H6.768V14.866H2.768z" transform="rotate(150 4.768 13.866)"></path><path d="M26 30H24V25a5.0059 5.0059 0 0 0-5-5H13a5.0059 5.0059 0 0 0-5 5v5H6V25a7.0082 7.0082 0 0 1 7-7h6a7.0082 7.0082 0 0 1 7 7zM16 4a5 5 0 1 1-5 5 5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7A7 7 0 0 0 16 2z"></path><path d="M25.232 3.134H29.232V5.134H25.232z" transform="rotate(-30 27.232 4.134)"></path><path d="M2 8H6V10H2z"></path><path d="M2.768 3.134H6.768V5.134H2.768z" transform="rotate(-150 4.768 4.134)"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>