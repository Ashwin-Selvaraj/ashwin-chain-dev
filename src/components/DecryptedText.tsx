import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useAudio } from '@/hooks/use-audio'

const styles = {
  wrapper: {
    display: 'inline-block',
    whiteSpace: 'pre-wrap',
  },
  srOnly: {
    position: 'absolute' as const,
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0,0,0,0)',
    border: 0,
  },
}

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = '0x123456789abcdefABCDEF!@#$%^&*()_+',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover',
  audioSrc = '/decoding-67661.mp3',
  ...props
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrambling, setIsScrambling] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState(new Set());
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioDisabled, setAudioDisabled] = useState(false);
  const containerRef = useRef(null);
  const animationCompleteRef = useRef(false);
  const audioTimeoutRef = useRef(null);
  const directAudioRef = useRef(null);
  
  // Audio hook for decoding sound
  const { play: playAudio, stop: stopAudio, pause: pauseAudio, isReady } = useAudio({
    src: audioSrc,
    volume: 0.2,
    loop: false
  });

  // Create a direct audio element for more control
  useEffect(() => {
    directAudioRef.current = new Audio(audioSrc);
    directAudioRef.current.volume = 0.2;
    directAudioRef.current.loop = false;
    directAudioRef.current.preload = 'auto';
    
    return () => {
      if (directAudioRef.current) {
        directAudioRef.current.pause();
        directAudioRef.current.currentTime = 0;
        directAudioRef.current = null;
      }
    };
  }, [audioSrc]);

  // Nuclear option - completely disable audio
  const disableAudioCompletely = () => {
    setAudioDisabled(true);
    
    // Clear any existing timeout
    if (audioTimeoutRef.current) {
      clearTimeout(audioTimeoutRef.current);
      audioTimeoutRef.current = null;
    }
    
    // Stop audio from hook
    stopAudio();
    pauseAudio();
    
    // Stop direct audio element
    if (directAudioRef.current) {
      directAudioRef.current.pause();
      directAudioRef.current.currentTime = 0;
      directAudioRef.current.src = ''; // Remove source
    }
    
    setIsAudioPlaying(false);
    animationCompleteRef.current = true;
    
    // Force stop after a short delay to catch any delayed audio
    audioTimeoutRef.current = setTimeout(() => {
      stopAudio();
      pauseAudio();
      if (directAudioRef.current) {
        directAudioRef.current.pause();
        directAudioRef.current.currentTime = 0;
        directAudioRef.current.src = '';
      }
      setIsAudioPlaying(false);
    }, 10);
  };

  // Function to start audio (only if not disabled)
  const startAudio = () => {
    if (audioDisabled || isAudioPlaying || !isReady) return;
    
    // Try direct audio first
    if (directAudioRef.current) {
      directAudioRef.current.currentTime = 0;
      directAudioRef.current.loop = false;
      directAudioRef.current.play().catch(() => {
        // Fallback to hook
        if (!audioDisabled) {
          playAudio();
        }
      });
    } else if (!audioDisabled) {
      playAudio();
    }
    setIsAudioPlaying(true);
  };

  useEffect(() => {
    let interval
    let currentIteration = 0

    const getNextIndex = (revealedSet) => {
      const textLength = text.length
      switch (revealDirection) {
        case 'start':
          return revealedSet.size
        case 'end':
          return textLength - 1 - revealedSet.size
        case 'center': {
          const middle = Math.floor(textLength / 2)
          const offset = Math.floor(revealedSet.size / 2)
          const nextIndex =
            revealedSet.size % 2 === 0
              ? middle + offset
              : middle - offset - 1

          if (nextIndex >= 0 && nextIndex < textLength && !revealedSet.has(nextIndex)) {
            return nextIndex
          }

          for (let i = 0; i < textLength; i++) {
            if (!revealedSet.has(i)) return i
          }
          return 0
        }
        default:
          return revealedSet.size
      }
    }

    const availableChars = useOriginalCharsOnly
      ? Array.from(new Set(text.split(''))).filter((char) => char !== ' ')
      : characters.split('')

    const shuffleText = (originalText, currentRevealed) => {
      if (useOriginalCharsOnly) {
        const positions = originalText.split('').map((char, i) => ({
          char,
          isSpace: char === ' ',
          index: i,
          isRevealed: currentRevealed.has(i),
        }))

        const nonSpaceChars = positions
          .filter((p) => !p.isSpace && !p.isRevealed)
          .map((p) => p.char)

        for (let i = nonSpaceChars.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1))
            ;[nonSpaceChars[i], nonSpaceChars[j]] = [nonSpaceChars[j], nonSpaceChars[i]]
        }

        let charIndex = 0
        return positions
          .map((p) => {
            if (p.isSpace) return ' '
            if (p.isRevealed) return originalText[p.index]
            return nonSpaceChars[charIndex++]
          })
          .join('')
      } else {
        return originalText
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' '
            if (currentRevealed.has(i)) return originalText[i]
            return availableChars[Math.floor(Math.random() * availableChars.length)]
          })
          .join('')
      }
    }

    if (isHovering && !animationCompleteRef.current && !audioDisabled) {
      setIsScrambling(true)
      
      // Start audio
      startAudio();
      
      interval = setInterval(() => {
        setRevealedIndices((prevRevealed) => {
          if (sequential) {
            if (prevRevealed.size < text.length) {
              const nextIndex = getNextIndex(prevRevealed)
              const newRevealed = new Set(prevRevealed)
              newRevealed.add(nextIndex)
              setDisplayText(shuffleText(text, newRevealed))
              return newRevealed
            } else {
              clearInterval(interval)
              setIsScrambling(false)
              // Completely disable audio when animation completes
              disableAudioCompletely()
              return prevRevealed
            }
          } else {
            setDisplayText(shuffleText(text, prevRevealed))
            currentIteration++
            if (currentIteration >= maxIterations) {
              clearInterval(interval)
              setIsScrambling(false)
              // Completely disable audio when animation completes
              disableAudioCompletely()
              setDisplayText(text)
            }
            return prevRevealed
          }
        })
      }, speed)
    } else if (!isHovering) {
      setDisplayText(text)
      setRevealedIndices(new Set())
      setIsScrambling(false)
      animationCompleteRef.current = false;
      setAudioDisabled(false); // Re-enable audio for next hover
      
      // Stop audio when not hovering
      if (isAudioPlaying) {
        stopAudio();
        pauseAudio();
        if (directAudioRef.current) {
          directAudioRef.current.pause();
          directAudioRef.current.currentTime = 0;
        }
        setIsAudioPlaying(false);
      }
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [
    isHovering,
    text,
    speed,
    maxIterations,
    sequential,
    revealDirection,
    characters,
    useOriginalCharsOnly,
    isReady,
    isAudioPlaying,
    audioDisabled,
  ])

  // Force stop audio when scrambling stops, regardless of hover state
  useEffect(() => {
    if (!isScrambling && isAudioPlaying) {
      disableAudioCompletely()
    }
  }, [isScrambling, isAudioPlaying])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      disableAudioCompletely()
    }
  }, [])

  useEffect(() => {
    if (animateOn !== 'view') return

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsHovering(true)
          setHasAnimated(true)
        }
      })
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const currentRef = containerRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [animateOn, hasAnimated])

  const hoverProps =
    animateOn === 'hover'
      ? {
        onMouseEnter: () => {
          setIsHovering(true);
        },
        onMouseLeave: () => {
          setIsHovering(false);
        },
      }
      : {}

  return (
    <motion.span className={parentClassName} ref={containerRef} style={styles.wrapper} {...hoverProps} {...props}>
      <span style={styles.srOnly}>{displayText}</span>

      <span aria-hidden="true">
        {displayText.split('').map((char, index) => {
          const isRevealedOrDone =
            revealedIndices.has(index) || !isScrambling || !isHovering

          return (
            <span
              key={index}
              className={isRevealedOrDone ? className : encryptedClassName}
            >
              {char}
            </span>
          )
        })}
      </span>
      

    </motion.span>
  )
} 