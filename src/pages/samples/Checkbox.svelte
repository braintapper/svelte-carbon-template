<script>
  export let story = undefined;

  import { cx } from '../../components/carbon/lib';
  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import Checkbox from '../../components/carbon/components/Checkbox/Checkbox.svelte';


  const { labelText, indeterminate, disabled, hideLabel, wrapperClassName } = $$props;
  const checkboxProps = { labelText, indeterminate, disabled, hideLabel, wrapperClassName };

  let checked = true;
</script>

<Layout>
  <h1>Unchecked</h1>
    <fieldset class={cx('--fieldset')}>
      <legend class={cx('--label')}>Checkbox heading</legend>
      <Checkbox {...checkboxProps} id="checkbox-label-1" />
      <Checkbox {...checkboxProps} id="checkbox-label-2" />
    </fieldset>
  <h1>Other</h1>
    <fieldset class={cx('--fieldset')}>
      <legend class={cx('--label')}>Checkbox heading</legend>
      <Checkbox
        {...checkboxProps}
        id="checkbox-label-1"
        bind:checked
        on:check={({ detail }) => {
          console.log('on:check', detail);
        }} />
      <Checkbox {...checkboxProps} id="checkbox-label-2" checked />
    </fieldset>
  
</Layout>
