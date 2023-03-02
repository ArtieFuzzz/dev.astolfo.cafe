<!-- SPDX-License-Identifier: MPL-2.0 -->
<script>
  import { fade } from 'svelte/transition';
  import AboutMe from '../components/AboutMe.svelte';
  import LanguagesAndLanyardStats from '../components/LanguagesAndLanyardStats.svelte';
  import SideBar from '../components/SideBar.svelte';
</script>

<div class="h-screen w-screen flex flex-row justify-evenly items-start">
  <div class="main-window flex pl-12 pt-12">
    <div class="flex flex-col justify-start items-start" transition:fade={{ duration: 500 }}>
      <h1 class="text-4xl sm:text-5xl md:text-7xl m-2">
        Hi, I'm Artie <span class="text-white">[Fuzzz]</span>!
      </h1>

      <AboutMe />

      <LanguagesAndLanyardStats />
    </div>
  </div>

  <SideBar />
</div>

<style lang="scss">
  h1 {
    margin: 0;
  }
</style>
