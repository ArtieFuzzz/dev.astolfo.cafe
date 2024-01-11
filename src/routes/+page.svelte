<!-- SPDX-License-Identifier: MPL-2.0 -->
<script>
  import { quadOut } from 'svelte/easing';
  import { fade } from 'svelte/transition';
  import AboutMe from '../components/AboutMe.svelte';
  import MainHeading from '../components/MainHeading.svelte';
  import Metadata from '../components/Metadata.svelte';
  import SideBar from '../components/SideBar.svelte';
</script>

<div class="max-w-full flex flex-row items-start w-screen h-screen justify-evenly">
  <div class="flex pt-12 pl-12 main-window" transition:fade={{ duration: 1000, easing: quadOut }}>
    <div class="flex flex-col items-start justify-start">
      <div>
        <MainHeading />
      </div>

      <AboutMe />

      <Metadata />
    </div>
  </div>

  <SideBar />
</div>
