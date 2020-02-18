<script>
  import Filter16 from '../../icons/lib/Filter16';
  import Layout from '../../internal/ui/Layout.svelte';
  import TooltipIcon from './TooltipIcon.svelte';
</script>

<Layout>
  <div>
    <TooltipIcon {...$$props}>
      <Filter16 />
    </TooltipIcon>
  </div>
</Layout>
