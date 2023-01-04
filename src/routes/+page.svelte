<h1>
  ResumeGenerator
</h1>
<LoginButton/>
<Profile/>
<GetRepositoriesButton/>
<Exports/>

<script>
  import GetRepositoriesButton from '../lib/components/GetRepositoriesButton.svelte'

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import {onMount} from "svelte";
  import LoginButton from "$lib/components/LoginButton.svelte";
  import Profile from "$lib/components/Profile.svelte";
  import Exports from "$lib/components/Exports.svelte";
  // import { getAnalytics } from "firebase/analytics";
  // import { GithubAuthProvider } from "firebase/auth";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  onMount(() => {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyDJmsl4TM7swF7-yi145PIrPwAB_WKLu48",
      authDomain: "resume-generator-49460.firebaseapp.com",
      projectId: "resume-generator-49460",
      storageBucket: "resume-generator-49460.appspot.com",
      messagingSenderId: "515881579207",
      appId: "1:515881579207:web:d8e340e88e0f94c11c84e2",
      measurementId: "G-R7T5TEM1EE"
    };

    // Initialize Firebase
    initializeApp(firebaseConfig);
  })
</script>