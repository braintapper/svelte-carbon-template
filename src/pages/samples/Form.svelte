<script>
  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import Checkbox from '../../components/carbon/components/Checkbox/Checkbox.svelte';


  import FormGroup from '../../components/carbon/components/FormGroup/FormGroup.svelte';
  import FormItem from '../../components/carbon/components/FormItem/FormItem.svelte';
  import Tooltip from '../../components/carbon/components/Tooltip/Tooltip.svelte';
  import FormLabel from '../../components/carbon/components/FormLabel/FormLabel.svelte';

  import FileUploader from '../../components/carbon/components/FileUploader/FileUploader.svelte';
  import FileUploaderButton from '../../components/carbon/components/FileUploader/FileUploaderButton.svelte';
  import FileUploaderDropContainer from '../../components/carbon/components/FileUploader/FileUploaderDropContainer.svelte';
  import FileUploaderItem from '../../components/carbon/components/FileUploader/FileUploaderItem.svelte';


  import NumberInput from '../../components/carbon/components/NumberInput/NumberInput.svelte';
  import RadioButton from '../../components/carbon/components/RadioButton/RadioButton.svelte';
  import RadioButtonGroup from '../../components/carbon/components/RadioButtonGroup/RadioButtonGroup.svelte';
  import Button from '../../components/carbon/components/Button/Button.svelte';
  import Search from '../../components/carbon/components/Search/Search.svelte';
  import Select from '../../components/carbon/components/Select/Select.svelte';
  import SelectItem from '../../components/carbon/components/Select/SelectItem.svelte';
  import SelectItemGroup from '../../components/carbon/components/Select/SelectItemGroup.svelte';
  import TextArea from '../../components/carbon/components/TextArea/TextArea.svelte';
  import PasswordInput from '../../components/carbon/components/TextInput/PasswordInput.svelte';
  import TextInput from '../../components/carbon/components/TextInput/TextInput.svelte';
  import Toggle from '../../components/carbon/components/Toggle/Toggle.svelte';
  import ToggleSmall from '../../components/carbon/components/ToggleSmall/ToggleSmall.svelte';
  import Form from '../../components/carbon/components/Form/Form.svelte';
  import ComboBox from '../../components/carbon/components/ComboBox/ComboBox.svelte';
  import MultiSelect from '../../components/carbon/components/MultiSelect/MultiSelect.svelte';



  import DatePicker from '../../components/carbon/components/DatePicker/DatePicker.svelte';
  import DatePickerInput from '../../components/carbon/components/DatePicker/DatePickerInput.svelte';

  import Dropdown from '../../components/carbon/components/Dropdown/Dropdown.svelte';


  import Slider from '../../components/carbon/components/Slider/Slider.svelte';

  import TimePicker from '../../components/carbon/components/TimePicker/TimePicker.svelte';
  import TimePickerSelect from '../../components/carbon/components/TimePicker/TimePickerSelect.svelte';


  import { cx } from '../../components/carbon/lib';
  import Add16 from '../../components/carbon/icons/lib/Add16';

  let selected = 'placeholder-item';
  let value = '';
  let type = 'password';

  // combobox
  let items = [
    { id: 'option-0', text: 'Option 1' },
    { id: 'option-1', text: 'Option 2' },
    { id: 'option-2', text: 'Option 3' },
    { id: 'option-3', text: 'Option 4' },
    {
      id: 'option-4',
      text: 'An example option that is really long to show what should be done to handle long text'
    }
  ];

  let toggled = false;
  let comboboxvalue = undefined;
  let selectedIndex = -1;

  function shouldFilterItem(item, value) {
    if (!toggled || !value) {
      return true;
    }

    return item.text.toLowerCase().includes(value.toLowerCase());
  }
  // multiselect
  let selectedIds = [];

  // buttons


  const {
    kind,
    disabled,
    size,
    iconDescription,
    small,
    tooltipPosition,
    tooltipAlignment
  } = $$props;

  const regularProps = {
    kind,
    disabled,
    size,
    iconDescription,
    small
  };

  const iconOnlyProps = {
    kind,
    disabled,
    size,
    icon: Add16,
    iconDescription,
    tooltipPosition,
    tooltipAlignment
  };

  const setProps = { disabled, small, size, iconDescription };

  // fileuploader
  let fileUploader = undefined;
  let files = [];

  $: filedisabled = (files.length == 0);

  // datepicker

  let datePickerType = 'simple';
  let datePickerValue = '';

  //dropdown



  let dropdownItems = [
    { id: 'option-0', text: 'Option 1' },
    { id: 'option-1', text: 'Option 2' },
    { id: 'option-2', text: 'Option 3' },
    { id: 'option-3', text: 'Option 4' }
  ];

  let dropdownSelectedIndex = -1;

  // slider
  let sliderValue = 50;

  // timepicker
  let timeValue = '';
  let select1 = 'PM';
  let select2 = 'Time zone 1';

  $: {
    console.log(timeValue, select1, select2);
  }
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

    <h1>File Uploader</h1>
    <FormGroup legendText="File Uploader">


      <FileUploader id="file-1" buttonLabel="Add files" labelDescription="Choose Files..." />

      <div>
        <h1>Button</h1>
          <FileUploaderButton {...$$props} />
        <h1>Drop Container</h1>
          <FileUploaderDropContainer
            {...$$props}
            on:add={({ detail }) => {
              console.log(detail);
            }} />
        <h1>Item</h1>
          <FileUploaderItem
            {...$$props}
            on:delete={({ detail }) => {
              console.log(detail);
            }}
            on:click={() => {
              console.log('click');
            }} />
        <h1>Uploader</h1>
          <div class={cx('--file__container')}>
            <FileUploader
              bind:this={fileUploader}
              {...$$props}
              bind:files
              on:add={({ detail }) => {
                console.log('add', detail);
              }}
              on:remove={({ detail }) => {
                console.log('remove', detail);
              }} />
            <Button
              kind="secondary"
              size="small"
              style="margin-top: 1rem"
              {filedisabled}
              on:click={fileUploader.clearFiles}>
              Clear File{files.length === 1 ? '' : 's'}
            </Button>
          </div>

      </div>

    </FormGroup>


<FormGroup legendText="FormItem and FormLabel">

    <FormLabel>
      <Tooltip triggerText="Label">This is the content of the tooltip.</Tooltip>
    </FormLabel>
  <FormItem>
    <NumberInput id="number-input-1" />
  </FormItem>

  <FormLabel>Label</FormLabel>

  <FormItem>
    <NumberInput id="number-input-1" />
  </FormItem>
</FormGroup>

<FormGroup legendText="time picker">
  <TimePicker id="time-picker" {...$$props.timepicker} bind:timeValue>
    <TimePickerSelect {...$$props.select} id="time-picker-select-1" bind:value={select1}>
      <SelectItem value="AM" text="AM" />
      <SelectItem value="PM" text="PM" />
    </TimePickerSelect>
    <TimePickerSelect {...$$props.select} id="time-picker-select-2" bind:value={select2}>
      <SelectItem value="Time zone 1" text="Time zone 1" />
      <SelectItem value="Time zone 2" text="Time zone 2" />
    </TimePickerSelect>
  </TimePicker>
</FormGroup>


<FormGroup legendText="Dropdown">

  <h1>Dropdown</h1>
    <p>Currently, this component does not support dropdownItems as slots.</p>
    <p>
      <code>dropdownItems</code>
      must be an array of objects; mandatory fields are `id` and `text`.
    </p>
    <pre style="margin-top: 1rem;">
      <code>{'dropdownItems = Array<{ id: string; text: string; }>'}</code>
    </pre>
    <div style="margin-top: 2rem; margin-bottom: 2rem;">
      <Button
        size="small"
        on:click={() => {
          dropdownSelectedIndex = dropdownSelectedIndex > -1 ? -1 : 1;
        }}>
        {dropdownSelectedIndex > -1 ? 'Clear selected item' : "Set item to 'Option 2'"}
      </Button>
    </div>
    <div style="width: 300px">
      <Dropdown {...$$props} bind:dropdownSelectedIndex {dropdownItems} />
    </div>

</FormGroup>
    <FormGroup legendText="DatePicker">


      <h1>Single</h1>
        <div>
          <DatePicker
            {...$$props.datePicker}
            bind:datePickerValue
            datePickerType="single"
            on:change={({ detail }) => {
              console.log('change', detail);
            }}>
            <DatePickerInput
              {...$$props.datePickerInput}
              on:close={() => {
                console.log('on:close');
              }}
              on:input={() => {
                console.log('on:input');
              }} />
          </DatePicker>
          <button
            on:click|preventDefault={() => {
              datePickerValue = '12/12/2020';
            }}
            style="margin-top: 1rem">
            Set date to 12/12/2020
          </button>
        </div>
      <h1>Range</h1>
        <DatePicker {...$$props.datePicker} bind:datePickerValue datePickerType="range">
          <DatePickerInput
            {...$$props.datePickerInput}
            id="date-picker-input-id-start"
            labelText="Start date" />
          <DatePickerInput
            {...$$props.datePickerInput}
            id="date-picker-input-id-end"
            labelText="End date" />
        </DatePicker>
      <h1>Standard</h1>
        <DatePicker
          {...$$props.datePicker}
          bind:datePickerType
          bind:datePickerValue
          on:change={({ detail }) => {
            console.log('on:change', detail);
          }}>
          <DatePickerInput {...$$props.datePickerInput} />
        </DatePicker>

    </FormGroup>


    <FormGroup legendText="Slider">
    <Slider
      {...$$props}
      id="slider"
      bind:sliderValue
      on:change={({ detail }) => {
        console.log('on:change', detail);
      }} />

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
      <Select {...$$props.select} id="select-2" bind:selected>
        <SelectItem value="placeholder-item" text="Choose an option" disabled hidden />
        <SelectItemGroup {...$$props.group} label="Category 1">
          <SelectItem value="option-1" text="Option 1" />
          <SelectItem value="option-2" text="Option 2" />
        </SelectItemGroup>
        <SelectItemGroup {...$$props.group} label="Category 2">
          <SelectItem value="option-3" text="Option 3" />
          <SelectItem value="option-4" text="Option 4" />
        </SelectItemGroup>
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

  <h1>Password Visibility</h1>

    <PasswordInput {...$$props} aria-level="" />
  <h1>Password Controlled</h1>
    <PasswordInput {...$$props} {type} />
    <div>
      <button
        on:click={() => {
          type = 'text';
        }}>
        Show password
      </button>
      <button
        on:click={() => {
          type = 'password';
        }}>
        Hide password
      </button>
    </div>

    <Button type="submit">Submit</Button>
    <h1>Combobox</h1>
  <p>Currently, this component does not support items as slots.</p>
  <p>
    <code>items</code>
    must be an array of objects; mandatory fields are `id` and `text`.
  </p>
  <pre style="margin-top: 1rem;">
    <code>{'items = Array<{ id: string; text: string; }>'}</code>
  </pre>
  <div style="margin-top: 2rem;">
    <ToggleSmall labelText="Enable filtering" bind:toggled />
    <Button
      size="small"
      on:click={() => {
        selectedIndex = 1;
      }}>
      Set item to 'Option 2'
    </Button>
  </div>
  <div style="width: 300px; margin-top: 2rem;">
    <ComboBox {...$$props} id="combobox" bind:value={comboboxvalue} bind:selectedIndex {items} {shouldFilterItem} />
  </div>
  <h2>Multiselect</h2>
    <Button
      size="small"
      on:click={() => {
        selectedIds = selectedIds.length > 0 ? [] : [items[1].id, items[2].id];
      }}>
      {selectedIds.length > 0 ? 'Clear' : 'Set initial'} selected items
    </Button>
    <MultiSelect
      {...$$props}
      id="multiselect"
      placeholder="Filter..."
      bind:selectedIds
      bind:items
      bind:value />
    <h1>Buttons</h1>

  <div>
      <h1>Inline</h1>
      <Button />
    <h1>icon-only buttons</h1>
      <Button {...iconOnlyProps} />
    <h1>set of buttons</h1>
      <div class={cx('--btn-set')}>
        <Button kind="secondary" {...setProps}>Secondary button</Button>
        <Button kind="primary" {...setProps}>Primary button</Button>
      </div>
    <h1>Regular</h1>
      <Button {...regularProps}>Button</Button>
      &nbsp;
      <Button {...regularProps} href="#">Link</Button>
      &nbsp;
      <Button {...regularProps} as let:props>
        <p {...props}>Element</p>
      </Button>
      &nbsp;
      <Button {...regularProps} as let:props>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a {...props}>Custom component</a>
      </Button>

  </div>
  </Form>
</Layout>
