<script>
  export let story = undefined;

  import { cx } from '../../components/carbon/lib';
  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import Checkbox from '../../components/carbon/components/Checkbox/Checkbox.svelte';
  import CheckboxSkeleton from '../../components/carbon/components/Checkbox/Checkbox.Skeleton.svelte';

  const { labelText, indeterminate, disabled, hideLabel, wrapperClassName } = $$props;
  const checkboxProps = { labelText, indeterminate, disabled, hideLabel, wrapperClassName };

  let checked = true;
</script>

<Layout>
  {#if story === 'skeleton'}
    <div>
      <CheckboxSkeleton />
    </div>
  {:else if story === 'unchecked'}
    <fieldset class={cx('--fieldset')}>
      <legend class={cx('--label')}>Checkbox heading</legend>
      <Checkbox {...checkboxProps} id="checkbox-label-1" />
      <Checkbox {...checkboxProps} id="checkbox-label-2" />
    </fieldset>
  {:else}
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
  {/if}
</Layout>
