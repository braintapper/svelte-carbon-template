<script lang="coffeescript">
  `export let application_name`

  import Router from 'svelte-spa-router'


  # Route pages
  import Home from './pages/home/Home.svelte'
  import Icons from './pages/icons/Icons.svelte'
  import Accordion from './pages/samples/Accordion.svelte'

  import Button from './pages/samples/Button.svelte'

  import CodeSnippet from './pages/samples/CodeSnippet.svelte'

  import ComposedModal from './pages/samples/ComposedModal.svelte'
  import ContentSwitcher from './pages/samples/ContentSwitcher.svelte'
  import Copy from './pages/samples/Copy.svelte'
  import CopyButton from './pages/samples/CopyButton.svelte'
  import DataTable from './pages/samples/DataTable.svelte'

  import DatePicker from './pages/samples/DatePicker.svelte'
  import Dropdown from './pages/samples/Dropdown.svelte'
  import FileUploader from './pages/samples/FileUploader.svelte'
  import Form from './pages/samples/Form.svelte'
  import FormGroup from './pages/samples/FormGroup.svelte'
  import FormItem from './pages/samples/FormItem.svelte'
  import FormLabel from './pages/samples/FormLabel.svelte'
  import Icon from './pages/samples/Icon.svelte'
  import InlineLoading from './pages/samples/InlineLoading.svelte'
  #import Link from './pages/samples/Link.svelte'
  #import ListBox from './pages/samples/ListBox.svelte'
  #import ListItem from './pages/samples/ListItem.svelte'
  import Loading from './pages/samples/Loading.svelte'
  import Modal from './pages/samples/Modal.svelte'
  import MultiSelect from './pages/samples/MultiSelect.svelte'
  import Notification from './pages/samples/Notification.svelte'

  # import OrderedList from './pages/samples/OrderedList.svelte'
  import OverflowMenu from './pages/samples/OverflowMenu.svelte'

  import ProgressIndicator from './pages/samples/ProgressIndicator.svelte'



  import Slider from './pages/samples/Slider.svelte'
  import StructuredList from './pages/samples/StructuredList.svelte'
  import Tabs from './pages/samples/Tabs.svelte'
  import Tag from './pages/samples/Tag.svelte'


  import Tile from './pages/samples/Tile.svelte'
  import TimePicker from './pages/samples/TimePicker.svelte'
  import Toggle from './pages/samples/Toggle.svelte'
  import ToggleSmall from './pages/samples/ToggleSmall.svelte'

  import UIShell from './pages/samples/UIShell.svelte'
  # import UnorderedList from './pages/samples/UnorderedList.svelte'


  import Navigation from './pages/samples/Navigation.svelte'
  import Tooltip from './pages/samples/Tooltip.svelte'


  # Add more routes below
  routes =
    '/': Home
    '/Icons': Icons

    '/Navigation': Navigation
    '/Form': Form
    '/Tooltip': Tooltip

    '/Accordion': Accordion

    '/Button': Button

    '/CodeSnippet': CodeSnippet
    
    '/ComposedModal': ComposedModal
    '/ContentSwitcher': ContentSwitcher
    '/Copy': Copy
    '/CopyButton': CopyButton
    '/DataTable': DataTable

    '/DatePicker': DatePicker
    '/Dropdown': Dropdown
    '/FileUploader': FileUploader

    '/FormGroup': FormGroup
    '/FormItem': FormItem
    '/FormLabel': FormLabel
    '/Icon': Icon
    '/InlineLoading': InlineLoading
    #'/Link': Link
    #'/ListBox': ListBox
    #'/ListItem': ListItem
    '/Loading': Loading
    '/Modal': Modal
    '/MultiSelect': MultiSelect
    '/Notification': Notification


    '/OverflowMenu': OverflowMenu

    '/ProgressIndicator': ProgressIndicator

    '/Slider': Slider
    '/StructuredList': StructuredList
    '/Tabs': Tabs
    '/Tag': Tag


    '/Tile': Tile
    '/TimePicker': TimePicker
    '/Toggle': Toggle
    '/ToggleSmall': ToggleSmall


    '/UIShell': UIShell


</script>


<style lang="sass">
  nav
    margin-bottom: 72px
</style>


<svelte:head>
  <title>{application_name}</title>

</svelte:head>

<nav>
  {#each Object.keys(routes) as route}
    <div>
      <a href="#{route}">{route}</a>
    </div>
  {/each}
</nav>
<Router {routes}/>
