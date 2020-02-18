<script>
  export let story = undefined;

  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import Pagination from '../../components/carbon/components/Pagination/Pagination.svelte';

</script>

<Layout>
  <div style="width: 800px;">
    <h1>Multiple</h1>
      <Pagination {...$$props}>Pagination</Pagination>
      <Pagination {...$$props}>Pagination</Pagination>
    <h1>Single</h1>
      <Pagination {...$$props}>Pagination</Pagination>
    
  </div>
</Layout>
