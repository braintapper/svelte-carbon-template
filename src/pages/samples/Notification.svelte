<script>
  export let story = undefined;

  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import InlineNotification from '../../components/carbon/components/Notification/InlineNotification.svelte';
  import NotificationActionButton from '../../components/carbon/components/Notification/NotificationActionButton.svelte';
  import ToastNotification from '../../components/carbon/components/Notification/ToastNotification.svelte';
</script>

<Layout>
  <h1>Inline</h1>
    <InlineNotification {...$$props}>
      <div slot="actions">
        <NotificationActionButton>{$$props.action}</NotificationActionButton>
      </div>
    </InlineNotification>
  <h1>Toast</h1>
    <ToastNotification {...$$props} style="min-width: 30rem; margin-bottom: .5rem" />
</Layout>
