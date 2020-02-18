<script>
  export let story = undefined;

  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import TextArea from '../../components/carbon/components/TextArea/TextArea.svelte';
  import TextAreaSkeleton from '../../components/carbon/components/TextArea/TextArea.Skeleton.svelte';

  let value = '';
</script>

<Layout>
  {#if story === 'skeleton'}
    <TextAreaSkeleton {...$$props} />
  {:else}
    <TextArea {...$$props} bind:value />
  {/if}
</Layout>
