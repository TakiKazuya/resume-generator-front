{#if $authStore.isLoggedIn}
  <h2>Export</h2>
  <PdfButton/>
  <button>XLSX</button>
{/if}

<script>
  import authStore from "../stores/authStore";
  import PdfButton from "../components/exports/PdfButton.svelte";
</script>
