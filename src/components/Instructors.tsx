"use client";

import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import musicSchoolInstructors from "@/data/music_school_instructors";

const Instructors = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <h2 className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Meet Our Instructors
        </h2>
        <p className="mt-4 text-xl leading-relaxed text-gray-300 text-center">
          Our instructors don't just teach you music.<br /> They guide you in
          discovering and expressing your inner artistry.
        </p>
        <div className="flex flex-row items-center justify-center mt-10 mb-10 w-full">
          <AnimatedTooltip items={musicSchoolInstructors} />
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default Instructors;
