export interface JobExperience {
  ocupation: string;
  company: string;
  asLink?: boolean;
  location: string;
  url?: string;
  startDate: string;
  endDate?: string | null;
  description: string;
}

export const JOB_EXPERIENCE = [
  {
    ocupation: "Manager",
    company: "Ravenskill Orchards and Gabbies Cider",
    location: "Gabriola Island",
    url: "https://ravenskill.com/",
    startDate: "2025-03-01",
    description:
      "Played a crucial role across various areas of the business to support day-to-day operations and long-term growth initiatives. Operated in a highly self-directed role, applying a broad skill set including leadership, communication, and technical problem-solving.",
  },
  {
    ocupation: "Electoral Equipment Officer",
    company: "Elections BC",
    location: "Vancouver",
    url: "https://www.elections.bc.ca/",
    startDate: "2024-08-01",
    endDate: "2024-12-01",
    description:
      "Played a key role in managing the election process in the West Point Grey electoral district. Responsibilities included testing, organizing, and deploying election-related equipment, including network and electrical systems. Assisted in recruitment and collaborated with Deputy Officers to ensure smooth election operations.",
  },
  {
    ocupation: "Property Developer and Carpenter",
    company: "Private",
    asLink: false,
    location: "Gabriola",
    startDate: "2023-09-01",
    endDate: "2024-09-01",
    description:
      "Managed a land development project on a neglected property, coordinating and collaborating with tradespeople and performing technical tasks. Worked as a collaborative team member on high-end home renovations, addressing various technical and physical challenges.",
  },
  {
    ocupation: "Data Engineer",
    company: "Minesense",
    location: "Vancouver",
    url: "https://minesense.com/",
    startDate: "2023-01-01",
    endDate: "2023-09-01",
    description:
      "Developed Python and SQL scripts, managed CI/CD systems, worked with cloud infrastructure, and maintained databases. Combined programming skills with system management responsibilities.",
  },
  {
    ocupation: "Manager/Lead Instructor",
    company: "Byte Camp",
    location: "Vancouver",
    url: "https://www.bytecamp.ca/",
    startDate: "2018-06-01",
    endDate: "2022-09-01",
    description:
      "Promoted to manager in April 2022. Oversaw up to 64 children and 16 instructors across multiple locations in Metro Vancouver. Responsible for safety, well-being, and communication within camps, including liaison with parents and managers. Taught 3D/2D game development and electronic music production to groups of up to 24 children and supervised instructors.",
  },
  {
    ocupation: "Line Cook",
    company: "The Galley",
    location: "Vancouver",
    url: "https://thegalley.ca/",
    startDate: "2019-04-01",
    endDate: "2019-09-01",
    description:
      "Worked in all areas of the kitchen. Responsible for maintaining high food quality and ensuring customer satisfaction.",
  },
  {
    ocupation: "Math Tutor",
    company: "Private",
    asLink: false,
    location: "Vancouver",
    startDate: "2016-09-01",
    endDate: "2018-06-01",
    description:
      "Provided private math tutoring three mornings a week to a boy with learning challenges, teaching grade 5 and 6 math concepts.",
  },
] satisfies JobExperience[];
