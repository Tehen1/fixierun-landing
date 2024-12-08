"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Message {
  id: string;
  content: string;
  type: 'user' | 'bot';
  timestamp: Date;
}

interface ChatBotProps {
  type?: 'strategy' | 'support' | 'community' | 'training';
  theme?: string;
  squadId?: string;
}

export default function ChatBotNew({ type = 'support', theme = 'blue', squadId }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const themeColors = {
    blue: 'from-blue-500 to-cyan-500',
    green: 'from-green-500 to-emerald-500',
    purple: 'from-purple-500 to-pink-500',
    orange: 'from-orange-500 to-red-500',
  };

  const botPersonalities = {
    strategy: {
      name: 'StrategyBot',
      avatar: '/images/bots/strategy-bot.png',
      greeting: 'Bonjour! Je suis là pour vous aider avec la stratégie de course. Comment puis-je vous assister?',
    },
    support: {
      name: 'SupportBot',
      avatar: '/images/bots/support-bot.png',
      greeting: 'Salut! Je suis votre assistant technique. Comment puis-je vous aider aujourd\'hui?',
    },
    community: {
      name: 'CommunityBot',
      avatar: '/images/bots/community-bot.png',
      greeting: 'Hey! Je suis là pour vous connecter avec la communauté FixieRun. Que souhaitez-vous savoir?',
    },
    training: {
      name: 'TrainingBot',
      avatar: '/images/bots/training-bot.png',
      greeting: 'Bienvenue! Je suis votre coach personnel. Prêt à commencer l\'entraînement?',
    },
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Ajouter le message de bienvenue
      setMessages([
        {
          id: '0',
          content: botPersonalities[type].greeting,
          type: 'bot',
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen, type]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Ajouter le message de l'utilisateur
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      type: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simuler une réponse du bot (à remplacer par une vraie API)
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Je traite votre demande... Cette fonctionnalité sera bientôt disponible!',
        type: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-gray-900 rounded-lg shadow-xl w-96 h-[500px] flex flex-col"
          >
            {/* Header */}
            <div className={`p-4 rounded-t-lg bg-gradient-to-r ${themeColors[theme as keyof typeof themeColors]}`}>
              <div className="flex items-center space-x-3">
                <Image
                  src={botPersonalities[type].avatar}
                  alt={botPersonalities[type].name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-bold text-white">{botPersonalities[type].name}</h3>
                  <p className="text-sm text-gray-100">En ligne</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-[#ff0066] to-[#00ccff] text-white'
                        : 'bg-gray-800 text-white'
                    }`}
                  >
                    <p>{message.content}</p>
                    <span className="text-xs text-gray-300 mt-1 block">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800">
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Tapez votre message..."
                  className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00ccff]"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#ff0066] to-[#00ccff] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-lg bg-gradient-to-r ${
          themeColors[theme as keyof typeof themeColors]
        } text-white`}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        )}
      </motion.button>
    </div>
  );
}
