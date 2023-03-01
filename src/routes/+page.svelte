<!-- SPDX-License-Identifier: MPL-2.0 -->
<script>
  import { fade } from 'svelte/transition';
</script>

<div class="w-screen h-screen flex justify-start items-start p-12">
  <div class="flex flex-col justify-start items-start" transition:fade="{{duration: 500}}">
    <h1 class="text-4xl sm:text-5xl md:text-7xl m-2">Hi, I'm Artie <span class="text-white">(Fuzzz)</span>!</h1>

    <div class="flex flex-col justify-start items-start mt-10" transition:fade="{{duration: 1000}}">
      <p>I've been teaching myself programming ever since 2020 and I blame Discord.</p>
      <p>I first taught myself JavaScript using it to code bots using the <a href="https://discord-akairo.github.io/#/">Akairo</a> which is now left unmaintained.</p>
      <p>Then I learned TypeScript and continued to create some bots with <a href="https://www.sapphirejs.dev/">Sapphire</a>.</p>
      <br>
      <p>Later in 2021 I learned Elixir and Rust! Ever since I first started using Rust I couldn't stop using and till this day I'm still using it.</p>
    </div>
  </div>
</div>

<style type="scss">
  h1 {
    margin: 0;
  }

  p {
    padding: 0;
    margin: 0;
    color: #ff838d;
    @apply font-mono;
  }
</style>
