<!-- SPDX-License-Identifier: MPL-2.0 -->
<script lang="ts">
  import { useLanyard } from 'sk-lanyard';

  const languages = ['Rust', 'Elixir', 'TypeScript & Deno', 'Dart'];
  const roles = ['Software Developer', 'DevOps'];

  const lanyardData = useLanyard({ method: 'ws', id: '389252140184633363' });
  let lanyardLoaded = false;
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

      <ul><p>...</p></ul>
    </ol>
  </div>

  <div class="w-[20vw] flex flex-col justify-start items-start">
    <h2>Roles</h2>
    <ol>
      {#each roles as role}
        <li>
          <p>{role}</p>
        </li>
      {/each}

      <ul><p>...</p></ul>
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
          {#if $lanyardData.activities.filter((activity) => activity.type === 0).length > 0}
            <!-- This is most likely inefficient but it does the trick .w. -->
            <p>
              <code
                >Playing: {$lanyardData.activities.filter((activity) => activity.type === 0)[0]
                  .name} | {$lanyardData.activities.filter((activity) => activity.type === 0)[0]
                  .state}</code
              >
            </p>
          {:else}
            <p>Doing <code>Nothing</code></p>
          {/if}
        </li>

        <li>
          {#if $lanyardData.listening_to_spotify}
            <p>
              Listening to <code>{$lanyardData.spotify.song}</code> by
              <code>{$lanyardData.spotify?.artist}</code>
              on <code>{$lanyardData.spotify?.album}</code>
            </p>
          {:else}
            <p>Listening to nothing...</p>
          {/if}
        </li>

        <ul><p>...</p></ul>
      </ul>
    {:else if !lanyardLoaded}
      <p>Loading...</p>
    {:else}
      <p>Updating...</p>
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
