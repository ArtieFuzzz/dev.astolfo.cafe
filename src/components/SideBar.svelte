<script>
  import { backInOut } from 'svelte/easing';
  import { fade } from 'svelte/transition';
</script>

<div
  class="side-bar flex flex-col justify-center items-center ml-10"
  transition:fade={{ delay: 500, duration: 1000, easing: backInOut }}
>
  <h2>Side-bar</h2>
  <a href="https://github.com/ArtieFuzzz" class="link">Github</a>
  <a href="https://www.codewars.com/users/ArtieFuzzz" class="link">CodeWars</a>
  <a href="/artiefuzzz_public.asc" class="link">Public Key</a>
  <a href="/privacy" class="link">Privacy Policy</a>
  <p>read if cute!</p>
</div>

<style lang="scss">
  div a {
    text-decoration: none;
    background-color: #007c72;
    padding: 5px;
    @apply font-mono;
  }

  .link {
    margin-bottom: 10px;
  }
</style>
