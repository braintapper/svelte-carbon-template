<script>
  export let story = undefined;
  const { light, feedback, copyLabel, copyButtonDescription, showLessText, showMoreText } = $$props;

  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import CodeSnippet from '../../components/carbon/components/CodeSnippet/CodeSnippet.svelte';

</script>

<Layout>
  <div>
    <h1>Inline</h1>
      <CodeSnippet type="inline" {light} {feedback} {copyLabel}>{'node -v'}</CodeSnippet>
    <h1>Single Line</h1>
      <CodeSnippet
        type="single"
        {feedback}
        {copyButtonDescription}
        aria-label={$$props['aria-label']}>
        {'node -v Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, veritatis voluptate id incidunt molestiae officia possimus, quasi itaque alias, architecto hic, dicta fugit? Debitis delectus quidem explicabo vitae fuga laboriosam!'}
      </CodeSnippet>
    <h1>Multiline</h1>
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
