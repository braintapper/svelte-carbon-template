<script>
  export let story = undefined;

  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import NumberInput from '../../components/carbon/components/NumberInput/NumberInput.svelte';
  import NumberInputSkeleton from '../../components/carbon/components/NumberInput/NumberInput.Skeleton.svelte';

  let value = $$props.value;
</script>

<Layout>
  {#if story === 'skeleton'}
    <NumberInputSkeleton {...$$props} />
  {:else}
    <NumberInput
      {...$$props}
      id="slider"
      bind:value
      on:change={({ detail }) => {
        console.log('on:change', detail);
      }} />
  {/if}
</Layout>
