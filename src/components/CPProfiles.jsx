import React from 'react';
import { SiLeetcode, SiCodechef } from 'react-icons/si';
import { GiCrossedSwords } from 'react-icons/gi';

const profiles = [
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/batch89/',
    icon: <SiLeetcode className="text-orange-500" size={28} />,
    stats: 'Knight',
  },
  {
    name: 'CodeChef',
    url: 'https://www.codechef.com/users/priyanshu77777',
    icon: <SiCodechef className="text-[#5B4638]" size={28} />,
    stats: '4★',
  },
  {
    name: 'Codeforces',
    url: 'https://codeforces.com/profile/EVOLUTIONARY',
    icon: <GiCrossedSwords className="text-blue-500" size={28} />,
    stats: 'Specialist',
  },
];

const CPProfiles = () => (
  <section id="cp-profiles" className="py-16 px-4 md:px-8 max-w-4xl mx-auto rounded-xl border-2 border-primary/40 bg-white/5 shadow-lg shadow-primary/20 backdrop-blur-sm">
    <h2 className="mb-6 text-center text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Competitive Programming Profiles</h2>
    <p className="mb-10 text-center text-base-content/80 leading-relaxed max-w-2xl mx-auto">
      I actively participate in competitive programming to strengthen my problem-solving skills and algorithmic thinking. With over <span className="font-semibold text-primary">800+ problems solved</span>, Ive gained experience across data structures, algorithms, and optimization techniques. I enjoy tackling new challenges and consistently aim to improve my speed and accuracy through regular contests.
    </p>
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
      {profiles.map(profile => (
        <a
          key={profile.name}
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 border border-primary/40 rounded-lg p-4 bg-base-200/60 backdrop-blur-sm shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/80 hover:shadow-primary/30"
        >
          {profile.icon}
          <div className="text-left">
            <span className="font-semibold group-hover:text-primary">
              {profile.name}
            </span>
            <div className="text-sm opacity-80 leading-none">
              {profile.stats}
            </div>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default CPProfiles;
