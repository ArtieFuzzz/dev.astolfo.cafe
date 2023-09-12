<script>
  import { useLanyard } from 'sk-lanyard';

  const lanyardData = useLanyard({ method: 'ws', id: '389252140184633363' });
  const chance = Math.ceil(Math.random() * 100) / 100;
  let lanyardLoaded = false;

  console.info(`Your chances were ${chance * 100}%`);
</script>

<div>
  <h1 class="text-4xl sm:text-5xl md:text-7xl m-2">
    {#if chance < 0.85}
      Hi, I'm Artie <span>[Fuzzz]</span>!
    {:else}
      Hi, I'm <span>[Not]</span> Artsy!
    {/if}
  </h1>
  <div class="flex flex-row items-start justify-start">
    {#if $lanyardData}
      <p>I'm currently <code>{$lanyardData.discord_status}</code></p>

      {#if $lanyardData.activities.filter((activity) => activity.type === 0).length > 0}
        <!-- This is most likely inefficient but it does the trick .w. -->
        <p>
          <code
            >Playing: {$lanyardData.activities.filter((activity) => activity.type === 0)[0].name} | {$lanyardData.activities.filter(
              (activity) => activity.type === 0
            )[0].state}</code
          >
        </p>
      {:else}
        <p>Doing <code>Nothing</code></p>
      {/if}

      {#if $lanyardData.listening_to_spotify}
        <p>
          Listening to <code>{$lanyardData.spotify.song}</code> by
          <code>{$lanyardData.spotify?.artist}</code>
          on <code>{$lanyardData.spotify?.album}</code>
        </p>
      {:else}
        <p>Listening to nothing...</p>
      {/if}
    {:else if !lanyardLoaded}
      <p>Loading...</p>
    {:else}
      <p>Updating...</p>
    {/if}
  </div>
</div>
