<script>
  import { expoInOut } from 'svelte/easing';
  import { fade } from 'svelte/transition';
</script>

<div
  class="flex flex-col items-center justify-center ml-10 side-bar"
  transition:fade={{ delay: 500, duration: 1000, easing: expoInOut }}
>
  <h2>Side-Bar</h2>
  <a href="/projects">Projects</a>
  <a href="https://github.com/ArtieFuzzz">Github</a>
  <a href="https://sr.ht/~artiefuzzz">SourceHut</a>
  <a href="https://www.codewars.com/users/ArtieFuzzz">CodeWars</a>
  <a href="/privacy">Privacy Policy</a>
  <p>read if cute!</p>
</div>

<style lang="scss">
  div a {
    --bar-color: #007c72;
    text-decoration: none;
    background-color: var(--bar-color);
    padding: 5px;
    @apply font-mono;
    margin-bottom: 10px;

    transition: 1.2s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
      --bar-color: white;
      color: black;
    }
  }
</style>
