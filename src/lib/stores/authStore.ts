import { writable } from "svelte/store";
import type firebase from "firebase/compat";

const authStore = writable<{
  isLoggedIn: boolean;
  user?: firebase.UserInfo;
  token?: string;
}>({
  isLoggedIn: false,
});

export default {
  subscribe: authStore.subscribe,
  set: authStore.set,
};