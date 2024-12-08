'use client';

import { motion } from 'framer-motion';
import { Icons } from '@/components/icons';

export function HowItWorksSection() {
  return (
    <section className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-2xl md:text-center"
      >
        <h2 className="font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
          How It Works
        </h2>
        <p className="mt-4 text-lg tracking-tight text-gray-400">
          Get started with FixieRun in three simple steps
        </p>
      </motion.div>
      <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 text-white">
                {step.icon}
              </div>
              <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-base text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    icon: <Icons.wallet className="h-6 w-6" />,
    title: 'Connect Your Wallet',
    description: 'Link your Web3 wallet to start earning rewards for your fitness activities.',
  },
  {
    icon: <Icons.activity className="h-6 w-6" />,
    title: 'Track Your Activities',
    description: 'Use our app to track your runs and rides, earning points for every mile.',
  },
  {
    icon: <Icons.store className="h-6 w-6" />,
    title: 'Earn & Trade',
    description: 'Convert your points to tokens and NFTs, or trade them in our marketplace.',
  },
];
