import React from 'react';

const Home = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center border-2 border-primary/40 shadow-primary/20 shadow-lg rounded-xl p-6 backdrop-blur-sm bg-white/5">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">Priyanshu Kumar</h1>
        <h2 className="text-xl md:text-2xl mb-6 text-secondary">Final-year B.Tech (IT) • CGPA 8.06</h2>

        <p className="text-lg md:text-xl mb-4">
          Full-stack developer, machine-learning enthusiast &amp; cybersecurity explorer, passionate about crafting scalable and impactful tech solutions.
        </p>

        <ul className="text-left text-base md:text-lg mb-4 list-disc list-inside space-y-1">
          <li>800+ coding problems solved across Codeforces, LeetCode &amp; CodeChef.</li>
          <li>Proficient in C++, JavaScript and Python.</li>
          <li>Experienced with React, Tailwind, Node.js and Express.js.</li>
        </ul>

        <p className="text-lg md:text-xl">
          I am a fast learner committed to continuous growth—building projects, writing clean code and mentoring others to make meaningful contributions to the tech community.
        </p>
      </div>
    </div>
  );
};

export default Home;
