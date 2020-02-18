<script>
  export let story = undefined;

  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import PasswordInput from '../../components/carbon/components/TextInput/PasswordInput.svelte';
  import TextInput from '../../components/carbon/components/TextInput/TextInput.svelte';
  import TextInputSkeleton from '../../components/carbon/components/TextInput/TextInput.Skeleton.svelte';

  let value = '';
  let type = 'password';
</script>

<Layout>
  {#if story === 'skeleton'}
    <div aria-label="loading text input" aria-live="assertive" role="status" tabindex="0">
      <TextInputSkeleton />
      <br />
      <TextInputSkeleton hideLabel />
    </div>
  {:else if story === 'password-visibility'}
    <PasswordInput {...$$props} aria-level="" />
  {:else if story === 'controlled'}
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
  {:else}
    <TextInput
      {...$$props}
      bind:value
      on:change={() => {
        console.log('change');
      }} />
  {/if}
</Layout>
