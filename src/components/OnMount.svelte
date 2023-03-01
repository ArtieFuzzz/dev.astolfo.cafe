<!-- SPDX-License-Identifier: MPL-2.0 -->
<script lang="ts">
  import { onMount } from 'svelte';

  let isLoaded = false;

  onMount(() => {isLoaded = true});
</script>

{#if isLoaded}
  <slot />
{/if}
