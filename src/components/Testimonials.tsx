"use client";
import React from "react";
import musicSchoolTestimonials from "@/data/music_school_testimonials";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Testimonials = () => {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="rounded-md antialiased relative overflow-hidden">
        <h2 className="text-white text-3xl font-bold text-center mb-20 z-10 sm:text-4xl">
          Hear Our Harmony: Voices Of Success
        </h2>
        <InfiniteMovingCards
          items={musicSchoolTestimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Testimonials;
