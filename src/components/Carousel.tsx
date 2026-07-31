import { useEffect, useState } from "react";

type CarouselSlide = {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
};

const slides: CarouselSlide[] = [
  {
    title: "Immersive digital experiences",
    subtitle: "Visual storytelling",
    description:
      "Craft polished interfaces with bold motion, layered depth, and a cinematic finish that feels modern from the first interaction.",
    highlights: ["Motion-first UI", "Elegant typography", "High contrast layouts"],
    image:
      "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 40%, rgba(0,0,0,0.2) 100%), radial-gradient(circle at 20% 20%, #8b5cf6 0%, transparent 35%), linear-gradient(120deg, #111827 0%, #1f2937 60%, #0f766e 100%)",
  },
  {
    title: "Bold product launches",
    subtitle: "Launch-ready branding",
    description:
      "Turn product reveals into memorable moments with editorial composition, striking imagery, and seamless content pacing.",
    highlights: ["Launch campaigns", "Brand systems", "Conversion-focused flow"],
    image:
      "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 35%, rgba(0,0,0,0.18) 100%), radial-gradient(circle at 80% 20%, #f59e0b 0%, transparent 35%), linear-gradient(120deg, #1f2937 0%, #111827 50%, #7c2d12 100%)",
  },
  {
    title: "Thoughtful portfolio design",
    subtitle: "Creative direction",
    description:
      "Present work with a refined rhythm that balances storytelling, clarity, and a confident visual identity.",
    highlights: ["Showcase strategy", "Interactive sections", "Flexible composition"],
    image:
      "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.04) 40%, rgba(0,0,0,0.2) 100%), radial-gradient(circle at 50% 80%, #22c55e 0%, transparent 35%), linear-gradient(130deg, #111827 0%, #0f172a 60%, #14532d 100%)",
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="w-full bg-transparent px-3 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:gap-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500 sm:text-sm">Featured stories</p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl lg:text-4xl">A smooth carousel with editorial card layouts</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm transition hover:bg-white/10"
              aria-label="Previous slide"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm transition hover:bg-white/10"
              aria-label="Next slide"
            >
              →
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/80 shadow-[0_0_60px_rgba(0,0,0,0.45)]">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {slides.map((slide) => (
              <article
                key={slide.title}
                className="grid min-w-full grid-cols-1 lg:grid-cols-2"
              >
                <div className="relative min-h-[320px] lg:min-h-[460px]">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: slide.image }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-sm backdrop-blur">
                    {slide.subtitle}
                  </div>
                </div>

                <div className="flex flex-col justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-5 sm:p-8 lg:p-14">
                  <p className="text-xs uppercase tracking-[0.35em] text-zinc-500 sm:text-sm">Carousel card</p>
                  <h3 className="mt-4 text-2xl font-semibold sm:text-3xl lg:text-4xl">{slide.title}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-300 sm:text-base">{slide.description}</p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {slide.highlights.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-zinc-500">Swipe through the story cards</p>
          <div className="flex gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition ${index === activeIndex ? "w-8 bg-white" : "w-2.5 bg-white/30"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
