"use client";

import { Experience } from "./experience";
import { JOB_EXPERIENCE } from "@/app/config/experience"; // Assuming you have the JOB_EXPERIENCE data defined here
import AboutSection from "./aboutSection";
import Education from "./education";
import { motion } from "framer-motion";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function About() {

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },  // Start offscreen with zero opacity
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }, // Fade in and slide up to normal position
  };

  return (
    <motion.div className="bg-background w-full h-[90vh] mt-[10vh]"
    initial="hidden"
          animate="visible"
          variants={fadeInVariant}>
      <MaxWidthWrapper>
      <h1 className="text-4xl font-bold text-center mb-10 mt-6">About</h1>
      <AboutSection />

      <h1 className="text-4xl font-bold text-center mb-10 mt-6">
        Experience
      </h1>
      <Experience experience={JOB_EXPERIENCE} />

      <h1 className="text-4xl font-bold text-center mb-4 mt-10">
        Education
      </h1>
      <Education />
      </MaxWidthWrapper>
    </motion.div>
  );
}
