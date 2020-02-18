<script>
  export let story = undefined;
  const { modalBody } = $$props;



  import {Button, ComposedModal, ModalHeader, ModalBody, ModalFooter } from 'carbon-components-svelte';

  let open = false;
</script>



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
        <Button kind={true ? 'danger' : 'primary'}>Primary</Button>
      </ModalFooter>
    </ComposedModal>



    <ComposedModal {...$$props.composedModal} open on:close={() => {}} on:submit={() => {}}>
      <ModalHeader
        {...$$props.modalHeader}
        title="Passive modal title as the message. Should be direct and 3 lines or less." />
      <ModalBody {...$$props.modalBody} />
      <ModalFooter {...$$props.modalFooter} />
    </ComposedModal>



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
        {...$$props.modalBody}
        >
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
