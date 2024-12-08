import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is FixieRun?',
    answer:
      'FixieRun is a Web3 fitness gaming platform that combines NFT bike collection, real-time racing, and blockchain rewards. Players can collect unique bikes, participate in races, and earn rewards while staying fit.',
  },
  {
    question: 'How do I get started?',
    answer:
      'To get started, you\'ll need a Web3 wallet like MetaMask. Once connected, you can purchase your first NFT bike from our marketplace or mint a new one from our latest collection. After acquiring a bike, you can start participating in races and earning rewards.',
  },
  {
    question: 'What makes each bike unique?',
    answer:
      'Each bike is a unique NFT with its own attributes, including speed, acceleration, handling, and special abilities. Bikes come in different classes (Walker, Jogger, FixieRunner) and rarity levels (Common to Legendary), each offering unique advantages in races.',
  },
  {
    question: 'How does the racing system work?',
    answer:
      'Races take place on various tracks with different terrains and weather conditions. Your bike\'s performance is affected by its attributes, class abilities, and the current weather. You can earn rewards based on your position and performance in each race.',
  },
  {
    question: 'What is the FIXIE token?',
    answer:
      'FIXIE is our platform\'s utility token used for race entry fees, NFT minting, marketplace transactions, and governance. Token holders can also stake their tokens to earn additional rewards and participate in platform decisions.',
  },
  {
    question: 'How can I earn rewards?',
    answer:
      'You can earn rewards through various activities: participating in races, completing achievements, staking your bikes or tokens, winning tournaments, and trading NFTs in the marketplace. Rewards are distributed in FIXIE tokens and exclusive NFTs.',
  },
  {
    question: 'Is there a mobile app?',
    answer:
      'A mobile app is currently in development and scheduled for release in Q4 2024. The app will support cross-platform play and include additional features optimized for mobile users.',
  },
  {
    question: 'How do you ensure fair play?',
    answer:
      'We use a combination of blockchain technology and anti-cheat systems to ensure fair play. All race results and rewards are recorded on the blockchain, making them transparent and verifiable. Additionally, our smart contracts are audited by leading security firms.',
  },
];

export default function FAQ() {
  return (
    <section className="w-full py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about FixieRun and how it works.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-900 rounded-xl border border-purple-500/20"
              >
                <AccordionTrigger className="px-6 text-white hover:text-purple-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400">
            Still have questions?{' '}
            <a
              href="https://discord.gg/fixierun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300"
            >
              Join our Discord community
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
