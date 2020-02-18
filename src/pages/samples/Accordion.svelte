<script>
  export let story = undefined;
  export let title = undefined;
  export let open = undefined;
  export let count = undefined;

  import Accordion  from '../../components/carbon/components/Accordion/Accordion.svelte';
  import AccordionItem from '../../components/carbon/components/Accordion/AccordionItem.svelte';


</script>

<h1>Accordion</h1>

<Accordion>
  <AccordionItem {title} {open}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </AccordionItem>
  <AccordionItem title="Section 2 title">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </AccordionItem>
  <AccordionItem title="Section 3 title">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </AccordionItem>
  <AccordionItem>
    <div slot="title">
      Section 4 title (
      <em>the title can be a node</em>
      )
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </AccordionItem>
</Accordion>
