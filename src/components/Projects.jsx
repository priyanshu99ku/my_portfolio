import React from 'react';

const projects = [
  {
    title: 'DevNet – Social Platform for Developers',
    description: `A full-stack social platform enabling developers to connect, share ideas and chat in real-time.\n\nTech Stack: React + Vite, Redux, Tailwind CSS, DaisyUI, React Router, Axios, Node.js, Express, MongoDB, WebSocket.\n\nKey Features:\n• Real-time messaging via WebSockets.\n• Secure JWT authentication with bcrypt-hashed passwords.\n• Profile management with complete CRUD.\n• Optimised MongoDB queries – 30% faster API responses.\n• Polished UI/UX with Tailwind, DaisyUI & React Icons.`,
    link: '#',
  },
  {
    title: 'CodeTracker – Competitive Programming Dashboard',
    description: `A coding analytics and discussion platform that helps users track their competitive programming progress.\n\nTech Stack: React, Vite, Redux Toolkit, Tailwind CSS, DaisyUI, Recharts, Socket.io, Node.js, Express, MongoDB.\n\nKey Features:\n• Interactive charts with Recharts to visualize problem-solving stats.\n• Q&A discussion forum with nested answers and full CRUD functionality.\n• Fully responsive UI for all screen sizes.\n• Optimized backend with indexed MongoDB queries, reducing latency by 35%.`,
    link: 'https://code-tracker-web.onrender.com',
  }
];

const miniProjects = [
  { title: 'CLI Quiz App', link: '#' },
  { title: 'Markdown Previewer', link: '#' },
  { title: 'Weather App', link: '#' },
  { title: 'To-Do List', link: '#' },
];

const Projects = () => (
  <section id="projects" className="py-16 px-4 md:px-10 max-w-6xl mx-auto rounded-xl border-2 border-primary/40 bg-white/5 shadow-lg shadow-primary/20 backdrop-blur-sm">
    <h2 className="mb-10 text-center text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
      Projects
    </h2>
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
      {projects.map((project, idx) => (
        <div key={idx} className="group card flex flex-col relative overflow-hidden rounded-xl border border-primary/30 bg-base-200/60 backdrop-blur-sm p-6 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:border-primary/80 hover:shadow-primary/40 before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-primary/10 before:via-secondary/5 before:to-accent/5 before:blur-lg before:transition-opacity before:duration-500 before:opacity-0 group-hover:before:opacity-100">
          <div className="flex-grow">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4 whitespace-pre-line text-sm leading-relaxed text-secondary-content">{project.description}</p>
          </div>
          <div className="mt-auto">
            <a href={project.link} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>

    <h2 className="my-16 text-center text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
      Mini Projects
    </h2>
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {miniProjects.map((project, idx) => (
        <a href={project.link} key={idx} target="_blank" rel="noopener noreferrer" className="group block rounded-lg border border-primary/30 bg-base-200/60 backdrop-blur-sm p-4 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/80 hover:shadow-primary/30">
          <h4 className="font-semibold text-secondary-content group-hover:text-primary">{project.title}</h4>
        </a>
      ))}
    </div>
  </section>
);

export default Projects;
