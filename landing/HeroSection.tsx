'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 overflow-hidden bg-[#0C0C0C]">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E40138]/10 to-purple-500/10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="block text-white">Ride. Earn.</span>
            <span className="block mt-2 bg-gradient-to-r from-[#E40138] to-rose-500 text-transparent bg-clip-text">
              Transform.
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-300 leading-relaxed">
            Join the future of fitness with FixieRun. Turn every ride into rewards,
            compete globally, and revolutionize your cycling experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Button
            size="lg"
            className="bg-[#E40138] hover:bg-[#E40138]/90 text-white px-8 py-6 text-lg rounded-2xl shadow-lg shadow-[#E40138]/20"
            asChild
          >
            <Link href="/dashboard">Start Your Journey</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-2xl"
            asChild
          >
            <Link href="#features">Learn More</Link>
          </Button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const stats = [
  { value: '10K+', label: 'Active Runners' },
  { value: '$2M+', label: 'Rewards Earned' },
  { value: '100K+', label: 'Miles Covered' },
  { value: '50+', label: 'Countries' },
];
