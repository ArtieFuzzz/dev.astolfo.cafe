<!-- SPDX-License-Identifier: MPL-2.0 -->
<script>
  import { backIn } from 'svelte/easing';
  import { fade } from 'svelte/transition';
  import AboutMe from '../components/AboutMe.svelte';
  import MainHeading from '../components/MainHeading.svelte';
  import Metadata from '../components/Metadata.svelte';
  import SideBar from '../components/SideBar.svelte';
</script>

<div class="h-screen w-screen flex flex-row justify-evenly items-start">
  <div class="main-window flex pl-12 pt-12" transition:fade={{ duration: 1000, easing: backIn }}>
    <div class="flex flex-col justify-start items-start">
      <div>
        <!--  Move Lanyard stats under h1-->
        <MainHeading/>
      </div>

      <AboutMe />

      <Metadata />
    </div>
  </div>

  <SideBar />
</div>

<style lang="scss">
  h1 {
    margin: 0;
  }
</style>
