import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase
} from "react-icons/fa"

import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb
} from "react-icons/si"

export const technologies = [
  {
    titre: "Frontend",
    icon: FaReact,
    langages: [
      { nom: "JavaScript", icon: FaJs },
      { nom: "React js", icon: FaReact },
      { nom: "Next js", icon: SiNextdotjs },
      { nom: "Tailwind CSS", icon: SiTailwindcss },
      { nom: "HTML", icon: FaHtml5 },
      { nom: "CSS", icon: FaCss3Alt },
    ]
  },
  {
    titre: "Backend",
    icon: FaNodeJs,
    langages: [
      { nom: "Node js", icon: FaNodeJs },
      { nom: "Express js", icon: SiExpress },
      { nom: "MongoDB", icon: SiMongodb },
      { nom: "SQL", icon: FaDatabase },
    ]
  },
]