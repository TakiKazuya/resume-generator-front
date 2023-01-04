{#if !$authStore.isLoggedIn}
  <button on:click={login}>LoginButton</button>
{/if}

<script>
  import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
  import authStore from "../stores/authStore";
  import {Octokit} from "octokit";
  import {gitHubUserStore} from "../stores/gitHub/userStore"

  const provider = new GithubAuthProvider();

  async function login() {
    try {
      const auth = getAuth();
      const result = await signInWithPopup(auth, provider)
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;

      authStore.set({
        isLoggedIn: user !== null,
        user,
        token,
      });

      const octokit = new Octokit({ auth: $authStore.token });
      const gitHubUser = await octokit.rest.users.getAuthenticated();
      $gitHubUserStore = gitHubUser.data;
    } catch(error) {
      const errorMessage = error.message;
      alert(errorMessage)
    }
  }
</script>