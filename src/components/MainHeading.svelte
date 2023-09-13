<script lang="ts">
  import type { Activity, Spotify } from 'sk-lanyard';
  import { useLanyard } from 'sk-lanyard';

  const l = useLanyard({ method: 'ws', id: '389252140184633363' });
  const chance = Math.ceil(Math.random() * 100) / 100;

  /**
   * Gets the first activity which filters ones with the type of `0`
   * */
  function formatSingleActivity(activities: Activity[]) {
    const activity = activities.filter((a) => a.type === 0)[0];

    return [activity.name, activity.state].join(' ');
  }

  function formatLanyardSpotify(spotify: Spotify) {
    return [`'${spotify.song}'`, 'by', `'${spotify.artist}'`, 'on', `'${spotify.album}'`].join(' ');
  }
  // let status: string;
  // let activity: string;
  // let activityMeta: string;
  // let spotifySong: string;
  // let spotifyArtist: string;
  // let spotifyAlbum: string;

  // if ($lanyard) {
  //   status = $lanyard.discord_status;

  //   if ($lanyard.activities.length > 0) {
  //     activity = $lanyard.activities.filter((activity) => activity.type === 0)[0].name;
  //     activityMeta = $lanyard.activities.filter((activity) => activity.type === 0)[0]
  //       .state;
  //   }

  //   if ($lanyard.listening_to_spotify) {
  //     spotifySong = $lanyard.spotify.song;
  //     spotifyArtist = $lanyard.spotify.artist;
  //     spotifyAlbum = $lanyard.spotify.album;
  //   }
  // }

  console.info(`Your chances were ${chance * 100}%`);
</script>

<div>
  <h1 class="m-3 ml-0 text-4xl sm:text-5xl md:text-7xl">
    {#if chance < 0.85}
      Hi, I'm Artie<span>[Fuzzz]</span>!
    {:else}
      Hi, I'm <span>[Not]</span>Artsy!
    {/if}
  </h1>
  <div class="flex flex-row items-start gap-1 justify-evenly">
    {#if $l}
      {#if $l.discord_status === 'offline'}
        <code>OFFLINE</code>
      {:else}
        <code>{$l.discord_status.toUpperCase()}</code>
        <p>+</p>
        <code>PLAYING: {formatSingleActivity($l.activities)}</code>
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
