<script>
  export let story = undefined;

  import CheckmarkFilled16 from '../../components/carbon/icons/lib/CheckmarkFilled16';
  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import { cx } from '../../components/carbon/lib';
  import StructuredListBody from '../../components/carbon/components/StructuredList/StructuredListBody.svelte';
  import StructuredListCell from '../../components/carbon/components/StructuredList/StructuredListCell.svelte';
  import StructuredListHead from '../../components/carbon/components/StructuredList/StructuredListHead.svelte';
  import StructuredListInput from '../../components/carbon/components/StructuredList/StructuredListInput.svelte';
  import StructuredListRow from '../../components/carbon/components/StructuredList/StructuredListRow.svelte';

  import StructuredList from '../../components/carbon/components/StructuredList/StructuredList.svelte';

  let selected = 'row-1-value';
</script>

<Layout>
  <div>
    <h1>Selection</h1>
      <StructuredList selection border bind:selected>
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
    <h1>Regular</h1>
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
</Layout>
