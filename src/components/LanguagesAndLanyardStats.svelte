<!-- SPDX-License-Identifier: MPL-2.0 -->
<script lang="ts">
  const languages = ['Rust', 'Elixir', 'TypeScript & Deno', 'Dart'];
</script>

<div class="flex flex-row justify-start items-start mt-12">
  <div class="w-[20vw] flex flex-col justify-start items-start">
    <h2>Languages</h2>
    <ol>
      {#each languages as lang}
      <li>
        <p>{lang}</p>
      </li>
      {/each}

      <li><p>...</p></li>
    </ol>
  </div>

  <div class="flex flex-col justify-start items-start">
    <h2>Lanyard Statistics</h2>
    <ul>
      <li>
        <p>This is a placeholder.</p>
      </li>
    </ul>
  </div>
</div>

<style lang="scss">
  h2 {
    margin-bottom: 10px;
  }
  li p {
    color: white;
  }

  p {
    padding: 0;
    margin: 0;
    color: #ff838d;
    @apply font-mono text-lg;
  }
</style>
