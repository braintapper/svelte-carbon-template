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
  data-carbon-icon="Strawberry24"
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
  <path d="M9 10H11V12H9zM9 14H11V16H9zM13 12H15V14H13z"></path><path d="M9 28a5.169 5.169 0 0 1-.7441-.054A5.0935 5.0935 0 0 1 4 22.8669V11.1985a7.1615 7.1615 0 0 1 6.31-7.1653 6.9607 6.9607 0 0 1 4.4643 1.0706l7.9688 4.9807a6.98 6.98 0 0 1-.6885 12.19l-10.88 5.2285A4.9765 4.9765 0 0 1 9 28zM11.002 6q-.2484 0-.5005.0241A5.1463 5.1463 0 0 0 6 11.1985V22.8669a3.0839 3.0839 0 0 0 2.5435 3.1 3.0266 3.0266 0 0 0 1.7622-.2649l10.8828-5.23a4.9807 4.9807 0 0 0 .4887-8.6958L13.7046 6.7935A4.9687 4.9687 0 0 0 11.002 6zM26 7H22a4.0045 4.0045 0 0 1-4-4V2h2V3a2.0021 2.0021 0 0 0 2 2h4z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>