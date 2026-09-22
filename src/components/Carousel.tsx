import { useEffect, useState } from "react";
import CarasouelContents from "../assets/carasouel_data/CarasouelContents";

const slideVisuals: Record<number, { subtitle: string }> = {
  1: { subtitle: "Agentic AI" },
  2: { subtitle: "Workflow Automation" },
  3: { subtitle: "GPU Infrastructure" },
  4: { subtitle: "React Engineering" },
  5: { subtitle: "API Performance" },
  6: { subtitle: "System Architecture" },
};

const getDisplayTitle = (title: string) => title.replace(/^\d+\.\s*/, "");

const splitPoint = (point: string) => {
  const separatorIndex = point.indexOf(" — ");
  if (separatorIndex === -1) return { label: null, text: point };

  return {
    label: point.slice(0, separatorIndex),
    text: point.slice(separatorIndex + 3),
  };
};

const parseTechTags = (techStack: string) =>
  techStack
    .replace(/^Tech:\s*/i, "")
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = CarasouelContents;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [slides.length]);

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
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500 sm:text-sm">Portfolio</p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl lg:text-4xl">
              Projects built for scale, security, and speed
            </h2>
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
            {slides.map((slide) => {
              const visual = slideVisuals[slide.id] ?? { subtitle: "Portfolio" };
              const bulletPoints = slide.points.filter((point) => point.includes(" — "));
              const summaryPoints = slide.points.filter((point) => !point.includes(" — "));
              const techTags = parseTechTags(slide.techStack);

              return (
                <article
                  key={slide.id}
                  className="grid min-w-full grid-cols-1 lg:h-[575px] lg:grid-cols-2"
                >
                  <div className="relative h-[350px] shrink-0 overflow-hidden sm:h-[400px] lg:h-full lg:min-h-0">
                    <img
                      src={slide.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/35 to-black/10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent lg:hidden" />

                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                      <div className="rounded-full border border-white/20 bg-black/25 px-4 py-2 text-sm backdrop-blur">
                        {visual.subtitle}
                      </div>
                      <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs tracking-[0.25em] text-zinc-300 backdrop-blur">
                        {String(slide.id).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  <div className="flex min-h-0 flex-col bg-gradient-to-br from-zinc-950 via-zinc-900 to-black lg:h-full lg:overflow-hidden">
                    <div className="flex flex-1 flex-col overflow-y-auto p-5 sm:p-8 lg:p-10 lg:min-h-0 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.2)_transparent]">
                      <p className="text-xs uppercase tracking-[0.35em] text-zinc-500 sm:text-sm">
                        Project {String(slide.id).padStart(2, "0")}
                      </p>
                      <h3 className="mt-3 text-xl font-semibold leading-tight sm:text-2xl lg:text-3xl">
                        {getDisplayTitle(slide.title)}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-zinc-300 sm:text-[0.95rem]">
                        {slide.description}
                      </p>

                      {bulletPoints.length > 0 && (
                        <ul className="mt-5 space-y-3">
                          {bulletPoints.map((point) => {
                            const { label, text } = splitPoint(point);

                            return (
                              <li
                                key={point}
                                className="flex gap-3 text-sm leading-6 text-zinc-300 sm:text-[0.95rem]"
                              >
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                                <span>
                                  {label ? (
                                    <>
                                      <span className="font-medium text-white">{label}</span>
                                      <span className="text-zinc-400"> — {text}</span>
                                    </>
                                  ) : (
                                    text
                                  )}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      )}

                      {summaryPoints.map((point) => (
                        <p
                          key={point}
                          className="mt-5 border-l border-white/10 pl-4 text-sm italic leading-7 text-zinc-400 sm:text-[0.95rem]"
                        >
                          {point}
                        </p>
                      ))}
                    </div>

                    <div className="border-t border-white/10 bg-black/20 p-5 sm:p-8 lg:p-10 lg:pt-5">
                      <p className="mb-3 text-xs uppercase tracking-[0.3em] text-zinc-500">Tech stack</p>
                      <div className="flex flex-wrap gap-2">
                        {techTags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200 sm:text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-zinc-500">
            {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </p>
          <div className="flex gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
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
