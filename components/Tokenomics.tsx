'use client';

import { motion } from 'framer-motion';
import { Code, Lock, Users, Wallet } from 'lucide-react';

const tokenomicsData = [
  {
    percentage: '40%',
    title: 'Community Rewards',
    description: 'Distributed to active riders',
    icon: Users,
  },
  {
    percentage: '20%',
    title: 'Development',
    description: 'Platform development & maintenance',
    icon: Code,
  },
  {
    percentage: '15%',
    title: 'Team & Advisors',
    description: '2-year vesting period',
    icon: Lock,
  },
  {
    percentage: '25%',
    title: 'Treasury',
    description: 'Ecosystem growth & partnerships',
    icon: Wallet,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function Tokenomics() {
  return (
    <section className="py-24 relative overflow-hidden" id="tokenomics">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-wider text-primary mb-2">
            Tokenomics
          </h2>
          <h3 className="heading-2 gradient-text mb-4">
            FIXIE Token Economy
          </h3>
          <p className="subtitle max-w-2xl mx-auto">
            Discover how our token distribution creates a sustainable ecosystem
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {tokenomicsData.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="token-card group"
            >
              <div className="token-card-icon">
                <item.icon className="w-full h-full" />
              </div>
              <div className="token-card-percentage">{item.percentage}</div>
              <h4 className="token-card-title">{item.title}</h4>
              <p className="token-card-description">{item.description}</p>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
