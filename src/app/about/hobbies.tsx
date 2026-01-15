"use client";

import { motion } from "framer-motion";

const hobbies = [
  {
    title: "Soccer",
    description:
      "Watching, playing, gaming - I love it all. Lifelong football fan (c'mon Manchester United!), and passionate about every aspect of the game.",
  },
  {
    title: "Sports",
    description:
      "Interested in all sports, playing and watching. Notably, basketball, tennis, skiing, rugby, and golf.",
  },
  {
    title: "Music & Audio",
    description:
      "Background in audio synthesis and music production. Enjoy sound design, recording, and exploring how audio shapes experiences.",
  },
  {
    title: "Gaming",
    description:
      "Enjoy both casual and competitive games. Love all games, but I have a deep love for sports games like FIFA, strategy games, and shooters.",
  },
  {
    title: "Socializing",
    description:
      "Strong people-person. Enjoy collaborating, meeting new people, and being part of social, team-based environments.",
  },
];

export default function Hobbies() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="grid gap-6 md:grid-cols-2"
    >
      {hobbies.map((hobby, index) => (
        <div
          key={index}
          className="rounded-xl border border-border bg-card p-6 shadow-sm"
        >
          <h3 className="text-xl font-semibold mb-2">{hobby.title}</h3>
          <p className="text-muted-foreground leading-relaxed">
            {hobby.description}
          </p>
        </div>
      ))}
    </motion.section>
  );
}
