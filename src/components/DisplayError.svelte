<script lang="ts">
  export let code: number;
</script>

{#if code === 404}
  <h1>This route doesn't exist...</h1>
{:else}
  <h1>Something's not right... <span>Code: {code}</span></h1>
{/if}
<!-- svelte-ignore a11y-invalid-attribute -->
<a href="#" on:click={() => history.back()}><code>Consider Going Back</code></a>

<style lang="scss">
  a {
    color: black;
    @apply text-2xl;
  }

  h1 {
    @apply text-7xl;
  }
</style>
