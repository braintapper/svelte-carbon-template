<script>
  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import RadioButtonGroup from '../../components/carbon/components/RadioButtonGroup/RadioButtonGroup.svelte';
  import RadioButton from '../../components/carbon/components/RadioButton/RadioButton.svelte';
  import FormGroup from '../../components/carbon/components/FormGroup/FormGroup.svelte';

  let selected = 'default-selected';
</script>

<Layout>
  <FormGroup legendText="Radio Button heading">
    <RadioButtonGroup {...$$props.group} legend="Group Legend" bind:selected>
      <RadioButton {...$$props.radio} value="standard" id="radio-1" />
      <RadioButton {...$$props.radio} value="default-selected" id="radio-2" />
      <RadioButton {...$$props.radio} value="disabled" id="radio-3" />
    </RadioButtonGroup>
  </FormGroup>
</Layout>
