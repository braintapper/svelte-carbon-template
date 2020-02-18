<script>
  export let story = undefined;

  import { cx } from '../../components/carbon/lib';
  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import Button from '../../components/carbon/components/Button/Button.svelte';

  import Add16 from '../../components/carbon/icons/lib/Add16';

  const {
    kind,
    disabled,
    size,
    iconDescription,
    small,
    tooltipPosition,
    tooltipAlignment
  } = $$props;

  const regularProps = {
    kind,
    disabled,
    size,
    iconDescription,
    small
  };

  const iconOnlyProps = {
    kind,
    disabled,
    size,
    icon: Add16,
    iconDescription,
    tooltipPosition,
    tooltipAlignment
  };

  const setProps = { disabled, small, size, iconDescription };
</script>

<Layout>
  <div>
      <h1>Inline</h1>
      <Button />
    <h1>icon-only buttons</h1>
      <Button {...iconOnlyProps} />
    <h1>set of buttons</h1>
      <div class={cx('--btn-set')}>
        <Button kind="secondary" {...setProps}>Secondary button</Button>
        <Button kind="primary" {...setProps}>Primary button</Button>
      </div>
    <h1>Regular</h1>
      <Button {...regularProps}>Button</Button>
      &nbsp;
      <Button {...regularProps} href="#">Link</Button>
      &nbsp;
      <Button {...regularProps} as let:props>
        <p {...props}>Element</p>
      </Button>
      &nbsp;
      <Button {...regularProps} as let:props>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a {...props}>Custom component</a>
      </Button>
    
  </div>
</Layout>
