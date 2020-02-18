<script>
  export let story = undefined;

  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import TextArea from '../../components/carbon/components/TextArea/TextArea.svelte';


  let value = '';
</script>

<Layout>

    <TextArea {...$$props} bind:value />

</Layout>
