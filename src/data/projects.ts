export interface Project {
  title: string;
  description: string;
  tags: string[];
  url: string;
}

export const projects: Project[] = [
  {
    title: "Campus Shelf",
    description: "A campus library management system.",
    tags: ["TypeScript", "Web application"],
    url: "https://github.com/manaboy-07/Campus-Shelf",
  },
  {
    title: "Linux & Bash",
    description: "My working notes and practice with Linux and Bash scripting.",
    tags: ["Shell", "Learning"],
    url: "https://github.com/manaboy-07/Bash-Scripting",
  },
  {
    title: "GSAP experiments",
    description: "A space to practise web animation with React and GSAP.",
    tags: ["JavaScript", "Animation"],
    url: "https://github.com/manaboy-07/gsap-react",
  },
];
