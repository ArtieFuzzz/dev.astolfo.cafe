// Utilities for sk-lanyard
import type { Activity, Spotify } from 'sk-lanyard';

enum ActivityType {
  Playing,
  Streaming,
  Listening,
  Watching,
  Custom,
  Competing
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const notListening = (value: Activity, _index: number, _array: Activity[]) => value.type != 2;

function formatSingleActivity(activities: Activity[]) {
  const activity = activities.filter((a) => a.type != 2).filter((a) => a.type != 4)[0];

  return activity
    ? [`${activityType(activity.type)}:`, activity.name, activity.state].join(' ')
    : 'DOING SOMETHING?';
}

function activityType(type: number) {
  switch (type) {
    case ActivityType.Playing:
      return 'PLAYING';
    case ActivityType.Streaming:
      return 'STREAMING';
    case ActivityType.Watching:
      return 'WATCHING';
    case ActivityType.Competing:
      return 'COMPETING';
  }
}

function formatLanyardSpotify(spotify: Spotify) {
  return [`'${spotify.song}'`, 'by', `'${spotify.artist}'`, 'on', `'${spotify.album}'`].join(' ');
}

export { formatLanyardSpotify, formatSingleActivity, notListening };
