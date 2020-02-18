<script>
  export let story = undefined;

  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import ListItem from '../../components/carbon/components/ListItem/ListItem.svelte';
  import OrderedList from '../../components/carbon/components/OrderedList/OrderedList.svelte';
</script>

<Layout>
  <div>
    {#if story === 'nested'}
      <OrderedList>
        <ListItem>
          Unordered List level 1
          <OrderedList nested>
            <ListItem>Ordered List level 2</ListItem>
            <ListItem>
              Ordered List level 2
              <OrderedList nested>
                <ListItem>Ordered List level 2</ListItem>
                <ListItem>Ordered List level 2</ListItem>
              </OrderedList>
            </ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>Ordered List level 1</ListItem>
        <ListItem>Ordered List level 1</ListItem>
      </OrderedList>
    {:else}
      <OrderedList>
        <ListItem>Ordered List level 1</ListItem>
        <ListItem>Ordered List level 1</ListItem>
        <ListItem>Ordered List level 1</ListItem>
      </OrderedList>
    {/if}
  </div>
</Layout>
