<script>
  export let story = undefined;

  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import { cx } from '../../components/carbon/lib';
  import Button from '../../components/carbon/components/Button/Button.svelte';
  import FileUploader from '../../components/carbon/components/FileUploader/FileUploader.svelte';
  import FileUploaderButton from '../../components/carbon/components/FileUploader/FileUploaderButton.svelte';
  import FileUploaderDropContainer from '../../components/carbon/components/FileUploader/FileUploaderDropContainer.svelte';
  import FileUploaderItem from '../../components/carbon/components/FileUploader/FileUploaderItem.svelte';


  let fileUploader = undefined;
  let files = [];

  $: disabled = files.length === 0;
</script>

<Layout>
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
          {disabled}
          on:click={fileUploader.clearFiles}>
          Clear File{files.length === 1 ? '' : 's'}
        </Button>
      </div>

  </div>
</Layout>
