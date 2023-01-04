{#if Object.keys($gitHubUserStore).length}
  <h2>
    Profile
  </h2>
  <h3>
    username
  </h3>
  <p>{$gitHubUserStore.login}</p>

  <h3>
    Name
  </h3>
  <p>{$gitHubUserStore.name}</p>
{/if}

<script>
  import {gitHubUserStore} from "../stores/gitHub/userStore"
</script>