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
  data-carbon-icon="Soccer24"
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
  <circle cx="17" cy="28" r="2"></circle><path d="M7.55 17.5H15.45V19.5H7.55z" transform="rotate(-45 11.5 18.5)"></path><path d="M28 16.584L19.4143 8H6v2H18.5857l3 3L6 28.5859 7.4141 30 23 14.415 26.584 18 23 21.5859 24.4141 23 28 19.416A2.0044 2.0044 0 0 0 28 16.584zM24.5 9A3.5 3.5 0 1 1 28 5.5 3.504 3.504 0 0 1 24.5 9zm0-5A1.5 1.5 0 1 0 26 5.5 1.5017 1.5017 0 0 0 24.5 4z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>