"use client"; // Ensures the code runs only on the client side

import { Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <div className="bg-background h-full md:h-[90vh] overflow-x-hidden">
      {/* Full-width background */}

      <MaxWidthWrapper className="flex flex-col md:flex-row items-center justify-start md:justify-center h-[90vh] px-8 gap-y-8">
        {/* Left side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left w-full md:w-3/4"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            Hello, I&apos;m Matthew
          </h1>
          <p className="text-xl mt-2 text-secondary-foreground">
            Welcome to my portfolio website.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <Button color="primary" variant="bordered">
              <a href="/about">About</a>
            </Button>
            <Button color="primary" variant="solid">
              <a href="/contact"> Contact Me</a>
            </Button>
          </div>
        </motion.div>

        {/* Right side: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mx-auto w-[70%] md:w-[50%] max-w-[350px]"
        >
          <Image
            isBlurred
            src="/profile_pic.jpeg" // Profile pic from the public folder
            alt="Matthew's profile picture"
            className="object-contain w-full h-full"
          />
        </motion.div>
      </MaxWidthWrapper>
    </div>
  );
}
