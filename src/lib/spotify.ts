// Spotify Web API utilities for fetching track information

export interface SpotifyTrack {
  id: string;
  name: string;
  artists: { name: string }[];
  album: {
    name: string;
    images: { url: string; width: number; height: number }[];
    release_date: string;
  };
  duration_ms: number;
  external_urls: {
    spotify: string;
  };
  preview_url: string | null;
}

export interface SpotifyApiResponse {
  tracks: SpotifyTrack[];
}

// Extract track ID from Spotify URL
export function extractTrackId(spotifyUrl: string): string | null {
  const match = spotifyUrl.match(/track\/([a-zA-Z0-9]+)/);
  return match ? match[1] : null;
}

// Format duration from milliseconds to MM:SS
export function formatDuration(durationMs: number): string {
  const minutes = Math.floor(durationMs / 60000);
  const seconds = Math.floor((durationMs % 60000) / 1000);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Fetch multiple tracks using our API route
export async function fetchSpotifyTracks(trackIds: string[]): Promise<SpotifyTrack[]> {
  if (trackIds.length === 0) return [];

  try {
    console.log('Fetching tracks for IDs:', trackIds);
    
    const response = await fetch(`/api/spotify/tracks?ids=${trackIds.join(',')}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('API response error:', errorData);
      throw new Error(`API error: ${response.status} - ${errorData.error}`);
    }

    const data: SpotifyApiResponse = await response.json();
    console.log('Successfully fetched tracks:', data.tracks.length);
    
    return data.tracks.filter(track => track !== null);
  } catch (error) {
    console.error('Error fetching Spotify tracks:', error);
    return [];
  }
}

// Convert Spotify track to our PortfolioItem format
export function convertSpotifyToPortfolioItem(
  track: SpotifyTrack,
  services: string[] = ['Production', 'Mixing', 'Mastering'],
  description?: string
): import('@/types').PortfolioItem {
  const albumImage = track.album.images.find(img => img.width >= 300) || track.album.images[0];
  const releaseYear = new Date(track.album.release_date).getFullYear();

  return {
    id: track.id,
    title: track.name,
    artist: track.artists.map(artist => artist.name).join(', '),
    description: description || `Professional audio engineering work on "${track.name}" by ${track.artists[0].name}.`,
    genre: 'Music', // You might want to fetch this from Spotify's audio features API
    year: releaseYear,
    services: services,
    imageUrl: albumImage?.url || '/api/placeholder/400/400',
    audioUrl: track.preview_url || '#',
    duration: formatDuration(track.duration_ms),
    spotifyUrl: track.external_urls.spotify,
  };
} 