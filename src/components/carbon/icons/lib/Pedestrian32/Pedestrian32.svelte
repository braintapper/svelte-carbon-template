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
  data-carbon-icon="Pedestrian32"
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
  <path d="M21.6772,14l-1.2456-3.1143A2.9861,2.9861,0,0,0,17.646,9H13.5542a3.0018,3.0018,0,0,0-1.5439.4277L7,12.4336V18H9V13.5664l3-1.8V23.6973L8.5383,28.8906,10.2024,30,14,24.3027V11h3.646a.9949.9949,0,0,1,.9282.6289L20.3228,16H26V14Z"></path><path d="M17.051 18.316L19 24.162 19 30 21 30 21 23.838 18.949 17.684 17.051 18.316zM16.5 8A3.5 3.5 0 1 1 20 4.5 3.5042 3.5042 0 0 1 16.5 8zm0-5A1.5 1.5 0 1 0 18 4.5 1.5017 1.5017 0 0 0 16.5 3z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>