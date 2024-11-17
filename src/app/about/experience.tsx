"use client";

import Link from "next/link";
import { Formaters } from "@/app/helpers/formaters";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import type { JobExperience } from "@/app/config/experience";
import { cn } from "@/lib/utils";

interface ExperienceProps extends React.ComponentPropsWithoutRef<"ol"> {
  experience: JobExperience[];
}

export const Experience = ({
  experience,
  className,
  ...props
}: ExperienceProps) => {
  return (
    <ol className={cn("relative border-l-2", className)} {...props}>
      {experience.map((job, index) => {
        const ref = useRef<HTMLLIElement>(null);
        const { scrollYProgress } = useScroll({
          target: ref,
          offset: ["start end", "center center"],
        });

        // Animating each individual item
        const translateX = useTransform(scrollYProgress, [0, 0.7], ["-20%", "0%"]);
        const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [0, 0.1, 1]);

        return (
          <motion.li
            ref={ref}
            className="mb-10 ml-4"
            key={job.startDate}
            style={{ translateX, opacity }}
          >
            <div className="absolute left-[-0.43rem] mt-1.5 size-3 rounded-full border border-muted-foreground bg-muted-foreground" />
            <time
              className="mb-1 text-sm font-thin leading-none"
              dateTime={job.startDate}
            >
              {`${Formaters.formatDate(
                job.startDate,
                "MMMM y"
              )} - ${
                job.endDate ? Formaters.formatDate(job.endDate, "MMMM y") : "Present"
              }`}
            </time>

            <h3 className="text-lg font-semibold">
              {job.ocupation} at{" "}
              <Link
                href={job.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit ${job.company} website`}
                aria-label={`Visit ${job.company} website`}
                className="text-primary underline transition-colors hover:text-primary/90"
              >
                {job.company}
              </Link>
            </h3>
            <h4 className="my-1 text-sm font-normal text-primary/80">
              {job.location}
            </h4>
            <p className="mb-4 text-base font-normal text-muted-foreground">
              {job.description}
            </p>
          </motion.li>
        );
      })}
    </ol>
  );
};