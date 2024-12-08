import Image from 'next/image';
import { motion } from 'framer-motion';
import { IconBrandTwitter, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';

const team = [
  {
    name: 'Alex Chen',
    role: 'Founder & CEO',
    image: '/images/team/alex.webp',
    bio: 'Former pro cyclist and blockchain enthusiast. 10+ years in gaming industry.',
    social: {
      twitter: 'https://twitter.com/alexchen',
      linkedin: 'https://linkedin.com/in/alexchen',
      github: 'https://github.com/alexchen',
    },
  },
  {
    name: 'Sarah Kim',
    role: 'CTO',
    image: '/images/team/sarah.webp',
    bio: 'Blockchain architect with experience at major Web3 companies.',
    social: {
      twitter: 'https://twitter.com/sarahkim',
      linkedin: 'https://linkedin.com/in/sarahkim',
      github: 'https://github.com/sarahkim',
    },
  },
  {
    name: 'Marcus Johnson',
    role: 'Game Director',
    image: '/images/team/marcus.webp',
    bio: '15+ years in game design and development. Former lead at major gaming studios.',
    social: {
      twitter: 'https://twitter.com/marcusj',
      linkedin: 'https://linkedin.com/in/marcusj',
      github: 'https://github.com/marcusj',
    },
  },
  {
    name: 'Emma Liu',
    role: 'Art Director',
    image: '/images/team/emma.webp',
    bio: 'Award-winning digital artist specializing in NFT and game art.',
    social: {
      twitter: 'https://twitter.com/emmaliu',
      linkedin: 'https://linkedin.com/in/emmaliu',
      github: 'https://github.com/emmaliu',
    },
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Team() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet the Team
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our team combines expertise in blockchain, gaming, and fitness to create an exceptional experience.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-gray-900 rounded-xl overflow-hidden border border-purple-500/20"
            >
              <div className="relative aspect-square">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-purple-400 mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                <div className="flex items-center gap-4">
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <IconBrandTwitter className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <IconBrandLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <IconBrandGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400">
            Want to join our team?{' '}
            <a href="/careers" className="text-purple-400 hover:text-purple-300">
              View open positions
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
