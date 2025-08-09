import { useRef, useEffect, useState } from 'react';

interface UseAudioOptions {
  src: string;
  volume?: number;
  loop?: boolean;
}

// Global state to track user interaction across all audio instances
let globalUserInteracted = false;

// Check localStorage for existing user interaction
if (typeof window !== 'undefined') {
  const stored = localStorage.getItem('userInteracted');
  if (stored === 'true') {
    globalUserInteracted = true;
  }
}

export const useAudio = ({ src, volume = 0.3, loop = false }: UseAudioOptions) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(globalUserInteracted);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Create audio element
      audioRef.current = new Audio();
      audioRef.current.volume = volume;
      audioRef.current.loop = loop;
      audioRef.current.preload = 'auto';
      
          // Add event listeners
    audioRef.current.addEventListener('loadstart', () => console.log('Audio loadstart'));
    audioRef.current.addEventListener('canplay', () => {
      console.log('Audio canplay');
      setIsReady(true);
    });
    audioRef.current.addEventListener('canplaythrough', () => console.log('Audio canplaythrough'));
    audioRef.current.addEventListener('error', (e) => console.error('Audio error:', e));
    audioRef.current.addEventListener('load', () => console.log('Audio loaded'));
    audioRef.current.addEventListener('loadeddata', () => console.log('Audio loadeddata'));
      
      // Set source after adding listeners
      audioRef.current.src = src;
    }

    // Add user interaction listener
    const handleUserInteraction = () => {
      console.log('User interaction detected');
      globalUserInteracted = true;
      setHasUserInteracted(true);
      // Store in localStorage for persistence
      localStorage.setItem('userInteracted', 'true');
      // Don't remove listeners immediately, keep them for a while
      setTimeout(() => {
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('keydown', handleUserInteraction);
        document.removeEventListener('mousemove', handleUserInteraction);
      }, 5000); // Keep listeners for 5 seconds
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);
    document.addEventListener('mousemove', handleUserInteraction);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
      document.removeEventListener('mousemove', handleUserInteraction);
    };
  }, [src, volume, loop]);

  const play = () => {
    // Always try to play audio, regardless of user interaction
    if (audioRef.current && isReady) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((error) => {
        console.error('Audio play error:', error);
        // Try again without any conditions
        if (audioRef.current) {
          audioRef.current.play().catch((fallbackError) => {
            console.error('Fallback audio play also failed:', fallbackError);
          });
        }
      });
    }
  };
  
  // Auto-enable audio immediately
  useEffect(() => {
    if (isReady) {
      setHasUserInteracted(true);
      globalUserInteracted = true;
      localStorage.setItem('userInteracted', 'true');
    }
  }, [isReady]);

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return { play, pause, stop, isReady, hasUserInteracted };
}; 