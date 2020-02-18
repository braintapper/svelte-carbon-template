<script>
  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import SelectItem from '../../components/carbon/components/Select/SelectItem.svelte';
  import TimePicker from '../../components/carbon/components/TimePicker/TimePicker.svelte';
  import TimePickerSelect from '../../components/carbon/components/TimePicker/TimePickerSelect.svelte';

  let value = '';
  let select1 = 'PM';
  let select2 = 'Time zone 1';

  $: {
    console.log(value, select1, select2);
  }
</script>

<Layout>
  <TimePicker id="time-picker" {...$$props.timepicker} bind:value>
    <TimePickerSelect {...$$props.select} id="time-picker-select-1" bind:value={select1}>
      <SelectItem value="AM" text="AM" />
      <SelectItem value="PM" text="PM" />
    </TimePickerSelect>
    <TimePickerSelect {...$$props.select} id="time-picker-select-2" bind:value={select2}>
      <SelectItem value="Time zone 1" text="Time zone 1" />
      <SelectItem value="Time zone 2" text="Time zone 2" />
    </TimePickerSelect>
  </TimePicker>
</Layout>
