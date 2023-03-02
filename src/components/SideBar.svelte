<script>

    import { fade } from 'svelte/transition';

</script>
<div class="side-bar flex flex-col justify-center items-center ml-10" transition:fade={{duration: 1000}}>
  <h2>Side-bar</h2>
  <a href="https://github.com/ArtieFuzzz" class="link">Github</a>
  <a href="/" class="link">Privacy Policy</a>
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
