<script>
  let className = undefined;
  export { className as class };
  export const translationIds = { close: 'close', open: 'open' };
  export let open = false;
  export let style = undefined;
  export let translateWithId = id => defaultTranslations[id];

  import ChevronDown16 from '../../icons/lib/ChevronDown16';
  import { cx } from '../../lib';

  const defaultTranslations = {
    [translationIds.close]: 'Close menu',
    [translationIds.open]: 'Open menu'
  };

  $: description = open ? translateWithId('close') : translateWithId('open');
</script>

<div
  on:click|preventDefault|stopPropagation
  class={cx('--list-box__menu-icon', open && '--list-box__menu-icon--open', className)}
  {style}>
  <ChevronDown16 aria-label={description} title={description} />
</div>
