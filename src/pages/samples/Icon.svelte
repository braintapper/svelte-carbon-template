<script>
  export let story = undefined;

  import ChevronDown16 from '../../components/carbon/icons/lib/ChevronDown16';
  import ArrowLeft20 from '../../components/carbon/icons/lib/ArrowLeft20';
  import Add24 from '../../components/carbon/icons/lib/Add24';
  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import Icon from '../../components/carbon/components/Icon/Icon.svelte';
  import IconSkeleton from '../../components/carbon/components/Icon/Icon.Skeleton.svelte';

  const icons = { ChevronDown16, ArrowLeft20, Add24 };
</script>

<Layout>
  {#if story === 'skeleton'}
    <div>
      <IconSkeleton size={16} style="margin: 2rem;" />
      <IconSkeleton size={32} style="margin: 2rem" />
    </div>
  {:else}
    <Icon {...$$props} render={icons[$$props.icon]} />
  {/if}
</Layout>
