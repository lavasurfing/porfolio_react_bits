import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import HeroSectionHeading from "../components/HeroSectionHeading";
import Carousel from "../components/Carousel";
import Profile from "../components/Profile";
import Contact from "../components/Contact";

const Home = () => {
    return (
        <>
            <main className="relative min-h-screen w-full overflow-x-hidden bg-black pt-20 sm:pt-24">
                <Navbar />
                <section className="relative flex min-h-[80vh] w-full items-center justify-center px-3 text-center sm:min-h-[85vh] sm:px-4">
                    <div className="absolute inset-0 z-0">
                        <HeroSection />
                    </div>
                    <div className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center">
                        <HeroSectionHeading />
                    </div>
                </section>
            </main>
            <section className="bg-black">
                <Carousel />
            </section>
            <section className="bg-black">
                <Profile />
            </section>
            <section className="bg-black">
                <Contact />
            </section>
        </>
    );
};

export default Home;