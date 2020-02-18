<script lang="coffeescript">
  `export let application_name`

  import Router from 'svelte-spa-router'


  # Route pages
  import Home from './pages/home/Home.svelte'
  import Icons from './pages/icons/Icons.svelte'






  import ContentSwitcher from './pages/samples/ContentSwitcher.svelte'


  import Form from './pages/samples/Form.svelte'


  import Icon from './pages/samples/Icon.svelte'

  import Lists from './pages/samples/Lists.svelte'


  import Popovers from './pages/samples/Popovers.svelte'





  import ProgressIndicator from './pages/samples/ProgressIndicator.svelte'

  import MiscellaneousControls from './pages/samples/MiscellaneousControls.svelte'









  import UIShell from './pages/samples/UIShell.svelte'


  import Navigation from './pages/samples/Navigation.svelte'


  # Add more routes below
  routes =
    '/': Home
    '/Icons': Icons

    '/Navigation': Navigation
    '/Lists': Lists
    '/Form': Form

    '/ContentSwitcher': ContentSwitcher
    '/MiscellaneousControls': MiscellaneousControls

    '/Popovers': Popovers

    '/ProgressIndicator': ProgressIndicator








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
