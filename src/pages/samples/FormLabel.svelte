<script>
  export let story = undefined;

  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import Tooltip from '../../components/carbon/components/Tooltip/Tooltip.svelte';
  import FormLabel from '../../components/carbon/components/FormLabel/FormLabel.svelte';
</script>

<Layout>
  {#if story === 'tooltip'}
    <FormLabel>
      <Tooltip triggerText="Label">This is the content of the tooltip.</Tooltip>
    </FormLabel>
  {:else}
    <FormLabel>Label</FormLabel>
  {/if}
</Layout>
