<script lang="ts">
  import { useLanyard } from 'sk-lanyard';
  import { formatLanyardSpotify, formatSingleActivity, notListening } from '../lib/lanyard';

  const l = useLanyard({ method: 'ws', id: '389252140184633363' });
  const chance = Math.ceil(Math.random() * 100) / 100;

  console.info(`Your chances were ${chance * 100}%`);
</script>

<div>
  <h1 class="m-3 ml-0 pl-0 text-4xl sm:text-5xl md:text-7xl">
    {#if chance < 0.85}
      Hi, I'm Artie<span>[Fuzzz]</span>!
    {:else}
      Hi, I'm <span>[Not]</span>Artsy!
    {/if}
  </h1>
  <div class="ml-1 flex flex-row items-start gap-1 justify-start">
    {#if $l}
      {#if $l.discord_status === 'offline'}
        <code>OFFLINE</code>
      {:else}
        <code>{$l.discord_status.toUpperCase()}</code>
        {#if $l.activities.filter(notListening).length}
          <p>+</p>
          <code>{formatSingleActivity($l.activities)}</code>
        {/if}

        {#if $l.listening_to_spotify}
          <p>+</p>
          <code>LISTENING TO: {formatLanyardSpotify($l.spotify)}</code>
        {/if}
      {/if}
    {:else}
      <p>Hi :3</p>
    {/if}
  </div>
</div>

<style lang="scss">
  p {
    @apply text-white;
    line-height: 1.2rem;
    margin: 0;
  }

  p,
  code {
    line-height: 0.9rem;
  }
</style>
