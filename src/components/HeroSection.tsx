import WebThreads from '../ui/WebThreads';

function HeroSection() {
  return (
    <div className="relative h-full w-full">
      <WebThreads
        color1="#5227FF"
        color2="#FF9FFC"
        color3="#FFFFFF"
        speed={0.2}
        threadCount={6}
        frequency={5.0}
        spread={0.18}
        taper={1.0}
        position={0.5}
        fanMode="center"
        glow={0.02}
        falloff={0.6}
        thickness={1.1}
        brightness={0.6}
        opacity={1.0}
        mirror
        shimmer={false}
        grain
        grainIntensity={0.05}
        mouseInteraction
        mouseStrength={0.3}
      />
    </div>
  );
}

export default HeroSection;
