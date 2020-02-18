<script>
  export let story = undefined;

  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import RadioButton from '../../components/carbon/components/RadioButton/RadioButton.svelte';
  
</script>

<Layout>

    <RadioButton {...$$props} id="radio-1" />
</Layout>
