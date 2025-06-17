"use client";

import { motion } from "framer-motion";
import { Play, ExternalLink, Satellite, Music, Clock, Calendar, Headphones, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { PortfolioItem } from "@/types";
import { useState, useEffect } from "react";
import { extractTrackId, fetchSpotifyTracks, convertSpotifyToPortfolioItem } from "@/lib/spotify";
import Image from "next/image";
import React from "react";

// Spotify URLs for your tracks - just add the URLs here!
const spotifyUrls = [
  {
    url: "https://open.spotify.com/track/0nYvxEW4JyFhqjFqBhgiaU?si=ef25c847c8204c77", // Replace with your actual Spotify URLs
    services: ["Production", "Mixing", "Mastering"],
    description: "A bold Hip Hop track inspired by Tyler the Creator's 'IGOR' album.",
    genre: "Hip Hop"
  }
];

/**
 * PortfolioSection displays a grid of recent audio projects with Spotify integration.
 * Mobile-first, accessible, and optimized for performance.
 */
export function PortfolioSection() {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [isLoadingTracks, setIsLoadingTracks] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  const openSpotify = (url: string) => {
    window.open(url, '_blank');
  };

  // Memoized grid item for performance
  const PortfolioGridItem = React.memo(function PortfolioGridItem({ item, index }: { item: PortfolioItem; index: number }) {
    return (
      <motion.div
        key={item.id}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        viewport={{ once: true }}
        className="group relative aspect-square"
      >
        {/* Album Art Tile */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-purple-500/10 to-blue-500/20 border border-border hover:border-primary/40 transition-all duration-300">
          {/* Optimized Album Art */}
          {item.imageUrl && item.imageUrl !== '/api/placeholder/400/400' ? (
            <Image
              src={item.imageUrl}
              alt={`${item.title} album art`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 16vw"
              className="object-cover object-center"
              priority={index < 2}
              loading={index < 2 ? 'eager' : 'lazy'}
              draggable={false}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/30 to-blue-500/30 rounded-full flex items-center justify-center border-2 border-white/20">
                <Music className="h-6 w-6 sm:h-8 sm:w-8 text-white/80" />
              </div>
            </div>
          )}

          {/* Content Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 flex flex-col justify-end">
            <div className="space-y-2">
              <h3 className="text-white font-bold text-sm sm:text-base line-clamp-2">{item.title}</h3>
              <p className="text-white/80 text-xs line-clamp-1">{item.artist}</p>
              
              <div className="flex items-center gap-2 text-xs text-white/60">
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{item.duration}</span>
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{item.year}</span>
              </div>

              <div className="flex flex-wrap gap-1 mb-3">
                {item.services.map((service) => (
                  <Badge key={service} variant="secondary" className="text-xs bg-white/20 text-white border-0">
                    {service}
                  </Badge>
                ))}
              </div>

              {/* Only Spotify Button */}
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  aria-label="Open in Spotify"
                  onClick={() => openSpotify(item.spotifyUrl!)}
                  className="rounded-full bg-[#1DB954] hover:bg-[#1ed760] text-white border-0 h-8 px-3 w-full"
                >
                  <ExternalLink className="h-3 w-3 mr-2" />
                  Listen on Spotify
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  });

  // Early return for loading
  if (isLoadingTracks) {
    return (
      <section id="portfolio" className="py-8 sm:py-12 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mt-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="aspect-square rounded-2xl bg-muted animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  // Early return for error
  if (error) {
    return (
      <section id="portfolio" className="py-8 sm:py-12 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-500">{error}</p>
        </div>
      </section>
    );
  }

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
            onClick={() => {
              setIsLoadingTracks(true);
              window.location.reload();
            }}
            disabled={isLoadingTracks}
            className="mb-8 text-xs"
          >
            <RefreshCw className={`h-3 w-3 mr-2 ${isLoadingTracks ? 'animate-spin' : ''}`} />
            {isLoadingTracks ? 'Loading...' : 'Refresh Tracks'}
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4 mt-8">
          {portfolioItems.map((item, index) => (
            <PortfolioGridItem key={item.id} item={item} index={index} />
          ))}
        </div>

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
              {/* <Button variant="outline" size="lg" className="w-full sm:w-auto px-6 group">
                <Music className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Follow on Spotify
              </Button> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 