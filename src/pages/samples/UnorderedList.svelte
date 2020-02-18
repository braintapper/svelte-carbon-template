<script>
  export let story = undefined;

  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import ListItem from '../../components/carbon/components/ListItem/ListItem.svelte';
  import UnorderedList from '../../components/carbon/components/UnorderedList/UnorderedList.svelte';
</script>

<Layout>
  <div>
    {#if story === 'nested'}
      <UnorderedList>
        <ListItem>
          Unordered List level 1
          <UnorderedList nested>
            <ListItem>Unordered List level 2</ListItem>
            <ListItem>
              Unordered List level 2
              <UnorderedList nested>
                <ListItem>Unordered List level 2</ListItem>
                <ListItem>Unordered List level 2</ListItem>
              </UnorderedList>
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>Unordered List level 1</ListItem>
        <ListItem>Unordered List level 1</ListItem>
      </UnorderedList>
    {:else}
      <UnorderedList>
        <ListItem>Unordered List level 1</ListItem>
        <ListItem>Unordered List level 1</ListItem>
        <ListItem>Unordered List level 1</ListItem>
      </UnorderedList>
    {/if}
  </div>
</Layout>
