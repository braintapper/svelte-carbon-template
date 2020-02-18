<script>
  export let story = undefined;

  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import PasswordInput from '../../components/carbon/components/TextInput/PasswordInput.svelte';
  import TextInput from '../../components/carbon/components/TextInput/TextInput.svelte';


  let value = '';
  let type = 'password';
</script>

<Layout>
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
  <h1>Regular</h1>
    <TextInput
      {...$$props}
      bind:value
      on:change={() => {
        console.log('change');
      }} />
  
</Layout>
