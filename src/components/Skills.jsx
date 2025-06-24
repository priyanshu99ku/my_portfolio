import React from 'react';

const skills = [
  'JavaScript', 'React', 'Tailwind CSS', 'Three.js', 'Node.js', 'C++', 'Python',
];

const Skills = () => (
  <section id="skills" className="py-8 px-4 md:px-8 max-w-3xl mx-auto">
    <h2 className="text-2xl font-bold mb-4">Skills</h2>
    <div className="flex flex-wrap gap-3">
      {skills.map(skill => (
        <span key={skill} className="badge badge-outline badge-lg">
          {skill}
        </span>
      ))}
    </div>
  </section>
);

export default Skills;
