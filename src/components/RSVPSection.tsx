'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rings, SectionLine } from './Ornaments';
import SectionAnchor from './SectionAnchor';

interface RSVPSectionProps {
  formLink: string;
}

const RSVPSection: React.FC<RSVPSectionProps> = ({ formLink }) => {
  return (
    <section id="rsvp" className="bg-beige py-14 md:py-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <SectionAnchor />

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-6 text-accent-dark"
        >
          <Rings size={64} />
        </motion.div>

        <p className="eyebrow mb-3">Пожалуйста</p>
        <h2 className="section-title mb-5">Подтвердите присутствие</h2>
        <SectionLine className="mb-8" />

        <p className="font-body text-sm md:text-base text-warm-brown-soft mb-10 leading-relaxed">
          Заполните короткую форму ниже —
          <br className="hidden md:block" />
          это поможет нам лучше спланировать наш особенный день
        </p>

        <motion.a
          href={formLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04, boxShadow: '0 12px 24px rgba(184, 153, 104, 0.25)' }}
          whileTap={{ scale: 0.97 }}
          className="inline-block px-7 sm:px-10 py-3.5 bg-accent text-cream hover:bg-accent-dark font-body text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] shadow-md"
        >
          Заполнить анкету гостя
        </motion.a>
      </div>
    </section>
  );
};

export default RSVPSection;
