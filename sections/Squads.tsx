import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatBotNew from './ChatBotNew';
import Image from 'next/image';

interface Squad {
  id: string;
  name: string;
  description: string;
  members: number;
  type: 'technical' | 'creative' | 'social' | 'strategy' | 'support';
  theme: string;
  icon: string;
  achievements: string[];
  expertise: string[];
  activeProjects: number;
}

const defaultSquads: Squad[] = [
  {
    id: 'squad-1',
    name: 'Development Team',
    description: 'Building the future of fitness gaming',
    members: 8,
    type: 'technical',
    theme: 'blue',
    icon: '/icons/dev-team.svg',
    achievements: ['Smart Contracts', 'Mobile App', 'Web Platform'],
    expertise: ['Blockchain', 'React', 'Node.js'],
    activeProjects: 5
  },
  {
    id: 'squad-2',
    name: 'Game Design',
    description: 'Crafting engaging fitness experiences',
    members: 6,
    type: 'creative',
    theme: 'purple',
    icon: '/icons/game-design.svg',
    achievements: ['Game Mechanics', 'User Experience', 'Level Design'],
    expertise: ['Unity', 'UX Design', 'Gamification'],
    activeProjects: 3
  },
  {
    id: 'squad-3',
    name: 'Community Team',
    description: 'Growing and nurturing our community',
    members: 5,
    type: 'social',
    theme: 'green',
    icon: '/icons/community-team.svg',
    achievements: ['Discord Growth', 'Events', 'AMAs'],
    expertise: ['Community Management', 'Social Media', 'Events'],
    activeProjects: 4
  },
  {
    id: 'squad-4',
    name: 'Marketing & Growth',
    description: 'Expanding FixieRun\'s presence in the Web3 gaming space',
    members: 4,
    type: 'strategy',
    theme: 'orange',
    icon: '/icons/marketing-team.svg',
    achievements: ['Partnership Deals', 'Marketing Campaigns', 'Brand Growth'],
    expertise: ['Digital Marketing', 'Analytics', 'Partnerships'],
    activeProjects: 6
  },
  {
    id: 'squad-5',
    name: 'Support Squad',
    description: 'Ensuring smooth user experience',
    members: 7,
    type: 'support',
    theme: 'red',
    icon: '/icons/support-team.svg',
    achievements: ['24/7 Support', 'Quick Response', 'User Satisfaction'],
    expertise: ['Customer Service', 'Technical Support', 'Problem Solving'],
    activeProjects: 2
  }
];

export const Squads: React.FC = () => {
  const [squads, setSquads] = useState<Squad[]>(defaultSquads);
  const [selectedSquad, setSelectedSquad] = useState<Squad | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const handleSquadSelect = (squad: Squad) => {
    setSelectedSquad(squad);
  };

  const filteredSquads = filter === 'all' 
    ? squads 
    : squads.filter(squad => squad.type === filter);

  return (
    <section className="py-20 bg-black" id="squads">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Our Squads
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Meet the teams building the future of fitness gaming. Each squad brings unique expertise to make FixieRun amazing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredSquads.map((squad) => (
              <motion.div
                key={squad.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-gray-900 rounded-xl p-6 hover:transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src={squad.icon}
                      alt={squad.name}
                      width={48}
                      height={48}
                      className="text-white"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{squad.name}</h3>
                    <p className="text-gray-400 text-sm">{squad.members} members</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{squad.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Achievements</h4>
                  <div className="flex flex-wrap gap-2">
                    {squad.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-300"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {squad.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-800">
                  <span className="text-sm text-gray-400">
                    Active Projects: {squad.activeProjects}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    squad.theme === 'blue' ? 'bg-blue-500/20 text-blue-300' :
                    squad.theme === 'purple' ? 'bg-purple-500/20 text-purple-300' :
                    squad.theme === 'green' ? 'bg-green-500/20 text-green-300' :
                    squad.theme === 'orange' ? 'bg-orange-500/20 text-orange-300' :
                    'bg-red-500/20 text-red-300'
                  }`}>
                    {squad.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {selectedSquad && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-12"
            >
              <div className="bg-gray-900 rounded-xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 mr-4">
                      <Image
                        src={selectedSquad.icon}
                        alt={selectedSquad.name}
                        width={48}
                        height={48}
                        className="text-white"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white">{selectedSquad.name}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedSquad(null)}
                    className="text-gray-400 hover:text-white"
                  >
                    Close
                  </button>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Recent Achievements</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedSquad.achievements.map((achievement, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-lg bg-${selectedSquad.theme}-500/10`}
                      >
                        <span className="text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <ChatBotNew
                  squadId={selectedSquad.id}
                  theme={selectedSquad.theme}
                  type={
                    selectedSquad.type === 'technical' ? 'support' :
                    selectedSquad.type === 'creative' ? 'community' :
                    selectedSquad.type === 'social' ? 'community' :
                    selectedSquad.type === 'strategy' ? 'strategy' :
                    'support'
                  }
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
