<!-- SPDX-License-Identifier: MPL-2.0 -->
<script>
  import { sineIn } from 'svelte/easing';
  import { fade } from 'svelte/transition';
</script>

<div
  class="flex flex-col justify-start items-start mt-10"
  transition:fade={{ duration: 1000, easing: sineIn }}
>
  <p>I'm from Australia and I have a passion for programming <span>(+ Open-Source)</span>, networking, and anything else relating to
  computer / technology. I spend most of my free-time with friends, listening to music, and of course programming!</p>
    <br>
  <p>I love looking for brand new things in the Tech world, right now I'm trying to learn Nix / NixOS!</p>
  <p>Lastly, please keep in mind I'm shy around new people! It might take a while for us to get along.</p>
</div>

<style lang="scss">
  p {
    padding: 0;
    margin: 0;
    color: #ff838d;
    @apply font-mono text-lg;
  }

  span {
    @apply text-white;
  }
</style>
