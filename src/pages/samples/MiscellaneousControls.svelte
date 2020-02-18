<script>
  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import CopyButton from '../../components/carbon/components/CopyButton/CopyButton.svelte';

  export let disabled = undefined;
  export let filter = undefined;
  export let slot = undefined;

  export let type = undefined;


  import Tag from '../../components/carbon/components/Tag/Tag.svelte';


  import OverflowMenu from '../../components/carbon/components/OverflowMenu/OverflowMenu.svelte';
  import OverflowMenuItem from '../../components/carbon/components/OverflowMenu/OverflowMenuItem.svelte';

  let primaryFocus = true;

  // codesnippet

  const { light, feedback, copyLabel, copyButtonDescription, showLessText, showMoreText } = $$props;
  import CodeSnippet from '../../components/carbon/components/CodeSnippet/CodeSnippet.svelte';

  // icon

  import ChevronDown16 from '../../components/carbon/icons/lib/ChevronDown16';
  import ArrowLeft20 from '../../components/carbon/icons/lib/ArrowLeft20';
  import Add24 from '../../components/carbon/icons/lib/Add24';

  import Icon from '../../components/carbon/components/Icon/Icon.svelte';


  const icons = { ChevronDown16, ArrowLeft20, Add24 };

  let iconProps = {
    icon:  'ChevronDown16',
    skeleton: false
  }  

</script>

<Layout>
  <h1>Icon</h1>

  <Icon {...iconProps} render={icons[iconProps.icon]} />

  <h1>Copy button</h1>
  <CopyButton {...$$props} />

  <h1>Tag</h1>
  <div>
    <h1>Filter</h1>
      <Tag {filter}>{slot}</Tag>
    <h1>Regular</h1>
      <Tag {disabled} {type}>{slot}</Tag>

  </div>

  <h1>Overflow Menu</h1>
  <div style="padding-left: 6rem">
    <h1>Links</h1>
      <OverflowMenu
        {...$$props.menu}
        on:close={({ detail }) => {
          console.log('close', detail);
        }}>
        <OverflowMenuItem
          {...$$props.menuItem}
          href="https://ibm.com"
          text="Option 1"
          bind:primaryFocus />
        <OverflowMenuItem
          {...$$props.menuItem}
          href="https://ibm.com"
          text="Option 2 is an example of a really long string and how we recommend handling this"
          requireTitle />
        <OverflowMenuItem {...$$props.menuItem} href="https://ibm.com" text="Option 3" disabled />
        <OverflowMenuItem {...$$props.menuItem} href="https://ibm.com" text="Option 4" />
        <OverflowMenuItem
          {...$$props.menuItem}
          href="https://ibm.com"
          text="Danger option"
          danger />
      </OverflowMenu>
    <h1>Trigger</h1>
      <OverflowMenu
        {...$$props.menu}
        on:close={({ detail }) => {
          console.log('close', detail);
        }}
        style="width: auto">
        <div slot="menu" style="padding: 0 1rem">Menu</div>
        <OverflowMenuItem {...$$props.menuItem} text="Option 1" bind:primaryFocus />
        <OverflowMenuItem
          {...$$props.menuItem}
          text="Option 2 is an example of a really long string and how we recommend handling this"
          requireTitle />
        <OverflowMenuItem {...$$props.menuItem} text="Option 3" disabled />
        <OverflowMenuItem {...$$props.menuItem} text="Option 4" />
        <OverflowMenuItem {...$$props.menuItem} text="Danger option" danger />
      </OverflowMenu>
    <h1>Default</h1>
      <OverflowMenu
        {...$$props.menu}
        on:close={({ detail }) => {
          console.log('close', detail);
        }}>
        <OverflowMenuItem {...$$props.menuItem} text="Option 1" bind:primaryFocus />
        <OverflowMenuItem
          {...$$props.menuItem}
          text="Option 2 is an example of a really long string and how we recommend handling this"
          requireTitle />
        <OverflowMenuItem {...$$props.menuItem} text="Option 3" disabled />
        <OverflowMenuItem {...$$props.menuItem} text="Option 4" />
        <OverflowMenuItem {...$$props.menuItem} text="Danger option" danger />
      </OverflowMenu>


  </div>
  <h1>Code Snippet</h1>

  <div>
    <h2>Inline</h2>
      <CodeSnippet type="inline" {light} {feedback} {copyLabel}>{'node -v'}</CodeSnippet>
    <h2>Single Line</h2>
      <CodeSnippet
        type="single"
        {feedback}
        {copyButtonDescription}
        aria-label={$$props['aria-label']}>
        {'node -v Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, veritatis voluptate id incidunt molestiae officia possimus, quasi itaque alias, architecto hic, dicta fugit? Debitis delectus quidem explicabo vitae fuga laboriosam!'}
      </CodeSnippet>
    <h2>Multiline</h2>
      <CodeSnippet type="multi" {feedback} {showLessText} {showMoreText}>
        {`@mixin grid-container {
  width: 100%;
  padding-right: padding(mobile);
  padding-left: padding(mobile);

  @include breakpoint(bp--xs--major) {
    padding-right: padding(xs);
    padding-left: padding(xs);
  }
}

$z-indexes: (
  modal : 9000,
  overlay : 8000,
  dropdown : 7000,
  header : 6000,
  footer : 5000,
  hidden : - 1,
  overflowHidden: - 1,
  floating: 10000
);`}
      </CodeSnippet>

  </div>

</Layout>
