<script>


  import Layout from '../../components/carbon/internal/ui/Layout.svelte';









  //datatables


  import DataTable from '../../components/carbon/components/DataTable/DataTable.svelte';
  import Table from '../../components/carbon/components/DataTable/Table.svelte';
  import TableBody from '../../components/carbon/components/DataTable/TableBody.svelte';
  import TableCell from '../../components/carbon/components/DataTable/TableCell.svelte';
  import TableContainer from '../../components/carbon/components/DataTable/TableContainer.svelte';
  import TableHead from '../../components/carbon/components/DataTable/TableHead.svelte';
  import TableHeader from '../../components/carbon/components/DataTable/TableHeader.svelte';
  import TableRow from '../../components/carbon/components/DataTable/TableRow.svelte';

  let rows = [
    {
      id: 'a',
      name: 'Load Balancer 3',
      protocol: 'HTTP',
      port: 3000,
      rule: 'Round robin',
      attached_groups: 'Kevins VM Groups',
      status: 'Disabled'
    },
    {
      id: 'b',
      name: 'Load Balancer 1',
      protocol: 'HTTP',
      port: 443,
      rule: 'Round robin',
      attached_groups: 'Maureens VM Groups',
      status: 'Starting'
    },
    {
      id: 'c',
      name: 'Load Balancer 2',
      protocol: 'HTTP',
      port: 80,
      rule: 'DNS delegation',
      attached_groups: 'Andrews VM Groups',
      status: 'Active'
    },
    {
      id: 'd',
      name: 'Load Balancer 6',
      protocol: 'HTTP',
      port: 3000,
      rule: 'Round robin',
      attached_groups: 'Marcs VM Groups',
      status: 'Disabled'
    },
    {
      id: 'e',
      name: 'Load Balancer 4',
      protocol: 'HTTP',
      port: 443,
      rule: 'Round robin',
      attached_groups: 'Mels VM Groups',
      status: 'Starting'
    },
    {
      id: 'f',
      name: 'Load Balancer 5',
      protocol: 'HTTP',
      port: 80,
      rule: 'DNS delegation',
      attached_groups: 'Ronjas VM Groups',
      status: 'Active'
    }
  ];
  let headers = [
    { key: 'name', value: 'Name' },
    { key: 'protocol', value: 'Protocol' },
    { key: 'port', value: 'Port' },
    { key: 'rule', value: 'Rule' },
    { key: 'attached_groups', value: 'Attached Groups' },
    { key: 'status', value: 'Status' }
  ];
  let sortable = true;

  let sortableProps = {
    story: 'sortable',
    title: 'Optional DataTable title (title)',
    description: 'Optional DataTable description (description)',
    zebra: true,
    size: 'compact',
      //{ compact: 'compact', short: 'short', tall: 'tall', none: null },

    stickyHeader: true
  }
  let defaultProps = {
    story: 'sortable',
    title: 'Optional DataTable title (title)',
    description: 'Optional DataTable description (description)',
    zebra: true,
    size: 'compact',
      //{ compact: 'compact', short: 'short', tall: 'tall', none: null },

    stickyHeader: true
  }



  // structured list

  import CheckmarkFilled16 from '../../components/carbon/icons/lib/CheckmarkFilled16';

  import { cx } from '../../components/carbon/lib';
  import StructuredListBody from '../../components/carbon/components/StructuredList/StructuredListBody.svelte';
  import StructuredListCell from '../../components/carbon/components/StructuredList/StructuredListCell.svelte';
  import StructuredListHead from '../../components/carbon/components/StructuredList/StructuredListHead.svelte';
  import StructuredListInput from '../../components/carbon/components/StructuredList/StructuredListInput.svelte';
  import StructuredListRow from '../../components/carbon/components/StructuredList/StructuredListRow.svelte';

  import StructuredList from '../../components/carbon/components/StructuredList/StructuredList.svelte';

  let selectedStructured = 'row-1-value';

  // tile
  import ClickableTile from '../../components/carbon/components/Tile/ClickableTile.svelte';
  import ExpandableTile from '../../components/carbon/components/Tile/ExpandableTile.svelte';
  import RadioTile from '../../components/carbon/components/Tile/RadioTile.svelte';
  import SelectableTile from '../../components/carbon/components/Tile/SelectableTile.svelte';
  import Tile from '../../components/carbon/components/Tile/Tile.svelte';
  import TileGroup from '../../components/carbon/components/Tile/TileGroup.svelte';

  const radioTiles = [
    { value: 'standard', id: 'tile-1', labelText: 'Selectable Tile' },
    { value: 'default-selected', id: 'tile-2', labelText: 'Selectable Tile' },
    { value: 'selected', id: 'tile-3', labelText: 'Selectable Tile' }
  ];

  let selected = radioTiles[1].value;

  let selectedTile1 = false;

</script>

<Layout>
  <h1>Datatable</h1>

  <h2>Sortable</h2>
    <DataTable
      bind:sortable
      title={sortableProps.title}
      description={sortableProps.description}
      zebra={sortableProps.zebra}
      size={sortableProps.size}
      stickyHeader={sortableProps.stickyHeader}
      on:click={({ detail }) => {
        console.log('on:click', detail);
      }}
      on:click:header={({ detail }) => {
        console.log('on:click:header', detail);
      }}
      on:click:row={({ detail }) => {
        console.log('on:click:row', detail);
      }}
      on:click:cell={({ detail }) => {
        console.log('on:click:cell', detail);
      }}
      {rows}
      {headers} />
  <h2>Default</h2>
    <DataTable
      title={defaultProps.title}
      description={defaultProps.description}
      zebra={defaultProps.zebra}
      size={defaultProps.size}
      stickyHeader={$$props.stickyHeader}
      on:click={({ detail }) => {
        console.log('on:click', detail);
      }}
      on:click:header={({ detail }) => {
        console.log('on:click:header', detail);
      }}
      on:click:row={({ detail }) => {
        console.log('on:click:row', detail);
      }}
      on:click:cell={({ detail }) => {
        console.log('on:click:cell', detail);
      }}
      {rows}
      {headers} />


  <h1>Structured List</h1>
  <div>
    <h2>Selection</h2>
      <StructuredList selection border bind:selectedStructured>
        <StructuredListHead>
          <StructuredListRow head>
            <StructuredListCell head>ColumnA</StructuredListCell>
            <StructuredListCell head>ColumnB</StructuredListCell>
            <StructuredListCell head>ColumnC</StructuredListCell>
            <StructuredListCell head>{''}</StructuredListCell>
          </StructuredListRow>
        </StructuredListHead>
        <StructuredListBody>
          {#each [0, 1, 2, 3] as item, i (item)}
            <StructuredListRow label for={`row-${i}`}>
              <StructuredListCell>Row {i}</StructuredListCell>
              <StructuredListCell>Row {i}</StructuredListCell>
              <StructuredListCell>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id
                tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla
                ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.
              </StructuredListCell>
              <StructuredListInput
                id={`row-${i}`}
                value={`row-${i}-value`}
                title={`row-${i}-title`}
                name={`row-${i}-name`} />
              <StructuredListCell>
                <CheckmarkFilled16
                  class={cx('--structured-list-svg')}
                  aria-label="select an option"
                  title="select an option" />
              </StructuredListCell>
            </StructuredListRow>
          {/each}
        </StructuredListBody>
      </StructuredList>
    <h2>Regular</h2>
      <StructuredList>
        <StructuredListHead>
          <StructuredListRow head>
            <StructuredListCell head>ColumnA</StructuredListCell>
            <StructuredListCell head>ColumnB</StructuredListCell>
            <StructuredListCell head>ColumnC</StructuredListCell>
          </StructuredListRow>
        </StructuredListHead>
        <StructuredListBody>
          <StructuredListRow>
            <StructuredListCell noWrap>Row 1</StructuredListCell>
            <StructuredListCell>Row 1</StructuredListCell>
            <StructuredListCell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id
              tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut
              cursus dolor. Pellentesque vulputate nisl a porttitor interdum.
            </StructuredListCell>
          </StructuredListRow>
          <StructuredListRow>
            <StructuredListCell noWrap>Row 2</StructuredListCell>
            <StructuredListCell>Row 2</StructuredListCell>
            <StructuredListCell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id
              tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut
              cursus dolor. Pellentesque vulputate nisl a porttitor interdum.
            </StructuredListCell>
          </StructuredListRow>
        </StructuredListBody>
      </StructuredList>

  </div>

  <h1>Tiles</h1>
  <div>
    <h2>Filter</h2>
      <Tile {...$$props} />
    <h2>Clickable</h2>
      <ClickableTile {...$$props}>Clickable Tile</ClickableTile>
    <h2>Multiselect</h2>
      <div role="group" aria-label="selectable tiles">
        <SelectableTile
          {...$$props}
          id="tile-1"
          name="tiles"
          bind:selected={selectedTile1}
          on:select={({ detail }) => {
            console.log('on:select', detail);
          }}
          on:deselect={({ detail }) => {
            console.log('on:deselect', detail);
          }}>
          Multi-select Tile
        </SelectableTile>
        <SelectableTile {...$$props} id="tile-2" name="tiles">Multi-select Tile</SelectableTile>
        <SelectableTile {...$$props} id="tile-3" name="tiles">Multi-select Tile</SelectableTile>
      </div>
    <h2>Single Select<h2>
      <TileGroup legend="Selectable Tile Group" bind:selected>
        {#each radioTiles as { value, id, labelText }, i (id)}
          <RadioTile {...$$props} {value} {id} {labelText}>Selectable Tile</RadioTile>
        {/each}
      </TileGroup>
    <h2>Expandable</h2>
      <ExpandableTile {...$$props}>
        <div slot="above" style="height: 200px">Above the fold content here</div>
        <div slot="below" style="height: 400px">Below the fold content here</div>
      </ExpandableTile>
    <h2>Default</h2>
      <Tile {...$$props}>Default Tile</Tile>
  </div>

</Layout>
