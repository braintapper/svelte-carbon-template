<script>
  let className = undefined;
  export { className as class };
  export let href = undefined;
  export let isCurrentPage = false;
  export let style = undefined;

  import { cx } from '../../lib';


  $: ariaCurrent = $$props['aria-current'];
</script>

<li
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  class={cx('--breadcrumb-item', isCurrentPage && ariaCurrent !== 'page' && '--breadcrumb-item--current', className)}
  {style}>
  {#if href}
    <a {href} aria-current={ariaCurrent}>
      <slot />
    </a>
  {:else}
    <slot props={{ 'aria-current': ariaCurrent, class: cx('--link') }} />
  {/if}
</li>
