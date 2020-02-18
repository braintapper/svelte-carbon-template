<script>


  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import ContentSwitcher from '../../components/carbon/components/ContentSwitcher/ContentSwitcher.svelte';
  import Switch from '../../components/carbon/components/ContentSwitcher/Switch.svelte';

  let selectedIndex = 0;

  // accordion

  export let title = undefined;
  export let open = undefined;
  export let count = undefined;

  import Accordion  from '../../components/carbon/components/Accordion/Accordion.svelte';
  import AccordionItem from '../../components/carbon/components/Accordion/AccordionItem.svelte';

  // tabs
  import Tab from '../../components/carbon/components/Tabs/Tab.svelte';
  import TabContent from '../../components/carbon/components/Tabs/TabContent.svelte';
  import Tabs from '../../components/carbon/components/Tabs/Tabs.svelte';
  const { tabProps, ...tabsProps } = $$props;

  let selected = 0;

</script>

<Layout>
<h1>Content Switcher</h1>
  <h2>Selected</h2>
    <ContentSwitcher
      on:change={({ detail }) => {
        console.log('on:change', detail);
      }}>
      <Switch {...$$props} text="First section" />
      <Switch {...$$props} text="Second section" selected />
      <Switch {...$$props} text="Third section" />
    </ContentSwitcher>
  <h2>Default</h2>
    <ContentSwitcher
      bind:selectedIndex
      on:change={({ detail }) => {
        console.log('on:change', detail);
      }}>
      <Switch {...$$props} text="First section" />
      <Switch {...$$props} text="Second section" />
      <Switch {...$$props} text="Third section" />
    </ContentSwitcher>


<h1>Accordion</h1>

<Accordion>
  <AccordionItem {title} {open}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </AccordionItem>
  <AccordionItem title="Section 2 title">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </AccordionItem>
  <AccordionItem title="Section 3 title">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </AccordionItem>
  <AccordionItem>
    <div slot="title">
      Section 4 title (
      <em>the title can be a node</em>
      )
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </AccordionItem>
</Accordion>

  <h1>Tabs</h1>
  <h2>Container</h2>
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
  <h2>Regular</h2>
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


</Layout>
