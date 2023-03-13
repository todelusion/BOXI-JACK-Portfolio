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
    title: "About",
    icon: icon_idcard,
  },
  {
    id: "WORK",
    title: "Work",
    icon: icon_wordbag,
  },
  {
    id: "SKILLS",
    title: "Skills",
    icon: icon_code,
  },
  {
    id: "PROJECT",
    title: "Project",
    icon: icon_folder,
  },
  {
    id: "CONTACT",
    title: "Contact",
    icon: icon_email,
  },
];

export const hero = {
  name: "BOXI JACK",
  job: "Frontend Developer",
  description:
    "The one who is able to weave together technical know-how with design aesthetics.",
};

export const work = [
  {
    title: "MOOCs designer",
    company: "National Dong Hwa University",
    jobType: JobType.Full,
    icon: "https://i.imgur.com/zJLOhAJ.png",
    date: "Aug2020 - May2022",
    contents: [
      "Participated in the production of Massive Open Online Courses (MOOCs), including course style design, video shooting, and creation of promotion videos with motion graphics.",
      "Assisted in the process of converting classes in person into online courses.",
      "Assisted in establishing an internal workflow to coordinate tasks for 6 to 7 part-time student colleagues",
    ],
  },
  {
    title: "UX designer",
    company: "Town Town Inc.",
    jobType: JobType.Half,
    icon: "https://i.imgur.com/yWhdz4h.png",
    date: "Dec2020 - Jan2022",
    contents: [
      "Collaborated in UX design, discussing the concept of 相癒 app and conducting qualitative and quantitative research to assist in organizing primary data, mapping out key user flows, and usability testing.",
      "The project was a finalist in the TRANS-ACTION AWARD Competition (UX design competition), the National Chung Cheng University Innovation and Entrepreneurship Competition, and won third place in the 2021 National College Student Creativity and Entrepreneurship Competition - Talent Group.",
      "The team successfully entered the Social Innovation Lab in the seventh term of 2023.",
    ],
  },
  {
    title: "Frontend developer student",
    company: "Rocket bootcamp",
    jobType: JobType.Full,
    icon: "https://i.imgur.com/obOiYTD.png",
    date: "May2022 - Dec2022",
    contents: [
      "Strengthened my knowledge of HTML, CSS, JavaScript, and TypeScript and designed web layouts using SCSS or Utility-First CSS.",
      "Authored a tutorial on implementing scroll parallax and animations using GSAP for the 2022 The F2E competition.",
      "Used frameworks and libraries such as Tailwind CSS and React JS to integrate with RESTful APIs and implement authentication with JWT tokens for various projects, including Todolist (one each in Vue3 and React), an e-commerce website, and a hotel booking website.",
      "Switched from Vue3 to React during training and implemented the BlueCircleShorten URL shortening project using TypeScript.",
      "Applied my prior experience participating in a UX competition to lay the groundwork for the final project, the Pet City MVP. I identified primary stakeholders, conducted a pain point analysis through brainstorming, created user stories, and designed wireframes with the team.",
    ],
  },
];
