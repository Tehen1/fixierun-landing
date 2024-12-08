'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-500/20" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
      
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Transform Your Fitness Journey?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Join thousands of riders who are already earning rewards for their fitness achievements.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full"
                asChild
              >
                <Link href="/dashboard">Get Started Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white hover:bg-white/10"
                asChild
              >
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
