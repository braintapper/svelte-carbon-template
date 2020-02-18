<script>
  let className = undefined;
  export { className as class };
  export let stickyHeader = false;
  export let title = '';
  export let description = '';
  export let style = undefined;


</script>

<div

  {style}>
  {#if title}
    <div >
      <h4>{title}</h4>
      <p >{description}</p>
    </div>
  {/if}
  <slot />
</div>
