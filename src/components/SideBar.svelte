<script>
  import { backInOut } from 'svelte/easing';
  import { fade } from 'svelte/transition';
</script>

<div
  class="side-bar flex flex-col justify-center items-center ml-10"
  transition:fade={{ delay: 500, duration: 1000, easing: backInOut }}
>
  <h2>Side-Bar</h2>
  <a href="/projects">Projects</a>
  <a href="https://github.com/ArtieFuzzz">Github</a>
  <a href="https://www.codewars.com/users/ArtieFuzzz">CodeWars</a>
  <a href="https://sr.ht/~artiefuzzz">sr.ht</a>
  <a href="/contact.asc">PGP</a>
  <a href="mailto:hey@astolfo.cafe">Email me!</a>
  <a href="/privacy">Privacy Policy</a>
  <p>read if cute!</p>
</div>

<style lang="scss">
  div a {
    text-decoration: none;
    background-color: #007c72;
    padding: 5px;
    @apply font-mono;
    margin-bottom: 10px;
  }
</style>
