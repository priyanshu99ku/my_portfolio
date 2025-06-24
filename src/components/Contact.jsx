import React from 'react';

const Contact = () => (
  <section id="contact" className="py-8 px-4 md:px-8 max-w-3xl mx-auto">
    <h2 className="text-2xl font-bold mb-4">Contact</h2>
    <form className="flex flex-col gap-4">
      <input type="text" placeholder="Name" className="input input-bordered" required />
      <input type="email" placeholder="Email" className="input input-bordered" required />
      <textarea placeholder="Your message" className="textarea textarea-bordered" required />
      <button type="submit" className="btn btn-primary w-fit">Send</button>
    </form>
  </section>
);

export default Contact;
