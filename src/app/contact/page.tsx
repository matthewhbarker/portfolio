"use client";

import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa"; // Import the phone icon
import { Button } from "@nextui-org/react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { motion } from "framer-motion";

export default function ContactMe() {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 }, // Start offscreen with zero opacity
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }, // Fade in and slide up to normal position
  };

  return (
    <motion.div
      className="bg-background h-[90vh] flex flex-col items-center justify-center py-20"
      initial="hidden"
      animate="visible"
      variants={fadeInVariant}
    >
      <MaxWidthWrapper>
        <h1 className="-mt-5 text-5xl md:text-6xl font-bold text-center mb-6">
          Contact Me
        </h1>
        <p className="text-xl text-center mb-10 text-muted-foreground">
          For any questions or inquiries, please don't hesitate to email me or
          shoot me a message on LinkedIn.
        </p>

        <div className="flex justify-center gap-8">
          <Button
            as="a"
            href="mailto:matthewhbarker@gmail.com?subject=Inquiry&body=Hello Matthew,"
            color="primary"
            className="flex items-center space-x-1"
            variant="solid"
          >
            <MdEmail className="h-6 w-6" />
            <span className="text-lg">Email Me</span>
          </Button>

          <Button
            as="a"
            href="https://www.linkedin.com/in/matthew-barker-1bb6b727b/"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            className="flex items-center space-x-1"
            variant="solid"
          >
            <FaLinkedin className="h-6 w-6" />
            <span className="text-lg">LinkedIn</span>
          </Button>
        </div>

        {/* Footer with email and phone number */}
        <div className="mt-12 text-center text-muted-foreground text-sm">
          <p className="flex items-center justify-center gap-2">
            <MdEmail className="h-3 w-3" />
            <span>matthewhbarker@gmail.com</span>
          </p>
          <p className="flex items-center justify-center gap-2 mt-2">
            <FaPhone className="h-3 w-3" />
            <span>+1 (604) 655-9138</span>
          </p>
        </div>
      </MaxWidthWrapper>
    </motion.div>
  );
}
