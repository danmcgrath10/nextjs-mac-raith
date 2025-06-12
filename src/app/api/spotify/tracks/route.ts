import { NextRequest, NextResponse } from 'next/server';

interface SpotifyTrack {
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

interface SpotifyApiResponse {
  tracks: SpotifyTrack[];
}

// Get Spotify access token using Client Credentials flow
async function getSpotifyAccessToken(): Promise<string | null> {
  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  console.log('Client ID:', clientId ? 'Set' : 'Not set');
  console.log('Client Secret:', clientSecret ? 'Set' : 'Not set');

  if (!clientId || !clientSecret) {
    console.error('Spotify credentials not found');
    return null;
  }

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
      },
      body: 'grant_type=client_credentials',
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Spotify token error:', response.status, errorText);
      throw new Error(`Failed to get access token: ${response.status}`);
    }

    const data = await response.json();
    console.log('Successfully obtained Spotify access token');
    return data.access_token;
  } catch (error) {
    console.error('Error getting Spotify access token:', error);
    return null;
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const trackIds = searchParams.get('ids');

    if (!trackIds) {
      return NextResponse.json(
        { error: 'Track IDs are required' },
        { status: 400 }
      );
    }

    const accessToken = await getSpotifyAccessToken();
    if (!accessToken) {
      return NextResponse.json(
        { error: 'Failed to get Spotify access token' },
        { status: 500 }
      );
    }

    const response = await fetch(`https://api.spotify.com/v1/tracks?ids=${trackIds}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Spotify API error:', response.status, errorText);
      return NextResponse.json(
        { error: `Spotify API error: ${response.status}` },
        { status: response.status }
      );
    }

    const data: SpotifyApiResponse = await response.json();
    
    return NextResponse.json({
      tracks: data.tracks.filter(track => track !== null)
    });

  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 