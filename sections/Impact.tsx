"use client";

import React from 'react';
import { Leaf, Bike, Globe2, Bot } from 'lucide-react';

interface ImpactCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ImpactCard = ({ icon: Icon, title, value, description }: ImpactCardProps) => (
  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300">
    <div className="bg-green-500/10 p-4 rounded-full mb-4">
      <Icon className="w-8 h-8 text-green-400" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-2xl font-bold text-green-400 mb-2">{value}</p>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default function Impact() {
  return (
    <section id="impact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Impact Environnemental</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Notre engagement pour un avenir plus durable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ImpactCard
            icon={Leaf}
            title="Compensation Carbone"
            value="10,000+ tonnes"
            description="Programme de compensation d'énergie et partenariats environnementaux"
          />
          <ImpactCard
            icon={Globe2}
            title="Dons Environnementaux"
            value="5% des revenus"
            description="Soutien aux organisations non lucratives de protection de l'environnement"
          />
          <ImpactCard
            icon={Bike}
            title="Transport Durable"
            value="1M+ km"
            description="Promotion du vélo comme moyen de transport écologique"
          />
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">Notre Vision</h3>
          <p className="text-gray-400 mb-8">
            Nous croyons qu'en combinant la technologie blockchain avec le fitness, 
            nous pouvons créer un impact positif sur l'environnement tout en encourageant 
            un mode de vie plus sain.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3">
              <div className="bg-green-500/20 p-2 rounded-full">
                <Leaf className="w-5 h-5 text-green-400" />
              </div>
              <span className="text-gray-300">Réduction des émissions de CO2</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-green-500/20 p-2 rounded-full">
                <Bike className="w-5 h-5 text-green-400" />
              </div>
              <span className="text-gray-300">Promotion du transport durable</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-green-500/20 p-2 rounded-full">
                <Globe2 className="w-5 h-5 text-green-400" />
              </div>
              <span className="text-gray-300">Soutien aux initiatives vertes</span>
            </div>
          </div>
        </div>

        {/* Support Bot */}
        <div className="flex items-center justify-center space-x-8 bg-white/5 backdrop-blur-lg rounded-2xl p-8">
          <div className="flex-1 max-w-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Support 24/7</h3>
            <p className="text-gray-400 mb-6">
              Notre assistant virtuel est disponible à tout moment pour répondre à vos questions 
              et vous aider dans votre parcours FixieRun.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-colors duration-200">
              <Bot className="w-5 h-5" />
              <span>Discuter avec notre assistant</span>
            </button>
          </div>
          <div className="hidden md:block">
            <Bot className="w-32 h-32 text-green-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
