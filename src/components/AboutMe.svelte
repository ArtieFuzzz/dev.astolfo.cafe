<script>
  import { fade } from 'svelte/transition';
</script>

<div class="flex flex-col justify-start items-start mt-10" transition:fade={{ duration: 1000 }}>
  <p>I've been teaching myself programming ever since 2020 and I blame Discord.</p>
  <p>
    I first taught myself JavaScript using it to code bots using the <a
      href="https://discord-akairo.github.io/#/">Akairo</a
    > which is now left unmaintained,
  </p>
  <p>
    then I learned TypeScript and continued creating some bots with <a
      href="https://www.sapphirejs.dev/">Sapphire</a
    >,
  </p>
  <p>
    later in 2021 I learned Elixir and Rust! (<span class="text-white"
      >I have attempted to learn C / C++, Dart, and Go</span
    >)
  </p>
  <p>
    Since I first started using Rust I couldn't stop using it and till this day I'm still using it.
  </p>
  <br />
  <p>Other than programming I also love Gaming, Music, and Open-Source.</p>
</div>

<style lang="scss">
  p {
    padding: 0;
    margin: 0;
    color: #ff838d;
    @apply font-mono text-lg;
  }
</style>
