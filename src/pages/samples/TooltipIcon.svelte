<script>
  import Filter16 from '../../components/carbon/icons/lib/Filter16';
  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import TooltipIcon from '../../components/carbon/components/TooltipIcon/TooltipIcon.svelte';
</script>

<Layout>
  <div>
    <TooltipIcon {...$$props}>
      <Filter16 />
    </TooltipIcon>
  </div>
</Layout>
