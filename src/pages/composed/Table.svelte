<script>
  let className = undefined;
  export { className as class };
  export let zebra = false;
  export let size = undefined;
  export let useStaticWidth = false;
  export let shouldShowBorder = false;
  export let sortable = false;
  export let stickyHeader = false;
  export let style = undefined;


</script>

{#if stickyHeader}
  <section {style}>
    <table
      >
      <slot />
    </table>
  </section>
{:else}
  <table
    {style}>
    <slot />
  </table>
{/if}
