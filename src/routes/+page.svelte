<Styles/>
<Container fruid class="text-center my-5">
  <h1>
    ResumeGenerator
  </h1>
  <LoginButton/>
  <Resume/>
  <Exports/>
</Container>

<script>
  import 'bootstrap/dist/css/bootstrap.min.css'
  import { Styles, Container } from 'sveltestrap';
  import LoginButton from "$lib/components/LoginButton.svelte";
  import Exports from "$lib/components/Exports.svelte";
  import Resume from "$lib/components/Resume.svelte";

  import { initializeApp } from "firebase/app";
  import {onMount} from "svelte";

  onMount(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyDJmsl4TM7swF7-yi145PIrPwAB_WKLu48",
      authDomain: "resume-generator-49460.firebaseapp.com",
      projectId: "resume-generator-49460",
      storageBucket: "resume-generator-49460.appspot.com",
      messagingSenderId: "515881579207",
      appId: "1:515881579207:web:d8e340e88e0f94c11c84e2",
      measurementId: "G-R7T5TEM1EE"
    };

    initializeApp(firebaseConfig);
  })
</script>