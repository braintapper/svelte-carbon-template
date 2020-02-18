<script>
  export let disabled = undefined;
  export let filter = undefined;
  export let slot = undefined;
  export let story = undefined;
  export let type = undefined;

  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import Tag from '../../components/carbon/components/Tag/Tag.svelte';
  import TagSkeleton from '../../components/carbon/components/Tag/Tag.Skeleton.svelte';
</script>

<Layout>
  <div>
    {#if story === 'filter'}
      <Tag {filter}>{slot}</Tag>
    {:else if story === 'skeleton'}
      <TagSkeleton />
    {:else}
      <Tag {disabled} {type}>{slot}</Tag>
    {/if}
  </div>
</Layout>
