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
  const [isReadingMore, setIsReadingMore] = useState(false);
  const slides = CarasouelContents;

  useEffect(() => {
    if (isReadingMore) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [slides.length, isReadingMore]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    setIsReadingMore(false);
  };

  const handlePrev = () => {
    goToSlide((activeIndex - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    goToSlide((activeIndex + 1) % slides.length);
  };

  return (
    <section id="project" className="w-full bg-transparent px-5 py-8 text-white sm:px-6 lg:px-8">
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

        <div className="relative w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950/80 shadow-[0_0_60px_rgba(0,0,0,0.45)] sm:rounded-[2rem]">
          <div
            className="flex w-full transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {slides.map((slide, index) => {
              const visual = slideVisuals[slide.id] ?? { subtitle: "Portfolio" };
              const bulletPoints = slide.points.filter((point) => point.includes(" — "));
              const summaryPoints = slide.points.filter((point) => !point.includes(" — "));
              const techTags = parseTechTags(slide.techStack);
              const showDetails = isReadingMore && index === activeIndex;

              return (
                <article
                  key={slide.id}
                  className="grid w-full shrink-0 basis-full grid-cols-1 lg:h-[575px] lg:grid-cols-2"
                >
                  <div className="order-2 flex min-h-0 flex-col bg-gradient-to-br from-zinc-950 via-zinc-900 to-black lg:order-2 lg:h-full lg:overflow-hidden">
                    <div className="flex flex-1 flex-col p-5 sm:p-8 lg:min-h-0 lg:overflow-y-auto lg:p-10 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.2)_transparent]">
                      <p className="text-xs uppercase tracking-[0.35em] text-zinc-500 sm:text-sm">
                        Project {String(slide.id).padStart(2, "0")}
                      </p>
                      <h3 className="mt-3 text-xl font-semibold leading-tight sm:text-2xl lg:text-3xl">
                        {getDisplayTitle(slide.title)}
                      </h3>
                      <p
                        className={`mt-4 text-sm leading-7 text-zinc-300 sm:text-[0.95rem] ${
                          showDetails ? "" : "line-clamp-3 lg:line-clamp-none"
                        }`}
                      >
                        {slide.description}
                      </p>

                      <div className={showDetails ? "mt-5 block" : "mt-5 hidden lg:block"}>
                        {bulletPoints.length > 0 && (
                          <ul className="space-y-3">
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

                      <button
                        type="button"
                        className="mt-5 self-start rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-zinc-200 transition hover:bg-white/10 lg:hidden"
                        aria-expanded={showDetails}
                        onClick={() => {
                          if (index !== activeIndex) return;
                          setIsReadingMore((prev) => !prev);
                        }}
                      >
                        {showDetails ? "Show less" : "Read more"}
                      </button>
                    </div>

                    <div
                      className={`border-t border-white/10 bg-black/20 p-5 sm:p-8 lg:block lg:p-10 lg:pt-5 ${
                        showDetails ? "block" : "hidden"
                      }`}
                    >
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

                  <div className="relative order-1 aspect-[16/9] shrink-0 overflow-hidden lg:order-1 lg:aspect-auto lg:h-full lg:min-h-0">
                    <img
                      src={slide.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/35 to-black/10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 sm:bottom-6 sm:left-6 sm:right-6">
                      <div className="rounded-full border border-white/20 bg-black/25 px-4 py-2 text-sm backdrop-blur">
                        {visual.subtitle}
                      </div>
                      <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs tracking-[0.25em] text-zinc-300 backdrop-blur">
                        {String(slide.id).padStart(2, "0")}
                      </span>
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
                onClick={() => goToSlide(index)}
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
