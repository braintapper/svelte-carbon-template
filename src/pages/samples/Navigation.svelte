<script>
  export let story = undefined;
  export let noTrailingSlash = undefined;

  
  import Pagination from '../../components/carbon/components/Pagination/Pagination.svelte';
  import Breadcrumb from '../../components/carbon/components/Breadcrumb/Breadcrumb.svelte';
  import BreadcrumbItem from '../../components/carbon/components/Breadcrumb/BreadcrumbItem.svelte';

</script>

<h1>Breadcrumbs</h1>
  <h2>Current Page</h2>
    <Breadcrumb noTrailingSlash>
      <BreadcrumbItem let:props>
        <a {...props} href="/#">Breadcrumb 1</a>
      </BreadcrumbItem>
      <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
      <BreadcrumbItem href="#" isCurrentPage>Breadcrumb 3</BreadcrumbItem>
    </Breadcrumb>
  <h2>current page with aria-current</h2>
    <Breadcrumb noTrailingSlash>
      <BreadcrumbItem let:props>
        <a {...props} href="/#">Breadcrumb 1</a>
      </BreadcrumbItem>
      <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
      <BreadcrumbItem href="#" aria-current="page">Breadcrumb 3</BreadcrumbItem>
    </Breadcrumb>
    <h2>No Trailing Slash</h2>
    <Breadcrumb {noTrailingSlash}>
      <BreadcrumbItem let:props>
        <a {...props} href="/#">Breadcrumb 1</a>
      </BreadcrumbItem>
      <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
      <BreadcrumbItem href="#">Breadcrumb 3</BreadcrumbItem>
    </Breadcrumb>

  <h1>Pagination</h1>
  <div style="width: 800px;">
    <h2>Multiple</h2>
      <Pagination {...$$props}>Pagination</Pagination>
      <Pagination {...$$props}>Pagination</Pagination>
    <h2>Single</h2>
      <Pagination {...$$props}>Pagination</Pagination>

  </div>
