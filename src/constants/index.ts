import { moocsPath } from "../assets";
import {
  icon_code,
  icon_email,
  icon_folder,
  icon_idcard,
  icon_wordbag,
} from "../assets/icons";

enum JobType {
  Full = "Full-time staff",
  Half = "Second job",
}

export const navLinks = [
  {
    id: "ABOUT",
    title: "ABOUT",
    icon: icon_idcard,
  },
  {
    id: "WORK",
    title: "WORK",
    icon: icon_wordbag,
  },
  {
    id: "SKILLS",
    title: "SKILLS",
    icon: icon_code,
  },
  {
    id: "PROJECT",
    title: "PROJECT",
    icon: icon_folder,
  },
  {
    id: "CONTACT",
    title: "CONTACT",
    icon: icon_email,
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
