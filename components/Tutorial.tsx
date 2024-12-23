'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiCheck } from 'react-icons/fi';

const tutorialSteps = [
{
    id: 1,
    title: 'Getting Started',
    description: 'Learn the basics of FixieRun and how to get your first bike',
    video: '/videos/tutorial-1.mp4',
    tips: ['Connect your wallet', 'Claim your starter bike', 'Complete your profile']
},
{
    id: 2,
    title: 'Your First Race',
    description: 'Master the racing mechanics and compete with other players',
    video: '/videos/tutorial-2.mp4',
    tips: ['Learn race controls', 'Understanding stamina', 'Race strategies']
},
{
    id: 3,
    title: 'Bike Upgrades',
    description: 'Discover how to upgrade and customize your bikes',
    video: '/videos/tutorial-3.mp4',
    tips: ['Upgrade components', 'NFT rarity system', 'Performance boost']
}
];

export default function Tutorial() {
const [currentStep, setCurrentStep] = useState(1);
const [completedSteps, setCompletedSteps] = useState<number[]>([]);

const completeStep = (stepId: number) => {
    if (!completedSteps.includes(stepId)) {
    setCompletedSteps([...completedSteps, stepId]);
    }
};

return (
    <section className="py-20 bg-gray-900">
    <div className="container mx-auto px-4">
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
        >
        <h2 className="text-4xl font-bold text-white mb-4">How to Play</h2>
        <p className="text-gray-400">Master FixieRun with our interactive tutorial</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
            {tutorialSteps.map((step) => (
            <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl ${
                currentStep === step.id
                    ? 'bg-indigo-600'
                    : 'bg-gray-800'
                } cursor-pointer transition duration-300`}
                onClick={() => setCurrentStep(step.id)}
            >
                <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#ff00b6]">{step.title}</h3>
                {completedSteps.includes(step.id) && (
                    <FiCheck className="text-green-400 text-xl" />
                )}
                </div>
                <p className="text-gray-300 mt-2">{step.description}</p>
            </motion.div>
            ))}
        </div>

        <div className="bg-gray-800 rounded-xl p-6">
            <div className="aspect-video bg-gray-900 rounded-lg mb-6 flex items-center justify-center">
            <FiPlay className="text-4xl text-white" />
            </div>
            
            <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#ff00b6]">{tutorialSteps[currentStep - 1].title}</h3>
            <div className="space-y-2">
                {tutorialSteps[currentStep - 1].tips.map((tip, index) => (
                <div
                    key={index}
                    className="flex items-center space-x-2 text-gray-300"
                >
                    <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                    <span>{tip}</span>
                </div>
                ))}
            </div>
            <button
                onClick={() => completeStep(currentStep)}
                className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
            >
                Complete Tutorial
            </button>
            </div>
        </div>
        </div>
    </div>
    </section>
);
}

