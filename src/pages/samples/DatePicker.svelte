<script>
  export let story = undefined;

  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import DatePicker from '../../components/carbon/components/DatePicker/DatePicker.svelte';
  import DatePickerInput from '../../components/carbon/components/DatePicker/DatePickerInput.svelte';
  

  let datePickerType = 'simple';
  let value = '';
</script>

<Layout>

  <h1>Single</h1>
    <div>
      <DatePicker
        {...$$props.datePicker}
        bind:value
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
          value = '12/12/2020';
        }}
        style="margin-top: 1rem">
        Set date to 12/12/2020
      </button>
    </div>
  <h1>Range</h1>
    <DatePicker {...$$props.datePicker} bind:value datePickerType="range">
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
      bind:value
      on:change={({ detail }) => {
        console.log('on:change', detail);
      }}>
      <DatePickerInput {...$$props.datePickerInput} />
    </DatePicker>

</Layout>
