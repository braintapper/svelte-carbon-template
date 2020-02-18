<script>
  export let story = undefined;

  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import RadioButton from '../../components/carbon/components/RadioButton/RadioButton.svelte';
  import RadioButtonSkeleton from '../../components/carbon/components/RadioButton/RadioButton.Skeleton.svelte';
</script>

<Layout>
  {#if story === 'skeleton'}
    <RadioButtonSkeleton />
  {:else}
    <RadioButton {...$$props} id="radio-1" />
  {/if}
</Layout>
