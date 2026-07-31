import ProfileCard from "../ui/ProfileCard";

const Profile = () => {
  return (
    <section className="w-full bg-black px-3 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-[2rem] border border-white/10 bg-zinc-950/70 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:gap-10 sm:p-8 lg:flex-row lg:items-center lg:p-12">
        <div className="flex w-full justify-center lg:w-[42%]">
          <ProfileCard
            name="Javi A. Torres"
            title="Software Engineer"
            handle="javicodes"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/path/to/avatar.jpg"
            showUserInfo={false}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log("Contact clicked")}
            behindGlowColor="rgba(125, 190, 255, 0.67)"
            iconUrl="/assets/demo/iconpattern.png"
            behindGlowEnabled
            innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
          />
        </div>

        <div className="flex-1 lg:pl-6">
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500 sm:text-sm">About me</p>
          <h2 className="mt-4 text-2xl font-semibold sm:text-3xl lg:text-4xl">
            I build experiences that feel as good as they look.
          </h2>
          <p className="mt-5 text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8 lg:text-lg">
            I’m a creative developer focused on crafting bold, interactive digital experiences with thoughtful motion, refined visuals, and a strong sense of storytelling. My work blends modern UI design with a product-minded approach, turning ideas into immersive interfaces that feel polished and memorable.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {['UI Engineering', 'Interactive Design', 'Motion Systems', 'Frontend Development'].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-200">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
