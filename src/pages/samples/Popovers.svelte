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


  // notification
  import InlineNotification from '../../components/carbon/components/Notification/InlineNotification.svelte';
  import NotificationActionButton from '../../components/carbon/components/Notification/NotificationActionButton.svelte';
  import ToastNotification from '../../components/carbon/components/Notification/ToastNotification.svelte';


  // modal

  // div opacity is not 1, check the component
  import Modal from '../../components/carbon/components/Modal/Modal.svelte';

  let modalopen = false;
  let modalProps =   {
    open: false,
    passiveModal: false,
    danger: false,
    shouldSubmitOnEnter: false,
    focusTrap: false,
    hasScrollingContent: true,
    modalHeading: 'Modal heading (modalHeading)',
    modalLabel: 'Label',
    modalAriaLabel: 'ARIA label, used only if modalLabel not provided (modalAriaLabel)',
    primaryButtonText: 'Primary Button',
    secondaryButtonText: 'Secondary Button',
    selectorPrimaryFocus: '[data-modal-primary-focus]',
    // size: select('Size (size)', sizes), xs, sm, lg
    iconDescription: 'Close the modal'
  }

  // composed modal
    const { modalBody } = $$props;

    import ComposedModal from '../../components/carbon/components/ComposedModal/ComposedModal.svelte';
    import ModalHeader from '../../components/carbon/components/ComposedModal/ModalHeader.svelte';
    import ModalBody from '../../components/carbon/components/ComposedModal/ModalBody.svelte';
    import ModalFooter from '../../components/carbon/components/ComposedModal/ModalFooter.svelte';

    let open = false;



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

<div>
  <h1>Notification</h1>
  <h2>Inline</h2>
    <InlineNotification {...$$props}>
      <div slot="actions">
        <NotificationActionButton>{$$props.action}</NotificationActionButton>
      </div>
    </InlineNotification>
  <h2>Toast</h2>
    <ToastNotification {...$$props} style="min-width: 30rem; margin-bottom: .5rem" />
</div>

<h1>Modal</h1>


<div>
  <div>
    <Button
      on:click={() => {
        open = true;
      }}>
      Launch modal
    </Button>
    <div>{open}</div>
  </div>

  <Modal
    {...modalProps}
    bind:open
    on:click:button--secondary={() => {
      console.log('click button secondary');
    }}
    on:open={() => {
      console.log('open');
    }}
    on:close={() => {
      console.log('close');
    }}
    on:submit={() => {
      console.log('submit');
    }}>
    <p>
      This component supports two-way binding by default. Please see ComposedModal for piecemeal
      functionality.
    </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus
        consequat augue vitae tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit
        iaculis, ultrices condimentum risus. Nulla facilisi. Etiam venenatis molestie tellus.
        Quisque consectetur non risus eu rutrum.{' '}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus
        consequat augue vitae tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit
        iaculis, ultrices condimentum risus. Nulla facilisi. Etiam venenatis molestie tellus.
        Quisque consectetur non risus eu rutrum.{' '}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus
        consequat augue vitae tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit
        iaculis, ultrices condimentum risus. Nulla facilisi. Etiam venenatis molestie tellus.
        Quisque consectetur non risus eu rutrum.{' '}
      </p>
      <h3>Lorem ipsum</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus
        consequat augue vitae tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit
        iaculis, ultrices condimentum risus. Nulla facilisi. Etiam venenatis molestie tellus.
        Quisque consectetur non risus eu rutrum.{' '}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus
        consequat augue vitae tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit
        iaculis, ultrices condimentum risus. Nulla facilisi. Etiam venenatis molestie tellus.
        Quisque consectetur non risus eu rutrum.{' '}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus
        consequat augue vitae tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit
        iaculis, ultrices condimentum risus. Nulla facilisi. Etiam venenatis molestie tellus.
        Quisque consectetur non risus eu rutrum.{' '}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus
        consequat augue vitae tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit
        iaculis, ultrices condimentum risus. Nulla facilisi. Etiam venenatis molestie tellus.
        Quisque consectetur non risus eu rutrum.{' '}
      </p>

  </Modal>
</div>

<div>
<h1>Composed Modal</h1>

  <div>
    <h2>Default</h2>
    <ComposedModal {...$$props.composedModal}>
      <ModalHeader {...$$props.modalHeader} />
      <ModalBody
        {...$$props.modalBody}
        >
        <p>Please see ModalWrapper for more examples and demo of the functionality.</p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue.
            Phasellus consequat augue vitae tellus tincidunt posuere. Curabitur justo urna,
            consectetur vel elit iaculis, ultrices condimentum risus. Nulla facilisi. Etiam
            venenatis molestie tellus. Quisque consectetur non risus eu rutrum.{' '}
          </p>

      </ModalBody>
      <ModalFooter {...$$props.modalFooter} />
    </ComposedModal>

  <h2>Child NOdes</h2>
    <ComposedModal {...$$props.composedModal}>
      <ModalHeader {...$$props.modalHeader}>
        <h1>Testing</h1>
      </ModalHeader>
      <ModalBody
        {...$$props.modalBody}
        >
        <p>Please see ModalWrapper for more examples and demo of the functionality.</p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue.
            Phasellus consequat augue vitae tellus tincidunt posuere. Curabitur justo urna,
            consectetur vel elit iaculis, ultrices condimentum risus. Nulla facilisi. Etiam
            venenatis molestie tellus. Quisque consectetur non risus eu rutrum.{' '}
          </p>

      </ModalBody>
      <ModalFooter>
        <Button kind="secondary">Cancel</Button>
        <Button kind="primary"}>Primary</Button>
      </ModalFooter>
    </ComposedModal>


  <h2>Title</h2>
    <ComposedModal {...$$props.composedModal} open on:close={() => {}} on:submit={() => {}}>
      <ModalHeader
        {...$$props.modalHeader}
        title="Passive modal title as the message. Should be direct and 3 lines or less." />
      <ModalBody {...$$props.modalBody} />
      <ModalFooter {...$$props.modalFooter} />
    </ComposedModal>

  <h2>Trigger</h2>
    <div>
      <Button
        on:click={() => {
          open = true;
        }}>
        Launch composed modal
      </Button>
    </div>
    <ComposedModal {...$$props.composedModal} {open} on:close={() => (open = false)}>
      <ModalHeader {...$$props.modalHeader} />
      <ModalBody
        {...$$props.modalBody}>
        <p>Please see ModalWrapper for more examples and demo of the functionality.</p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue.
            Phasellus consequat augue vitae tellus tincidunt posuere. Curabitur justo urna,
            consectetur vel elit iaculis, ultrices condimentum risus. Nulla facilisi. Etiam
            venenatis molestie tellus. Quisque consectetur non risus eu rutrum.{' '}
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue.
            Phasellus consequat augue vitae tellus tincidunt posuere. Curabitur justo urna,
            consectetur vel elit iaculis, ultrices condimentum risus. Nulla facilisi. Etiam
            venenatis molestie tellus. Quisque consectetur non risus eu rutrum.{' '}
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue.
            Phasellus consequat augue vitae tellus tincidunt posuere. Curabitur justo urna,
            consectetur vel elit iaculis, ultrices condimentum risus. Nulla facilisi. Etiam
            venenatis molestie tellus. Quisque consectetur non risus eu rutrum.{' '}
          </p>
          <h3>Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue.
            Phasellus consequat augue vitae tellus tincidunt posuere. Curabitur justo urna,
            consectetur vel elit iaculis, ultrices condimentum risus. Nulla facilisi. Etiam
            venenatis molestie tellus. Quisque consectetur non risus eu rutrum.{' '}
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue.
            Phasellus consequat augue vitae tellus tincidunt posuere. Curabitur justo urna,
            consectetur vel elit iaculis, ultrices condimentum risus. Nulla facilisi. Etiam
            venenatis molestie tellus. Quisque consectetur non risus eu rutrum.{' '}
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue.
            Phasellus consequat augue vitae tellus tincidunt posuere. Curabitur justo urna,
            consectetur vel elit iaculis, ultrices condimentum risus. Nulla facilisi. Etiam
            venenatis molestie tellus. Quisque consectetur non risus eu rutrum.{' '}
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue.
            Phasellus consequat augue vitae tellus tincidunt posuere. Curabitur justo urna,
            consectetur vel elit iaculis, ultrices condimentum risus. Nulla facilisi. Etiam
            venenatis molestie tellus. Quisque consectetur non risus eu rutrum.{' '}
          </p>

      </ModalBody>
      <ModalFooter {...$$props.modalFooter} />
    </ComposedModal>
  </div>

</Layout>
