<!-- SPDX-License-Identifier: MPL-2.0 -->
<script>
  import { fade } from 'svelte/transition';
</script>

<div class="h-screen w-screen flex flex-row justify-evenly items-start">
  <div class="main-window flex pl-12 pt-12">
    <div class="flex flex-col justify-start items-start" transition:fade={{ duration: 500 }}>
      <h1 class="text-4xl sm:text-5xl md:text-7xl m-2">
        Hi, I'm Artie <span class="text-white">[Fuzzz]</span>!
      </h1>

      <div
        class="flex flex-col justify-start items-start mt-10"
        transition:fade={{ duration: 1000 }}
      >
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
          Since I first started using Rust I couldn't stop using it and till this day I'm still
          using it.
        </p>
        <br />
        <p>Other than programming I also love Gaming, Music, and Open-Source.</p>
      </div>

      <div class="flex flex-row justify-evenly items-center mt-12">
        <div class="flex flex-col justify-start items-start">
          <h2>Check out some of my Repositories!</h2>
          <ul>
            <li>
              <a href="/">This leads to nothing</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="side-bar flex flex-col justify-center items-start">
    <h2>Side-bar</h2>
  </div>
</div>

<style type="scss">
  .main-window {
    width: 100vw;
  }

  .side-bar {
    width: 10vw;
  }
  a {
    text-decoration: none;
    @apply text-xl;
  }

  h1 {
    margin: 0;
  }

  p {
    padding: 0;
    margin: 0;
    color: #ff838d;
    @apply font-mono text-lg;
  }
</style>
