{#if $authStore.isLoggedIn}
  <h2>Export</h2>
  <PdfButton/>
  <Button disabled color="success">
    <Icon name="file-excel"/>
    XLSX
  </Button>
{/if}

<script>
  import authStore from "../stores/authStore";
  import PdfButton from "../components/exports/PdfButton.svelte";
  import { Button, Icon } from 'sveltestrap';
</script>
