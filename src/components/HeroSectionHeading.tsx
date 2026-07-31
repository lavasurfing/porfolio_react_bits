import SplitText from "./SplitText";
  
// <RotatingText
//   texts={['React', 'Bits', 'Is', 'Cool!']}
//   mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
//   staggerFrom="last"
//   initial={{ y: "100%" }}
//   animate={{ y: 0 }}
//   exit={{ y: "-120%" }}
//   staggerDuration={0.025}
//   splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
//   transition={{ type: "spring", damping: 30, stiffness: 400 }}
//   rotationInterval={2000}
//   splitBy="characters"
//   auto
//   loop
// />

const HeroSectionHeading = () => {

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (

    <>
        <SplitText
          text="Ashish Hansdah"
          className="text-4xl font-semibold text-center text-white"
          delay={50}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        //   showCallback
        />
        <br></br>
      <SplitText
        text="Engineering production-grade AI infrastructure end-to-end"
        className="text-4xl font-semibold text-center text-white"
        delay={50}
        duration={1.25}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      //   showCallback
      />
      </>
      

    )
}

export default HeroSectionHeading;