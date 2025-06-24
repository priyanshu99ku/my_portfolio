import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'A cool project that does amazing things.',
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'Another awesome project with great features.',
    link: '#',
  },
];

const Projects = () => (
  <section id="projects" className="py-8 px-4 md:px-8 max-w-3xl mx-auto">
    <h2 className="text-2xl font-bold mb-4">Projects</h2>
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project, idx) => (
        <div key={idx} className="card bg-base-100 shadow-md p-4">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="mb-2">{project.description}</p>
          <a href={project.link} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
