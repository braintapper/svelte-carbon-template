<script>
  let className = undefined;
  export { className as class };
  export let feedback = 'Copied!';
  export let feedbackTimeout = 2000;
  export let iconDescription = 'Copy to clipboard';
  export let style = undefined;

  import { afterUpdate, onDestroy } from 'svelte';
  import Copy16 from 'carbon-icons-svelte/lib/Copy16';

  let animation = undefined;
  let timeoutId = undefined;

  afterUpdate(() => {
    if (animation === 'fade-in') {
      timeoutId = window.setTimeout(() => {
        animation = 'fade-out';
      }, feedbackTimeout);
    }
  });

  onDestroy(() => {
    window.clearTimeout(timeoutId);
    timeoutId = undefined;
  });
</script>

<button
  type="button"
  tabindex="0"
  aria-label={iconDescription}
  title={iconDescription}
  on:click
  on:click={() => {
    animation = 'fade-in';
  }}
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:animationend
  on:animationend={({ animationName }) => {
    if (animationName === 'hide-feedback') {
      animation = undefined;
    }
  }}
  {style}>
  <span >{feedback}</span>
  <Copy16 />
</button>
