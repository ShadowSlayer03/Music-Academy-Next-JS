import Link from "next/link";
import { Spotlight } from "./ui/spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto bg-black md:h-[50rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        orientation="1"
        className="-top-40 left-0 md:left-32 md:-top-20"
        fill="white"
      />
      <Spotlight
        orientation="2"
        className="bottom-0 right-0 md:right-32 md:bottom-0"
        fill="white"
      />

      <div className=" p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Unleash Your Musical Potential
        </h1>
        <p className="mt-10 mb-10 font-normal text-base md:text-lg text-neutral-300 max-w-3xl mx-auto">
          Welcome to Harmony Music Academy, where passion meets excellence.{" "}
          <br /> Whether you're a beginner or an expert, our top-notch
          instructors and facilities provide the ideal environment for your
          musical journey. Join us and let your talents shine!
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
