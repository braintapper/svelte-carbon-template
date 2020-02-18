<script>
  export let story = undefined;

  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import ProgressIndicator from '../../components/carbon/components/ProgressIndicator/ProgressIndicator.svelte';

  import ProgressStep from '../../components/carbon/components/ProgressIndicator/ProgressStep.svelte';
</script>

<Layout>
  <div>

    <h1>Interactive</h1>
      <ProgressIndicator {...$$props}>
        <ProgressStep description="Step 1: Register a onChange event" let:props>
          <div {...props}>Click me</div>
        </ProgressStep>
        <ProgressStep
          label="Really long label"
          description="The progress indicator will listen for clicks on the steps" />
        <ProgressStep
          label="Tooltip and really long label"
          description="The progress indicator will listen for clicks on the steps" />
      </ProgressIndicator>
    <h1>Regular</h1>
      <ProgressIndicator {...$$props}>
        <ProgressStep
          label="First step"
          description="Step 1: Getting started with Carbon Design System"
          secondaryLabel="Optional label" />
        <ProgressStep
          label="Second step with tooltip"
          description="Step 2: Getting started with Carbon Design System"
          secondaryLabel="Optional label" />
        <ProgressStep
          label="Third step with tooltip"
          description="Step 3: Getting started with Carbon Design System" />
        <ProgressStep
          label="Fourth step"
          description="Step 4: Getting started with Carbon Design System"
          secondaryLabel="Example invalid step"
          invalid />
        <ProgressStep
          label="Fifth step"
          description="Step 5: Getting started with Carbon Design System"
          disabled />
      </ProgressIndicator>
    
  </div>
</Layout>
