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
      console.log('Creating audio with src:', src);
      audioRef.current = new Audio(src);
      audioRef.current.volume = volume;
      audioRef.current.loop = loop;
      audioRef.current.preload = 'auto';
      
      // Add event listeners for debugging
      audioRef.current.addEventListener('loadstart', () => console.log('Audio loadstart'));
      audioRef.current.addEventListener('canplay', () => {
        console.log('Audio canplay');
        setIsReady(true);
      });
      audioRef.current.addEventListener('canplaythrough', () => console.log('Audio canplaythrough'));
      audioRef.current.addEventListener('error', (e) => console.error('Audio error:', e));
      audioRef.current.addEventListener('load', () => console.log('Audio loaded'));
      audioRef.current.addEventListener('loadeddata', () => console.log('Audio loadeddata'));
      
      console.log('Audio created successfully');
    }

    // Add user interaction listener
    const handleUserInteraction = () => {
      console.log('User interaction detected');
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
    console.log('Attempting to play audio...');
    console.log('audioRef.current:', !!audioRef.current);
    console.log('isReady:', isReady);
    console.log('hasUserInteracted:', hasUserInteracted);
    
    if (audioRef.current && isReady && hasUserInteracted) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().then(() => {
        console.log('Audio started playing successfully');
      }).catch((error) => {
        console.error('Audio play error:', error);
      });
    } else {
      console.log('Cannot play audio - conditions not met');
      console.log('audioRef.current:', !!audioRef.current);
      console.log('isReady:', isReady);
      console.log('hasUserInteracted:', hasUserInteracted);
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
      console.log('Audio stopped');
    }
  };

  return { play, pause, stop, isReady, hasUserInteracted };
}; 