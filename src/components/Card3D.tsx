import { useEffect, useRef } from 'react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
}

const Card3D = ({ children, className = '' }: Card3DProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    let bounds: DOMRect;

    const rotateToMouse = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2
      };
      const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

      card.style.transform = `
        scale3d(1.07, 1.07, 1.07)
        rotate3d(
          ${center.y / 100},
          ${-center.x / 100},
          0,
          ${Math.log(distance) * 2}deg
        )
      `;

      glow.style.backgroundImage = `
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width / 2}px
          ${center.y * 2 + bounds.height / 2}px,
          rgba(255, 255, 255, 0.3),
          rgba(0, 0, 0, 0.1)
        )
      `;
    };

    const handleMouseEnter = () => {
      bounds = card.getBoundingClientRect();
      document.addEventListener('mousemove', rotateToMouse);
    };

    const handleMouseLeave = () => {
      document.removeEventListener('mousemove', rotateToMouse);
      card.style.transform = '';
      glow.style.backgroundImage = '';
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousemove', rotateToMouse);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`card-3d ${className}`}
      style={{
        perspective: '1500px',
        transformStyle: 'preserve-3d',
        transition: 'transform 300ms ease-out, box-shadow 300ms ease-out',
      }}
    >
      <div 
        ref={glowRef}
        className="glow-overlay"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
          borderRadius: 'inherit',
          backgroundImage: 'radial-gradient(circle at 50% -20%, rgba(255, 255, 255, 0.15), rgba(0, 0, 0, 0.1))',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      {children}
    </div>
  );
};

export default Card3D;