'use client';

import { motion } from 'framer-motion';
import { Icons } from '@/components/icons';

export function FeaturesSection() {
  return (
    <section id="features" className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Features
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Experience the future of fitness with our innovative platform.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative overflow-hidden rounded-lg border bg-background p-2"
        >
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <Icons.nft className="h-12 w-12" />
            <div className="space-y-2">
              <h3 className="font-bold">NFT Bikes</h3>
              <p className="text-sm text-muted-foreground">
                Collect unique NFT bikes and customize your virtual garage.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative overflow-hidden rounded-lg border bg-background p-2"
        >
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <Icons.wallet className="h-12 w-12" />
            <div className="space-y-2">
              <h3 className="font-bold">Earn Rewards</h3>
              <p className="text-sm text-muted-foreground">
                Earn tokens for every mile you ride and complete challenges.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative overflow-hidden rounded-lg border bg-background p-2"
        >
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <Icons.users className="h-12 w-12" />
            <div className="space-y-2">
              <h3 className="font-bold">Community</h3>
              <p className="text-sm text-muted-foreground">
                Join a global community of cyclists and compete in events.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
