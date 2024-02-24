<script>
  import { expoInOut } from 'svelte/easing';
  import { fade } from 'svelte/transition';

  let isOpen = false;

  const openSideBar = () => (isOpen = !isOpen);
</script>

<button on:click={openSideBar}
  ><p>
    {isOpen ? '>>' : '<<'}
  </p></button
>
<div
  class={`flex flex-col items-end justify-center mr-10 side-bar transform top-0 left-0 duration-300 transition-all ease-in-out ${
    isOpen ? 'translate-x-0' : 'translate-x-60'
  }`}
  transition:fade={{ delay: 500, duration: 1000, easing: expoInOut }}
>
  <h2>Links |</h2>
  <a href="/projects">Projects</a>
  <a href="https://github.com/ArtieFuzzz">Github</a>
  <a href="https://sr.ht/~artiefuzzz">SourceHut</a>
  <a href="https://www.codewars.com/users/ArtieFuzzz">CodeWars</a>
  <a href="/privacy">Privacy Policy</a>
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

  p {
    padding: 0;
    margin: 0;
    color: #ff838d;
    @apply font-mono text-lg;
  }
</style>
