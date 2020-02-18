<script>
  let className = undefined;
  export { className as class };
  export let style = undefined;

  export let count = 4;
  export let open = true;

  import { cx } from '../../lib';
</script>

<ul
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  class={cx('--accordion', className)}
  {style}>
  <slot />
</ul>
