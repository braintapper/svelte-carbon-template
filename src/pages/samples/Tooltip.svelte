<script>
  export let story = undefined;

  import OverflowMenuVertical16 from '../../components/carbon/icons/lib/OverflowMenuVertical16';
  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import { cx } from '../../components/carbon/lib';

  import Button from '../../components/carbon/components/Button/Button.svelte';
  import Tooltip from '../../components/carbon/components/Tooltip/Tooltip.svelte';
  import TooltipDefinition from '../../components/carbon/components/TooltipDefinition/TooltipDefinition.svelte';

  import Filter16 from '../../components/carbon/icons/lib/Filter16';
  import TooltipIcon from '../../components/carbon/components/TooltipIcon/TooltipIcon.svelte';

  let open = story === 'uncontrolled';
</script>

<style>
  .custom-icon-class {
    width: 10px;
    height: 4px;
    border-radius: 5px;
    background-color: red;
  }
</style>

<Layout>
  <h1>Tooltip</h1>
  <div style="margin: 3rem">
    <h2>Custom Icon</h2>
      <Tooltip
        {...$$props}
        bind:open
        on:open={() => {
          console.log('on:open');
        }}
        on:close={() => {
          console.log('on:close');
        }}>
        <div slot="icon" class="custom-icon-class" />
        <p>
          This is some tooltip text. This box shows the maximum amount of text that should appear
          inside. If more room is needed please use a modal instead.
        </p>
        <div class={cx('--tooltip__footer')}>
          <a href="/">Learn More</a>
          <Button size="small">Create</Button>
        </div>
      </Tooltip>
    <h2>Uncontrolled</h2>
      <Button
        style="padding: 15px 20px; margin: 4px 20px"
        on:click={() => {
          open = false;
        }}>
        Hide
      </Button>
      <Button
        style="padding: 15px 20px; margin: 4px 20px"
        on:click={() => {
          open = true;
        }}>
        Show
      </Button>
      <div style="padding: 15px 20px; margin: 4px 20px">
        <Tooltip {...$$props} bind:open hideIcon>
          <div slot="triggerText">My text wrapped with tooltip</div>
          Tooltip content
        </Tooltip>
      </div>
    <h2>Regular</h2>
      <Tooltip
        {...$$props}
        bind:open
        on:open={() => {
          console.log('on:open');
        }}
        on:close={() => {
          console.log('on:close');
        }}
        icon={story === 'custom icon only' ? OverflowMenuVertical16 : undefined}>
        <p>
          This is some tooltip text. This box shows the maximum amount of text that should appear
          inside. If more room is needed please use a modal instead.
        </p>
        <div class={cx('--tooltip__footer')}>
          <a href="/">Learn More</a>
          <Button size="small">Create</Button>
        </div>
      </Tooltip>

  </div>
  <h1>Tooltip Definition</h1>
  <TooltipDefinition {...$$props}>Defintion Tooltip</TooltipDefinition>
  <h1>Tooltip Icon</h1>
    <div>
      <TooltipIcon {...$$props}>
        <Filter16 />
      </TooltipIcon>
    </div>
</Layout>
