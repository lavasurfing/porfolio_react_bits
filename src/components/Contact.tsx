import Galaxy from "../ui/Galaxy";

const EMAIL = "ashishhansdah0@gmail.com";

const Contact = () => {
  return (
    <section id="contact" className="relative min-h-[70vh] w-full overflow-hidden text-white sm:min-h-[600px]">
      <div className="absolute inset-0">
        <Galaxy
          mouseRepulsion
          mouseInteraction
          density={1}
          glowIntensity={0.3}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
        />
      </div>

      <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center gap-10 px-4 py-16 sm:min-h-[600px]">
        <div className="pointer-events-none text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500 sm:text-sm">Get in touch</p>
          <h2 className="mt-4 text-2xl font-semibold sm:text-3xl lg:text-4xl">
            Let&apos;s build something together
          </h2>
        </div>

        <a
          href={`mailto:${EMAIL}`}
          className="group inline-flex flex-col items-center gap-3 rounded-2xl bg-black/40 px-8 py-5 text-center backdrop-blur-md transition hover:bg-black/55 sm:px-10 sm:py-6"
        >
          <span className="text-xs uppercase tracking-[0.35em] text-zinc-400 transition group-hover:text-zinc-300">
            Email
          </span>
          <span className="text-base font-medium text-white sm:text-lg">{EMAIL}</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
