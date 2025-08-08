import { useRef, useEffect, useState } from 'react';

interface UseAudioOptions {
  src: string;
  volume?: number;
  loop?: boolean;
}

export const useAudio = ({ src, volume = 0.3, loop = false }: UseAudioOptions) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('Creating audio with src:', src);
      audioRef.current = new Audio(src);
      audioRef.current.volume = volume;
      audioRef.current.loop = loop;
      
      // Add event listeners for debugging
      audioRef.current.addEventListener('loadstart', () => console.log('Audio loadstart'));
      audioRef.current.addEventListener('canplay', () => {
        console.log('Audio canplay');
        setIsReady(true);
      });
      audioRef.current.addEventListener('canplaythrough', () => console.log('Audio canplaythrough'));
      audioRef.current.addEventListener('error', (e) => console.error('Audio error:', e));
      
      console.log('Audio created successfully');
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [src, volume, loop]);

  const play = () => {
    if (audioRef.current && isReady) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((error) => {
        console.error('Audio play error:', error);
      });
      console.log('Audio started playing');
    } else {
      console.log('Audio ref is null or not ready');
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

  return { play, pause, stop, isReady };
}; 