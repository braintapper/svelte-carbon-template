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
  data-carbon-icon="LogoVmware24"
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
  <path d="M30,16.67V14.1036c0-2.1716-2.1715-3.356-3.9482-3.356a5.9018,5.9018,0,0,0-3.356,1.3818,4.4329,4.4329,0,0,0-3.1586-1.3818,5.1967,5.1967,0,0,0-3.356,1.3818A3.34,3.34,0,0,0,13.22,10.7476a3.055,3.055,0,0,0-2.9233,1.5937L7.6925,18.2492,4.801,11.622a1.4616,1.4616,0,0,0-1.9148-.7574h0a1.4617,1.4617,0,0,0-.7518,1.9548l3.584,7.7987S6.3107,22,7.4951,22a1.67,1.67,0,0,0,1.7767-.9871c.2735-.41,2.3459-4.769,3.5944-7.41a.4969.4969,0,0,1,.9461.2132v6.551a1.6153,1.6153,0,0,0,1.4741,1.63,1.5794,1.5794,0,0,0,1.6845-1.5759V14.9919a1.678,1.678,0,1,1,3.356,0v5.4288a1.5793,1.5793,0,1,0,3.1585,0V14.9919a1.678,1.678,0,0,1,3.356,0v5.4288a1.5793,1.5793,0,0,0,3.1586,0Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>