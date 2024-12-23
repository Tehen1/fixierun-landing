'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { UserCircle2 } from 'lucide-react'

const testimonials = [
  {
    content: 'FixieRun a complètement transformé ma routine d\'entraînement. Les récompenses NFT me motivent à me dépasser chaque jour.',
    author: 'Sophie Martin',
    role: 'Cycliste Amateur',
    image: '/images/testimonials/sophie.jpg'
  },
  {
    content: 'L\'intégration de la blockchain est parfaitement réalisée. C\'est le futur du fitness gaming !',
    author: 'Thomas Dubois',
    role: 'Passionné de Crypto',
    image: '/images/testimonials/thomas.jpg'
  },
  {
    content: 'Les courses en temps réel et la communauté créent une expérience vraiment immersive et motivante.',
    author: 'Marie Lambert',
    role: 'Athlète Semi-Pro',
    image: '/images/testimonials/marie.jpg'
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="py-24 sm:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Témoignages</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Découvrez ce que notre communauté dit de FixieRun
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-3 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.figure
              key={testimonial.author}
              variants={item}
              className="relative rounded-2xl bg-gray-900/50 p-6 backdrop-blur shadow-lg ring-1 ring-white/10"
            >
              <motion.div 
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/70 to-indigo-500/0"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              
              <blockquote className="text-xl font-semibold leading-8 tracking-tight text-white">
                <p>{`"${testimonial.content}"`}</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <div className="relative h-10 w-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500">
                  {testimonial.image ? (
                    <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={40}
                    height={40}
                    className="h-full w-full rounded-full object-cover"
                    priority
                    />
                  ) : (
                    <UserCircle2 className="h-full w-full p-1 text-white" />
                  )}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-gray-400">{testimonial.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-700/20 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="testimonials-pattern"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#testimonials-pattern)" />
        </svg>
      </div>
    </div>
  )
}