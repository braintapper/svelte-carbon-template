<script>
  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import Checkbox from '../../components/carbon/components/Checkbox/Checkbox.svelte';
  import FormGroup from '../../components/carbon/components/FormGroup/FormGroup.svelte';
  import FileUploader from '../../components/carbon/components/FileUploader/FileUploader.svelte';
  import NumberInput from '../../components/carbon/components/NumberInput/NumberInput.svelte';
  import RadioButton from '../../components/carbon/components/RadioButton/RadioButton.svelte';
  import RadioButtonGroup from '../../components/carbon/components/RadioButtonGroup/RadioButtonGroup.svelte';
  import Button from '../../components/carbon/components/Button/Button.svelte';
  import Search from '../../components/carbon/components/Search/Search.svelte';
  import Select from '../../components/carbon/components/Select/Select.svelte';
  import SelectItem from '../../components/carbon/components/Select/SelectItem.svelte';
  import TextArea from '../../components/carbon/components/TextArea/TextArea.svelte';
  import TextInput from '../../components/carbon/components/TextInput/TextInput.svelte';
  import Toggle from '../../components/carbon/components/Toggle/Toggle.svelte';
  import Form from '../../components/carbon/components/Form/Form.svelte';
</script>

<Layout>
  <Form
    on:submit={event => {
      console.log('on:submit', event);
    }}>
    <FormGroup {...$$props}>
      <Checkbox id="checkbox-0" labelText="Checkbox Label" checked />
      <Checkbox id="checkbox-1" labelText="Checkbox Label" />
      <Checkbox id="checkbox-2" labelText="Checkbox Label" disabled />
    </FormGroup>
    <NumberInput id="number-input-1" label="Number Input" min={0} max={100} value={50} step={10} />
    <FormGroup legendText="Toggle heading">
      <Toggle id="toggle-1" />
      <Toggle id="toggle-2" disabled />
    </FormGroup>
    <FormGroup legendText="File Uploader">
      <FileUploader id="file-1" buttonLabel="Add files" labelDescription="Choose Files..." />
    </FormGroup>
    <FormGroup legendText="Radio Button heading">
      <RadioButtonGroup name="radio-button-group" defaultSelected="default-selected">
        <RadioButton id="radio-1" value="standard" labelText="Standard Radio Button" />
        <RadioButton
          id="radio-2"
          value="default-selected"
          labelText="Default Selected Radio Button" />
        <RadioButton id="radio-3" value="blue" labelText="Standard Radio Button" />
        <RadioButton id="radio-4" value="disabled" labelText="Disabled Radio Button" disabled />
      </RadioButtonGroup>
    </FormGroup>
    <FormGroup legendText="Search">
      <Search id="search-1" labelText="Search" placeholder="Search" />
    </FormGroup>
    <Select id="select-1" defaultValue="placeholder-item">
      <SelectItem disabled hidden value="placeholder-item" text="Choose an option" />
      <SelectItem value="option-1" text="Option 1" />
      <SelectItem value="option-2" text="Option 2" />
      <SelectItem value="option-3" text="Option 3" />
    </Select>
    <TextInput id="text-input-1" labelText="Text Input label" placeholder="Placeholder text" />
    <TextInput id="text-input-2" type="password" labelText="Password" required />
    <TextInput
      id="text-input-3"
      type="password"
      labelText="Password"
      invalidText="Your password must be at least 6 characters as well as contain at least one
      uppercase, one lowercase, and one number."
      required
      invalid />
    <TextArea
      id="text-area"
      labelText="Text Area label"
      placeholder="Placeholder text"
      rows={4}
      cols={50} />
    <Button type="submit">Submit</Button>
  </Form>
</Layout>
