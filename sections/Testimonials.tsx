'use client';

import React, { useState, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
  socialProof?: string;
  location?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "FixieRun has completely transformed my cycling experience. The move-to-earn concept keeps me motivated every day!",
    author: "Sarah Johnson",
    role: "Professional Cyclist",
    image: "/images/testimonials/sarah.jpg",
    socialProof: "3x National Champion",
    location: "Paris, France"
  },
  {
    quote: "The crypto rewards are a game-changer. Every mile counts now, and I'm earning while staying fit!",
    author: "Michael Thompson",
    role: "Fitness Enthusiast",
    image: "/images/testimonials/michael.jpg",
    socialProof: "10k+ km logged",
    location: "London, UK"
  },
  {
    quote: "The NFT bike collection is fascinating. I love customizing my bike and showing it off to the community.",
    author: "Emily Rodriguez",
    role: "Digital Artist",
    image: "/images/testimonials/emily.jpg",
    socialProof: "Featured NFT Creator",
    location: "Barcelona, Spain"
  },
  {
    quote: "Participating in races and earning tokens makes every bike ride exciting and rewarding.",
    author: "John Davidson",
    role: "Tech Professional",
    image: "/images/testimonials/john.jpg",
    socialProof: "Top 100 Rider",
    location: "Amsterdam, Netherlands"
  },
  {
    quote: "The fitness app integration is seamless. FixieRun fits perfectly into my daily routine.",
    author: "Lisa Martinez",
    role: "Fitness Coach",
    image: "/images/testimonials/lisa.jpg",
    socialProof: "Certified Trainer",
    location: "Milan, Italy"
  }
] as const;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
} as const;

// Memoized TestimonialCard component
const TestimonialCard = memo(function TestimonialCard({ 
  testimonial, 
  onClick 
}: { 
  testimonial: Testimonial; 
  onClick: (testimonial: Testimonial) => void;
}) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 cursor-pointer hover:bg-gray-700/50 transition-all duration-300 group relative"
      onClick={() => onClick(testimonial)}
      role="button"
      aria-label={`Voir le témoignage complet de ${testimonial.author}`}
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onClick(testimonial)}
    >
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div className="relative w-12 h-12 mr-4 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
            <Image
              src={testimonial.image}
              alt={testimonial.author}
              fill
              sizes="48px"
              className="rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
              {testimonial.author}
            </h3>
            <p className="text-gray-400 text-sm">{testimonial.role}</p>
            {testimonial.location && (
              <p className="text-gray-500 text-xs">{testimonial.location}</p>
            )}
          </div>
        </div>
        
        <blockquote className="relative">
          <div className="absolute -top-2 -left-2 text-4xl text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
            "
          </div>
          <p className="text-gray-300 group-hover:text-white transition-colors duration-300 pl-4">
            {testimonial.quote}
          </p>
        </blockquote>
        
        {testimonial.socialProof && (
          <div className="mt-4 pt-4 border-t border-gray-700/50">
            <p className="text-sm text-primary/80">
              {testimonial.socialProof}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
});

// Memoized TestimonialModal component
const TestimonialModal = memo(function TestimonialModal({
  isOpen,
  closeModal,
  testimonial
}: {
  isOpen: boolean;
  closeModal: () => void;
  testimonial: Testimonial | null;
}) {
  if (!testimonial) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={closeModal}
        aria-labelledby="testimonial-modal-title"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/75 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-gray-800/90 backdrop-blur-lg p-6 text-left align-middle shadow-xl transition-all">
                <div className="relative">
                  <button
                    onClick={closeModal}
                    className="absolute top-0 right-0 p-2 rounded-full hover:bg-gray-700/50 transition-colors duration-200"
                    aria-label="Fermer"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <div className="flex items-center mb-6">
                    <div className="relative w-20 h-20 mr-6">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        sizes="80px"
                        className="rounded-full object-cover"
                        priority
                      />
                    </div>
                    <div>
                      <Dialog.Title
                        as="h3"
                        className="text-2xl font-semibold leading-6"
                        id="testimonial-modal-title"
                      >
                        {testimonial.author}
                      </Dialog.Title>
                      <p className="text-gray-400 mt-1">{testimonial.role}</p>
                      {testimonial.location && (
                        <p className="text-gray-500 text-sm mt-1">{testimonial.location}</p>
                      )}
                      {testimonial.socialProof && (
                        <p className="text-primary/80 text-sm mt-2">{testimonial.socialProof}</p>
                      )}
                    </div>
                  </div>

                  <blockquote className="relative text-lg">
                    <div className="absolute -top-3 -left-3 text-6xl text-primary/20">
                      "
                    </div>
                    <p className="pl-6 text-gray-300">
                      {testimonial.quote}
                    </p>
                  </blockquote>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
});

export default function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedTestimonial(null);
  }, []);

  const openModal = useCallback((testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  }, []);

  return (
    <section 
      ref={ref}
      className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden" 
      id="testimonials"
      aria-label="Témoignages de la communauté"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Community Success Stories
          </h2>
          <p className="text-xl text-gray-400">
            Hear from our amazing community of cyclists who are earning while staying fit
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.author}
              testimonial={testimonial}
              onClick={openModal}
            />
          ))}
        </motion.div>

        <TestimonialModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          testimonial={selectedTestimonial}
        />
      </div>
    </section>
  );
}
