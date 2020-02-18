<script>
  export let story = undefined;

  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import Slider from '../../components/carbon/components/Slider/Slider.svelte';
  import SliderSkeleton from '../../components/carbon/components/Slider/Slider.Skeleton.svelte';

  let value = 50;
</script>

<Layout>
  {#if story === 'skeleton'}
    <SliderSkeleton {...$$props} />
  {:else}
    <Slider
      {...$$props}
      id="slider"
      bind:value
      on:change={({ detail }) => {
        console.log('on:change', detail);
      }} />
  {/if}
</Layout>
