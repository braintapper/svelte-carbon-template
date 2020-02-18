<script>
  export let story = undefined;

  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import { cx } from '../../components/carbon/lib';
  import Button from '../../components/carbon/components/Button';
  import FileUploader from '../../components/carbon/components/FileUploader/FileUploader.svelte';
  import FileUploaderButton from '../../components/carbon/components/FileUploader/FileUploaderButton.svelte';
  import FileUploaderDropContainer from '../../components/carbon/components/FileUploader/FileUploaderDropContainer.svelte';
  import FileUploaderItem from '../../components/carbon/components/FileUploader/FileUploaderItem.svelte';
  import FileUploaderSkeleton from '../../components/carbon/components/FileUploader/FileUploader.Skeleton.svelte';

  let fileUploader = undefined;
  let files = [];

  $: disabled = files.length === 0;
</script>

<Layout>
  <div>
    {#if story === 'button'}
      <FileUploaderButton {...$$props} />
    {:else if story === 'drop container'}
      <FileUploaderDropContainer
        {...$$props}
        on:add={({ detail }) => {
          console.log(detail);
        }} />
    {:else if story === 'item'}
      <FileUploaderItem
        {...$$props}
        on:delete={({ detail }) => {
          console.log(detail);
        }}
        on:click={() => {
          console.log('click');
        }} />
    {:else if story === 'uploader'}
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
          {disabled}
          on:click={fileUploader.clearFiles}>
          Clear File{files.length === 1 ? '' : 's'}
        </Button>
      </div>
    {:else if story === 'skeleton'}
      <div style="width: 500px">
        <FileUploaderSkeleton />
      </div>
    {/if}
  </div>
</Layout>
