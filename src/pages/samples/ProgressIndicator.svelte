<script>


  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import ProgressIndicator from '../../components/carbon/components/ProgressIndicator/ProgressIndicator.svelte';

  import ProgressStep from '../../components/carbon/components/ProgressIndicator/ProgressStep.svelte';

  // inline loading
  export let status = undefined;
  export let iconDescription = undefined;
  export let description = undefined;
  export let successDelay = undefined;
  import InlineLoading from '../../components/carbon/components/InlineLoading/InlineLoading.svelte';
  import Button from '../../components/carbon/components/Button/Button.svelte';
  const props = { status, iconDescription, description, successDelay };

  let isSubmitting = false;
  let success = false;
  let ariaLive = 'off';
  let loadingDescription = 'Submitting...';

  function handleSubmit() {
    isSubmitting = true;
    ariaLive = 'assertive';

    setTimeout(() => {
      isSubmitting = false;
      loadingDescription = 'Submitted!';
      success = true;
      setTimeout(() => {
        success = false;
        isSubmitting = false;
        loadingDescription = 'Submitting...';
        ariaLive = 'off';
      }, 1500);
    }, 2000);
  }

  $: disabled = isSubmitting || success;


  import Loading from '../../components/carbon/components/Loading/Loading.svelte';
</script>

<Layout>
  <div>
  <h1>Progress Indicator</h1>
    <h2>Interactive</h2>
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
    <h2>Regular</h2>
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



  <h1>Inline Loading</h1>
  <h2>UX EXample</h2>
    <div style="display: flex; width: 300px">
      <Button kind="secondary" {disabled}>Cancel</Button>
      {#if disabled}
        <InlineLoading
          style="margin-left: 1rem;"
          description={loadingDescription}
          status={success ? 'finished' : 'active'}
          aria-live={ariaLive} />
      {:else}
        <Button on:click={handleSubmit}>Submit</Button>
      {/if}
    </div>
  <h2>Default</h2>
    <InlineLoading {...props} />


  <h1>Loading</h1>




</Layout>
<Layout>
  <Loading {...$$props} />
</Layout>
