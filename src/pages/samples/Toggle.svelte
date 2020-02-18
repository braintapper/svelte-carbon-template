<script>
  export let story = undefined;

  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import Toggle from '../../components/carbon/components/Toggle/Toggle.svelte';
  import ToggleSkeleton from '../../components/carbon/components/Toggle/Toggle.Skeleton.svelte';

  let toggled = true;

  $: {
    console.log('toggled', toggled);
  }
</script>

<Layout>
  {#if story === 'toggled'}
    <Toggle {...$$props} id="toggle-1" bind:toggled />
  {:else if story === 'skeleton'}
    <ToggleSkeleton />
  {:else}
    <Toggle {...$$props} id="toggle-1" />
  {/if}
</Layout>
