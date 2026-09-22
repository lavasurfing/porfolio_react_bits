import ProfileCard from "../ui/ProfileCard";

const Profile = () => {
  return (
    <section className="w-full bg-black px-3 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-[2rem] border border-white/10 bg-zinc-950/70 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:gap-10 sm:p-8 lg:flex-row lg:items-center lg:p-12">
        <div className="flex w-full justify-center lg:w-[42%]">
          <ProfileCard
            name="Ashish Hansdah"
            title="System Architect"
            handle="javicodes"
            status="Online"
            contactText="Contact Me"
            avatarUrl="src\assets\carasouel_images\profile_pic.png"
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
            I build infrastructure where intelligence meets scale
          </h2>
          <p className="mt-5 text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8 lg:text-lg">
            I&apos;m a system architect and engineer who designs platforms end to end — from secure agentic AI harnesses and Hugging Face–driven workflow automation to GPU-accelerated compute that holds up under real load. I shape systems across microservices, monoliths, and serverless with the same rigor I bring to advanced React interfaces and API performance: observable, resilient, and tuned for burst traffic. My work blends architecture, automation, and product sense — turning complex stacks into experiences that feel polished on the surface and dependable underneath.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {['Agentic AI', 'System Architecture', 'GPU & ML Platforms', 'React Engineering', 'API Performance', 'Platform Automation'].map((item) => (
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
