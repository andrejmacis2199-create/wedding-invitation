'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Branch } from './Ornaments';
import SectionAnchor from './SectionAnchor';

const Welcome: React.FC = () => {
  return (
    <section id="welcome" className="bg-cream pt-14 md:pt-20 pb-6 md:pb-8">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <SectionAnchor />

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-5 text-accent"
        >
          <Heart size={26} />
        </motion.div>

        <p className="eyebrow mb-4">Дорогие гости</p>

        <div className="flex items-center justify-center gap-4 mb-6 text-accent/70">
          <Branch size={60} />
          <Branch size={60} flip />
        </div>

        <p className="font-heading text-xl sm:text-2xl md:text-3xl leading-relaxed text-warm-brown italic">
          Приглашаем вас разделить с нами радость
          <br className="hidden md:block" /> первого дня нашей семейной жизни
        </p>
      </div>
    </section>
  );
};

export default Welcome;
