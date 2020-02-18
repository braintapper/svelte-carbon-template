<script>
  export let story = undefined;
  export let noTrailingSlash = undefined;

  import Layout from '../../components/carbon/internal/ui/Layout.svelte';
  import Breadcrumb from '../../components/carbon/components/Breadcrumb/Breadcrumb.svelte';
  import BreadcrumbItem from '../../components/carbon/components/Breadcrumb/BreadcrumbItem.svelte';

</script>

<Layout>
  <h1>Current Page</h1>
    <Breadcrumb noTrailingSlash>
      <BreadcrumbItem let:props>
        <a {...props} href="/#">Breadcrumb 1</a>
      </BreadcrumbItem>
      <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
      <BreadcrumbItem href="#" isCurrentPage>Breadcrumb 3</BreadcrumbItem>
    </Breadcrumb>
  <h1>current page with aria-current</h1>
    <Breadcrumb noTrailingSlash>
      <BreadcrumbItem let:props>
        <a {...props} href="/#">Breadcrumb 1</a>
      </BreadcrumbItem>
      <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
      <BreadcrumbItem href="#" aria-current="page">Breadcrumb 3</BreadcrumbItem>
    </Breadcrumb>
    <h1>No Trailing Slash</h1>
    <Breadcrumb {noTrailingSlash}>
      <BreadcrumbItem let:props>
        <a {...props} href="/#">Breadcrumb 1</a>
      </BreadcrumbItem>
      <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
      <BreadcrumbItem href="#">Breadcrumb 3</BreadcrumbItem>
    </Breadcrumb>

</Layout>
