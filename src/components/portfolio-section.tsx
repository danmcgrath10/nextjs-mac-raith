"use client";

import { motion } from "framer-motion";
import { Play, Pause, ExternalLink, Satellite, Music, Clock, Calendar, Headphones, RefreshCw, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { PortfolioItem } from "@/types";
import { useState, useEffect } from "react";
import { extractTrackId, fetchSpotifyTracks, convertSpotifyToPortfolioItem } from "@/lib/spotify";

// Spotify URLs for your tracks - just add the URLs here!
const spotifyUrls = [
  {
    url: "https://open.spotify.com/track/0nYvxEW4JyFhqjFqBhgiaU?si=ef25c847c8204c77", // Replace with your actual Spotify URLs
    services: ["Production", "Mixing", "Mastering"],
    description: "A bold Hip Hop track inspired by Tyler the Creator's 'IGOR' album.",
    genre: "Hip Hop"
  }
];

export function PortfolioSection() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [isLoadingTracks, setIsLoadingTracks] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);

  // Fetch tracks from Spotify on component mount
  useEffect(() => {
    const loadSpotifyTracks = async () => {
      setIsLoadingTracks(true);
      setError(null);

      try {
        // Extract track IDs from URLs
        const trackIds = spotifyUrls
          .map(item => extractTrackId(item.url))
          .filter((id): id is string => id !== null);

        if (trackIds.length === 0) {
          throw new Error('No valid Spotify track IDs found');
        }

        // Fetch tracks from Spotify API
        const spotifyTracks = await fetchSpotifyTracks(trackIds);

        if (spotifyTracks.length === 0) {
          throw new Error('No tracks could be loaded from Spotify');
        }

        // Convert to portfolio items
        const items: PortfolioItem[] = spotifyTracks.map((track, index) => {
          const config = spotifyUrls[index] || spotifyUrls[0];
          return {
            ...convertSpotifyToPortfolioItem(track, config.services, config.description),
            genre: config.genre || 'Music'
          };
        });

        setPortfolioItems(items);
      } catch (err) {
        console.error('Error loading Spotify tracks:', err);
        setError(err instanceof Error ? err.message : 'Failed to load tracks');
      } finally {
        setIsLoadingTracks(false);
      }
    };

    loadSpotifyTracks();
  }, []);

  const togglePlay = (id: string) => {
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setPlayingId(playingId === id ? null : id);
      setIsLoading(false);
    }, 500);
  };

  const openSpotify = (url: string) => {
    window.open(url, '_blank');
  };

  const refreshTracks = () => {
    setIsLoadingTracks(true);
    window.location.reload();
  };

  const handleTileClick = (id: string) => {
    // On mobile, clicking toggles the info overlay
    if (window.innerWidth < 1024) {
      setSelectedTrack(selectedTrack === id ? null : id);
    }
  };

  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-1/3 w-40 h-40 sm:w-80 sm:h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        {/* Floating Music Notes - Hidden on mobile */}
        <div className="absolute top-1/4 right-1/4 opacity-10 hidden sm:block">
          <Music className="h-8 w-8 text-primary animate-bounce" style={{ animationDelay: '0.5s' }} />
        </div>
        <div className="absolute bottom-1/3 left-1/3 opacity-10 hidden sm:block">
          <Headphones className="h-6 w-6 text-blue-500 animate-bounce" style={{ animationDelay: '1.5s' }} />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mb-4"
          >
            <div className="relative">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30">
                <Music className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>

          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl mb-3">
            Latest Releases
          </h2>
          <p className="text-sm sm:text-base leading-6 text-muted-foreground mb-4">
            Stream my recent work directly from Spotify. Hover or tap to explore each track.
          </p>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Badge variant="outline" className="text-xs">
              <Satellite className="h-3 w-3 mr-1" />
              Live from Spotify
            </Badge>
            {error && (
              <Badge variant="destructive" className="text-xs">
                Using Sample Data
              </Badge>
            )}
          </div>
          
          {/* Refresh Button */}
          <Button 
            variant="outline" 
            size="sm" 
            onClick={refreshTracks}
            disabled={isLoadingTracks}
            className="mb-8 text-xs"
          >
            <RefreshCw className={`h-3 w-3 mr-2 ${isLoadingTracks ? 'animate-spin' : ''}`} />
            {isLoadingTracks ? 'Loading...' : 'Refresh Tracks'}
          </Button>
        </motion.div>

        {/* Loading State */}
        {isLoadingTracks ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4 mt-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="aspect-square rounded-2xl bg-muted animate-pulse"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4 mt-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-square cursor-pointer"
                onClick={() => handleTileClick(item.id)}
              >
                {/* Album Art Tile */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-purple-500/10 to-blue-500/20 border border-border hover:border-primary/40 transition-all duration-300 hover:scale-105">
                  {/* Background Image */}
                  {item.imageUrl && item.imageUrl !== '/api/placeholder/400/400' ? (
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.imageUrl})` }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/30 to-blue-500/30 rounded-full flex items-center justify-center border-2 border-white/20">
                        <Music className="h-6 w-6 sm:h-8 sm:w-8 text-white/80" />
                      </div>
                    </div>
                  )}

                  {/* Hover/Selected Overlay with Track Info */}
                  <div className={`absolute inset-0 bg-black/90 backdrop-blur-sm transition-all duration-300 ${
                    selectedTrack === item.id 
                      ? 'opacity-100' 
                      : 'opacity-0 lg:group-hover:opacity-100'
                  } flex flex-col p-3 sm:p-4`}>
                    
                    {/* Close button for mobile */}
                    {selectedTrack === item.id && (
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedTrack(null);
                        }}
                        className="absolute top-2 right-2 h-6 w-6 text-white/70 hover:text-white lg:hidden"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}

                    {/* Track Info */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-white font-bold text-sm sm:text-base mb-1 line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-white/80 text-xs mb-2 line-clamp-1">
                          {item.artist}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-white/60 mb-3">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {item.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {item.year}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {item.services.map((service) => (
                            <Badge
                              key={service}
                              variant="secondary"
                              className="text-xs bg-white/20 text-white border-0"
                            >
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            togglePlay(item.id);
                          }}
                          className="flex-1 rounded-full bg-primary hover:bg-primary/90 h-8 text-xs"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <div className="w-3 h-3 border border-white/30 border-t-white rounded-full animate-spin" />
                          ) : playingId === item.id ? (
                            <Pause className="h-3 w-3" />
                          ) : (
                            <Play className="h-3 w-3" />
                          )}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation();
                            openSpotify(item.spotifyUrl!);
                          }}
                          className="rounded-full bg-[#1DB954] hover:bg-[#1ed760] text-white border-0 h-8 px-3"
                        >
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Now Playing Indicator */}
                  {playingId === item.id && (
                    <div className="absolute top-2 left-2 flex items-center gap-1 bg-primary/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                      <div className="flex gap-0.5">
                        <div className="w-0.5 h-2 bg-white rounded-full animate-pulse"></div>
                        <div className="w-0.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-0.5 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  )}

                  {/* Play Button Hint */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 lg:group-hover:opacity-0 transition-opacity duration-200 bg-black/40">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Play className="h-4 w-4 text-white ml-0.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="mx-auto max-w-2xl bg-gradient-to-r from-primary/10 via-purple-500/10 to-blue-500/10 rounded-2xl p-6 border border-primary/20 backdrop-blur-sm">
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 flex items-center justify-center">
              <Satellite className="h-5 w-5 text-primary mr-2" />
              Ready to Create Your Next Hit?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
              Every track represents a unique sonic journey. Let&apos;s craft something extraordinary together.
            </p>
            <div className="flex items-center justify-center gap-3 flex-col sm:flex-row">
              <Button 
                size="lg" 
                className="w-full sm:w-auto px-6 group"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <Play className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Start Your Project
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-6 group">
                <Music className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Follow on Spotify
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 