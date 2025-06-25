import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const navLinks = [
  { name: 'About', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'CP Profiles', href: '/cp-profiles' },
  { name: 'Skills', href: '/skills' },
  { name: 'Contact', href: '/contact' },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        className="fixed top-4 left-4 z-50 btn btn-ghost md:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle sidebar"
      >
        <FaBars size={24} />
      </button>
      {/* Overlay for mobile */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden" onClick={() => setOpen(false)}></div>
      )}
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-base-100 shadow-lg z-50 transform transition-transform duration-200 md:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'} md:static md:block md:w-56`}
      >
        <div className="flex flex-col h-full p-4 gap-4">
          <div className="text-2xl font-bold mb-8 text-primary">My Portfolio</div>
          <nav className="flex flex-col gap-2">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.href}
                className="btn btn-ghost justify-start text-lg"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
