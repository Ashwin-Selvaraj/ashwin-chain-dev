import { useRef, useEffect, useState } from 'react';

interface UseAudioOptions {
  src: string;
  volume?: number;
  loop?: boolean;
}

export const useAudio = ({ src, volume = 0.3, loop = false }: UseAudioOptions) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Create audio element
      audioRef.current = new Audio();
      audioRef.current.volume = volume;
      audioRef.current.loop = loop;
      audioRef.current.preload = 'auto';
      
      // Add event listeners
      audioRef.current.addEventListener('canplay', () => {
        setIsReady(true);
      });
      audioRef.current.addEventListener('error', (e) => console.error('Audio error:', e));
      
      // Set source after adding listeners
      audioRef.current.src = src;
    }

    // Add user interaction listener
    const handleUserInteraction = () => {
      setHasUserInteracted(true);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
      document.removeEventListener('mousemove', handleUserInteraction);
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
    if (audioRef.current && isReady && hasUserInteracted) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((error) => {
        console.error('Audio play error:', error);
        // Fallback: try to play without user interaction check in case of autoplay policy issues
        if (audioRef.current) {
          audioRef.current.play().catch((fallbackError) => {
            console.error('Fallback audio play also failed:', fallbackError);
          });
        }
      });
    } else {
      // Fallback: try to play even without user interaction
      if (audioRef.current && isReady) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch((error) => {
          console.error('Fallback audio play failed:', error);
        });
      }
    }
  };

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