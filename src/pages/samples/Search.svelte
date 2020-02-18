<script>
  export let story = undefined;

  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import Search from '../../components/carbon/components/Search/Search.svelte';


  let value = '';

  $: {
    if (!value.length) {
      console.log('cleared');
    } else {
      console.log('value', value);
    }
  }
</script>

<Layout>
  <div>
    
      <Search {...$$props} bind:value />

  </div>
</Layout>
