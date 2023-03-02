<!-- SPDX-License-Identifier: MPL-2.0 -->
<script lang="ts">
  import { useLanyard } from 'sk-lanyard';

  const languages = ['Rust', 'Elixir', 'TypeScript & Deno', 'Dart'];

  const lanyardData = useLanyard({ method: 'ws', id: '389252140184633363' });
</script>

<div class="flex flex-row justify-start items-start mt-6">
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
    {#if $lanyardData}
      <ul>
        <li>
          <p>I'm currently <code>{$lanyardData.discord_status}</code></p>
        </li>
        <li>
          {#if $lanyardData.listening_to_spotify}
            <p>
              I'm listening to <code>{$lanyardData.spotify.song}</code> by
              <code>{$lanyardData.spotify?.artist}</code>
              on <code>{$lanyardData.spotify?.album}</code>
            </p>
          {:else}
            <p>I'm not listening to anything...</p>
          {/if}
        </li>
      </ul>
    {:else}
      <p>Loading...</p>
    {/if}
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
