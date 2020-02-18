<script>
  export let story = undefined;

  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import Tab from '../../components/carbon/components/Tabs/Tab.svelte';
  import TabContent from '../../components/carbon/components/Tabs/TabContent.svelte';
  import Tabs from '../../components/carbon/components/Tabs/Tabs.svelte';
  import TabsSkeleton from '../../components/carbon/components/Tabs/TabsSkeleton.svelte';

  const { tabProps, ...tabsProps } = $$props;

  let selected = 0;
</script>

<Layout>
  {#if story === 'skeleton'}
    <TabsSkeleton />
  {:else if story === 'container'}
    <Tabs {...tabsProps} type="container" bind:selected>
      <Tab {...tabProps} label="Tab label 1" />
      <Tab {...tabProps} label="Tab label 2" />
      <Tab {...tabProps} label="Tab label 3" />
      <div slot="content">
        <TabContent>Content 1</TabContent>
        <TabContent>Content 2</TabContent>
        <TabContent>Content 3</TabContent>
      </div>
    </Tabs>
  {:else}
    <Tabs {...tabsProps} bind:selected>
      <Tab {...tabProps} label="Tab label 1" />
      <Tab {...tabProps} label="Tab label 2" />
      <Tab {...tabProps} label="Tab label 3" disabled />
      <Tab {...tabProps} label="Tab label 4" />
      <div slot="content">
        <TabContent>Content 1</TabContent>
        <TabContent>Content 2</TabContent>
        <TabContent>Content 3</TabContent>
        <TabContent>Content 4</TabContent>
      </div>
    </Tabs>
  {/if}
</Layout>
