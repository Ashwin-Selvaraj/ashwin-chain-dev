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
  const [hasPlayedAudio, setHasPlayedAudio] = useState(false);
  const containerRef = useRef(null);
  
  // Audio hook for decoding sound
  const { play: playAudio, stop: stopAudio, isReady, hasUserInteracted } = useAudio({
    src: audioSrc,
    volume: 0.2,
    loop: true
  });
  


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

    if (isHovering) {
      setIsScrambling(true)
      if (isReady && hasUserInteracted && !hasPlayedAudio) {
        playAudio() // Start audio when scrambling begins
        setHasPlayedAudio(true) // Mark as played for this hover session
      }
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
              stopAudio() // Stop audio when sequential animation completes
              return prevRevealed
            }
          } else {
            setDisplayText(shuffleText(text, prevRevealed))
            currentIteration++
            if (currentIteration >= maxIterations) {
              clearInterval(interval)
              setIsScrambling(false)
              stopAudio() // Stop audio when non-sequential animation completes
              setDisplayText(text)
            }
            return prevRevealed
          }
        })
      }, speed)
    } else {
      setDisplayText(text)
      setRevealedIndices(new Set())
      setIsScrambling(false)
      setHasPlayedAudio(false) // Reset audio flag when not hovering
      console.log('Stopping audio - not hovering');
      stopAudio() // Stop audio when not hovering
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
  ])

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