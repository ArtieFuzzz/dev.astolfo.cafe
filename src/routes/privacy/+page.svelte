<!-- SPDX-License-Identifier: MPL-2.0 -->
<script>
  import { sineIn } from 'svelte/easing';
  import { fade } from 'svelte/transition';
</script>

<div
  class="w-[75vw] h-screen flex flex-col justify-center items-start"
  transition:fade={{ duration: 500, easing: sineIn }}
>
  <div class="m-20">
    <div class="flex flex-row justify-start items-center place-items-baseline">
      <h1 class="text-white"><span>[Privacy Policy]</span></h1>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="#" on:click={() => history.back()} class="pl-5">Go Back</a>
    </div>

    <div transition:fade={{ duration: 1000, easing: sineIn }}>
      <p>
        This website uses Cloudflare, visit their <a
          href="https://www.cloudflare.com/privacypolicy/">Privacy Policy</a
        >.
      </p>

      <p>
        This website does not store any data but this site uses Umami for Analytical
        purposes, we use a self-hosted instance @ analytics.astolfo.cafe. This website does not track you
        in any way across websites nor do we sell your Information to Third-Parties.
      </p>
    </div>
  </div>
</div>

<style type="scss">
  p {
    padding: 0;
    color: #ff838d;
    @apply font-mono text-lg;
  }


  a {
    @apply font-mono;
  }

  h1 {
    margin: 0;
  }
</style>
