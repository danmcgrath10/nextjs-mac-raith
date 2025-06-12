# Spotify Integration Setup

## Overview
The portfolio section now automatically fetches track information from Spotify URLs! Just add your Spotify track URLs and the app will pull all the metadata automatically.

## Quick Setup

### 1. Get Spotify API Credentials
1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Create a new app
3. Set redirect URI to `http://127.0.0.1:3000` (required but not used)
4. Copy your Client ID and Client Secret

### 2. Set Environment Variables
Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_SPOTIFY_CLIENT_ID=your_client_id_here
SPOTIFY_CLIENT_SECRET=your_client_secret_here
```

**Important:** 
- Restart your development server after adding environment variables
- Make sure there are no extra spaces or quotes around the values

### 3. Add Your Track URLs
In `src/components/portfolio-section.tsx`, update the `spotifyUrls` array:

```typescript
const spotifyUrls = [
  {
    url: "https://open.spotify.com/track/YOUR_TRACK_ID", // Your actual Spotify URL
    services: ["Production", "Mixing", "Mastering"],
    description: "Custom description for this track",
    genre: "Hip Hop"
  },
  // Add more tracks...
];
```

## How It Works

The integration uses a **server-side API route** (`/api/spotify/tracks`) that:
- Handles Spotify authentication securely
- Fetches track data from Spotify's Web API
- Returns formatted data to your portfolio component

## Debugging

If you see "No access token available" error:

1. **Check Environment Variables:**
   ```bash
   # In your terminal, restart the dev server
   npm run dev
   ```

2. **Verify .env.local file:**
   - File should be in your project root (same level as package.json)
   - No extra spaces: `SPOTIFY_CLIENT_SECRET=abc123` ✅
   - No quotes: `SPOTIFY_CLIENT_SECRET="abc123"` ❌

3. **Check Browser Console:**
   - Open browser dev tools
   - Look for detailed error messages
   - Check the Network tab for failed API calls

4. **Test API Route Directly:**
   Visit: `http://localhost:3000/api/spotify/tracks?ids=4iV5W9uYEdYUVa79Axb7Rh`
   - Should return track data or specific error message

## What Gets Automatically Populated

From Spotify API:
- ✅ Track title
- ✅ Artist name
- ✅ Album artwork
- ✅ Duration
- ✅ Release year
- ✅ Preview audio (30-second clips)
- ✅ Official Spotify link

You still control:
- 🎛️ Services provided (mixing, mastering, etc.)
- 📝 Custom descriptions
- 🎵 Genre classification

## Features

- **Live Data**: Automatically syncs with Spotify
- **Fallback**: Shows sample data if API fails
- **Loading States**: Smooth loading animations
- **Real Album Art**: Uses actual Spotify album covers
- **Refresh Button**: Manual refresh capability
- **Server-side Security**: API credentials never exposed to browser

## Tips

1. Use your released tracks for best results
2. Make sure tracks are public on Spotify
3. The app works without API credentials (shows sample data)
4. Album artwork automatically displays from Spotify
5. Always restart your dev server after changing environment variables

## Common Issues

- **"No access token"** → Check .env.local file and restart server
- **"Track IDs not found"** → Verify your Spotify URLs are correct
- **Loading forever** → Check browser console for API errors
- **Sample data showing** → API credentials might be missing/incorrect

That's it! Your portfolio will now showcase your actual Spotify releases with real data. 