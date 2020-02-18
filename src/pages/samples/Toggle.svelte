<script>
  export let story = undefined;

  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import Toggle from '../../components/carbon/components/Toggle/Toggle.svelte';


  let toggled = true;

  $: {
    console.log('toggled', toggled);
  }
</script>

<Layout>
  <h1>Toggled</h1>
    <Toggle {...$$props} id="toggle-1" bind:toggled />
<h1>Regular</h1>
    <Toggle {...$$props} id="toggle-1" />
  
</Layout>
