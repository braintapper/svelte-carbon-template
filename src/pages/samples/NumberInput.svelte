<script>
  export let story = undefined;

  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import NumberInput from '../../components/carbon/components/NumberInput/NumberInput.svelte';


  let value = $$props.value;
</script>

<Layout>

    <NumberInput
      {...$$props}
      id="slider"
      bind:value
      on:change={({ detail }) => {
        console.log('on:change', detail);
      }} />
</Layout>
