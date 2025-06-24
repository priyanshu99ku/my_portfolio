import React from 'react';
import { FaCode, FaTrophy } from 'react-icons/fa';

const profiles = [
  {
    name: 'Codeforces',
    url: 'https://codeforces.com/profile/your_username',
    icon: <FaCode className="text-primary" />,
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/your_username',
    icon: <FaTrophy className="text-secondary" />,
  },
  {
    name: 'CodeChef',
    url: 'https://www.codechef.com/users/your_username',
    icon: <FaCode className="text-accent" />,
  },
];

const CPProfiles = () => (
  <section id="cp-profiles" className="py-8 px-4 md:px-8 max-w-3xl mx-auto">
    <h2 className="text-2xl font-bold mb-4">Competitive Programming Profiles</h2>
    <div className="flex flex-wrap gap-4">
      {profiles.map(profile => (
        <a
          key={profile.name}
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline flex items-center gap-2"
        >
          {profile.icon}
          {profile.name}
        </a>
      ))}
    </div>
  </section>
);

export default CPProfiles;
