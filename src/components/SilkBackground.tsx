import Silk from './Silk';

interface SilkBackgroundProps {
  speed?: number;
  scale?: number;
  color?: string;
  noiseIntensity?: number;
  rotation?: number;
  className?: string;
}

const SilkBackground = ({
  speed = 5,
  scale = 1,
  color = "#7B7481",
  noiseIntensity = 1.5,
  rotation = 0,
  className = "",
}: SilkBackgroundProps) => {
  return (
    <div className={`absolute inset-0 z-0 w-full h-full ${className}`}>
      <Silk
        speed={speed}
        scale={scale}
        color={color}
        noiseIntensity={noiseIntensity}
        rotation={rotation}
      />
    </div>
  );
};

export default SilkBackground; 