import { moocsPath } from "../assets";

enum JobType {
  Full = "Full-time staff",
  Half = "Second job",
}

export const navLinks = [
  {
    id: "ABOUT",
    title: "ABOUT",
  },
  {
    id: "WORK",
    title: "WORK",
  },
  {
    id: "SKILLS",
    title: "SKILLS",
  },
  {
    id: "PROJECT",
    title: "PROJECT",
  },
  {
    id: "CONTACT",
    title: "CONTACT",
  },
];

export const work = [
  {
    title: "MOOCs designer",
    company: "National Dong Hwa University",
    type: JobType.Full,
    icon: moocsPath,
    date: "Aug2020 - May2022",
    points: [
      "Participated in the production of Massive Open Online Courses (MOOCs), including course style design, video shooting, and creation of promotion videos with motion graphics.",
      "Assisted in the process of converting classes in person into online courses.",
      "Assisted in establishing an internal workflow to coordinate tasks for 6 to 7 part-time student colleagues",
    ],
  },
];
