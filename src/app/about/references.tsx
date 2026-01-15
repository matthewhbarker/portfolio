"use client";

import { motion } from "framer-motion";

const references = [
  {
    name: "Ulrike Radermacher",
    role: "District Electoral Officer",
    organization: "Elections BC",
    details:
      "Former Executive MBA in Indigenous Business and Leadership, Simon Fraser University",
    contact: "ulrikesrad@gmail.com · +1 (604) 771-8967",
  },
  {
    name: "Siobhaun Williams",
    role: "Senior Marketing Manager",
    organization: "Telus Health",
    contact: "williams@telus.com · +1 (604) 619-0344",
  },
  {
    name: "Loic Triger",
    role: "IT Director",
    organization: "SkilledTradesBC",
    contact: "+1 (604) 360-4871",
  },
  {
    name: "Jordyn McCrea",
    role: "Community Specialist (Lululemon), Coach at Citizen YVR, Contract Event Specialist",
    organization: "Former Byte Camp Manager",
    contact: "+1 (250) 877-8860",
  },
  {
    name: "Matt McLuckie",
    role: "Expert Carpenter & General Contractor",
    organization: "Gabriola Island, BC",
    contact: "+1 (250) 740-5431",
  },
];

export default function References() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      {references.map((ref, index) => (
        <div key={index} className="relative pl-6">
          {/* subtle vertical accent */}
          <span className="absolute left-0 top-1 h-full w-px bg-border" />

          <h3 className="text-base font-semibold tracking-tight">{ref.name}</h3>

          <p className="text-sm text-primary/80">{ref.role}</p>

          <p className="text-sm text-muted-foreground">{ref.organization}</p>

          {ref.details && (
            <p className="mt-1 text-sm text-muted-foreground">{ref.details}</p>
          )}

          <p className="mt-2 text-sm font-light text-muted-foreground">
            {ref.contact}
          </p>
        </div>
      ))}
    </motion.section>
  );
}
