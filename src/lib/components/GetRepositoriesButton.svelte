{#if $authStore.isLoggedIn}
  <div id="capture">
    <h3>
      Repositories
    </h3>
    <button on:click={getRepositories}>GetRepositories</button>
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
      </thead>
      <tbody>
      {#each $gitHubRepositoriesStore as repository}
        <tr>
          <td>{repository.name}</td>
          <td>{repository.description}</td>
        </tr>
      {/each}
      </tbody>
    </table>
  </div>
{/if}

<script>
  import {GithubAuthProvider} from "firebase/auth";
  import authStore from "../stores/authStore";
  import {gitHubRepositoriesStore} from "../stores/gitHub/repositoriesStore"
  import {Octokit} from "octokit";

  const provider = new GithubAuthProvider();
  provider.addScope('repo');

  async function getRepositories() {
    try {
      const octokit = new Octokit({ auth: $authStore.token });
      const repos = await octokit.request('GET /user/repos', {})
      $gitHubRepositoriesStore = repos.data;
    } catch(error) {
      const errorMessage = error.message;
      alert(errorMessage)
    }
  }
</script>

<style lang="scss">
  table,
  td {
    border: 1px #000;
  }

  thead,
  tfoot {
    background-color: #000;
    color: #fff;
  }
</style>