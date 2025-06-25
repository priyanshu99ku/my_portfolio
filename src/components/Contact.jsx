import React from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const contactMethods = [
  {
    name: 'Phone 1',
    href: 'tel:9142053507',
    icon: <FiPhone size={24} />,
    info: '+91 9142053507',
  },
  {
    name: 'Phone 2',
    href: 'tel:6206911477',
    icon: <FiPhone size={24} />,
    info: '+91 6206911477',
  },
  {
    name: 'Email',
    href: 'mailto:priyanshukumar7393@gmail.com',
    icon: <FiMail size={24} />,
    info: 'priyanshukumar7393@gmail.com',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kpriyan/',
    icon: <FaLinkedin size={24} className="text-[#0e76a8]" />,
    info: 'linkedin.com/in/kpriyan',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/__priyanshu__0410/',
    icon: <FaInstagram size={24} className="text-pink-500" />,
    info: '@__priyanshu__0410',
  },
];

const Contact = () => (
  <section id="contact" className="py-16 px-4 md:px-10 max-w-6xl mx-auto border-2 border-primary/40 rounded-xl shadow-primary/20 shadow-lg backdrop-blur-sm bg-white/5">
    <h2 className="mb-10 text-center text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
      Contact
    </h2>
    <div className="flex flex-col items-center gap-6">
      {/* Contact Details */}
      <div className="space-y-4">
        {contactMethods.map(({ name, href, icon, info }) => (
          <a
            key={name}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-primary/30 bg-base-200/50 p-4 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-lg hover:shadow-primary/40"
          >
            <span className="text-primary group-hover:scale-110 transition-transform duration-300">
              {icon}
            </span>
            <span className="text-base-content/90 group-hover:text-primary whitespace-nowrap">
              {info}
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
