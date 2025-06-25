import React from 'react';
import {
  SiC, SiCplusplus, SiJavascript, SiPython,
  SiHtml5, SiCss3, SiReact, SiTailwindcss, SiRedux, SiNodedotjs, SiExpress, SiJson,
  SiMongodb, SiMysql, SiPostgresql, SiGit, SiGithub, SiPostman, SiRender
} from 'react-icons/si';
import { FaCode, FaDatabase, FaTools, FaLaptopCode, FaGraduationCap, FaJava } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <FaCode className="text-primary" size={20} />,
    items: [
      { name: 'C', icon: <SiC size={16} /> },
      { name: 'C++', icon: <SiCplusplus size={16} /> },
      { name: 'JavaScript', icon: <SiJavascript size={16} /> },
      { name: 'Python', icon: <SiPython size={16} /> },
      { name: 'Java', icon: <FaJava size={16} className="text-[#f8981d]" /> },
    ],
  },
  {
    title: 'Web Technologies',
    icon: <FaLaptopCode className="text-secondary" size={20} />,
    items: [
      { name: 'HTML', icon: <SiHtml5 size={16} /> },
      { name: 'CSS', icon: <SiCss3 size={16} /> },
      { name: 'React', icon: <SiReact size={16} /> },
      { name: 'Tailwind', icon: <SiTailwindcss size={16} /> },
      { name: 'Redux', icon: <SiRedux size={16} /> },
      { name: 'Node.js', icon: <SiNodedotjs size={16} /> },
      { name: 'Express.js', icon: <SiExpress size={16} /> },
      { name: 'REST APIs', icon: <SiJson size={16} /> },
    ],
  },
  {
    title: 'Database Systems',
    icon: <FaDatabase className="text-accent" size={20} />,
    items: [
      { name: 'MongoDB', icon: <SiMongodb size={16} /> },
      { name: 'MySQL', icon: <SiMysql size={16} /> },
      { name: 'PostgreSQL', icon: <SiPostgresql size={16} /> },
    ],
  },
  {
    title: 'Development Tools',
    icon: <FaTools className="text-info" size={20} />,
    items: [
      { name: 'Git', icon: <SiGit size={16} /> },
      { name: 'GitHub', icon: <SiGithub size={16} /> },
      { name: 'Postman', icon: <SiPostman size={16} /> },
      { name: 'Render', icon: <SiRender size={16} /> },
    ],
  },
  {
    title: 'Core Subjects',
    icon: <FaGraduationCap className="text-warning" size={20} />,
    items: [
      { name: 'DSA' },
      { name: 'DAA' },
      { name: 'OS' },
      { name: 'CN' },
      { name: 'DBMS' },
      { name: 'OOPs' },
      { name: 'Software Engineering' },
      { name: 'AI/ML' },
      { name: 'DL' },
      { name: 'Computer Vision' },
      { name: 'Cloud Computing' },
      { name: 'WSN-IoT' },
      { name: 'CyberSecurity' },
      { name: 'Cryptography' },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="py-16 px-4 md:px-10 max-w-6xl mx-auto border-2 border-primary/40 rounded-xl shadow-primary/20 shadow-lg backdrop-blur-sm bg-white/5">
    <h2 className="mb-10 text-center text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
      Skills
    </h2>

    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {skillCategories.map(({ title, items, icon }) => (
        <div key={title} className="group relative rounded-2xl border border-primary/30 bg-base-200/50 backdrop-blur-sm p-6 shadow-md transition-transform duration-300 transform-gpu hover:-translate-y-3 hover:scale-105 hover:border-primary hover:shadow-primary/50 hover:shadow-2xl before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-primary/10 before:via-secondary/5 before:to-accent/10 before:blur-lg before:transition-opacity before:duration-500 before:opacity-0 group-hover:before:opacity-100">
          <div className="flex items-center gap-3 mb-4">
            {icon}
            <h3 className="text-xl font-semibold group-hover:text-primary">
              {title}
            </h3>
          </div>
          <ul className="flex flex-wrap gap-2 text-sm">
            {items.map(({ name, icon }) => (
              <li key={name} className="badge badge-outline badge-md border-primary/40 text-primary-content/80 hover:border-primary hover:bg-primary/10 transition-colors duration-200 flex items-center gap-1 px-3 py-2">
                {icon && <span className="text-primary">{icon}</span>}
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
