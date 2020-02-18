<script>
  export let disabled = undefined;
  export let filter = undefined;
  export let slot = undefined;
  export let story = undefined;
  export let type = undefined;

  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import Tag from '../../components/carbon/components/Tag/Tag.svelte';

</script>

<Layout>
  <div>
    <h1>Filter</h1>
      <Tag {filter}>{slot}</Tag>
    <h1>Regular</h1>
      <Tag {disabled} {type}>{slot}</Tag>
    
  </div>
</Layout>
