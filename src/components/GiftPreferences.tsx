'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, SectionLine } from './Ornaments';
import SectionAnchor from './SectionAnchor';

const GiftPreferences: React.FC = () => {
  return (
    <section id="gifts" className="bg-beige py-14 md:py-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <SectionAnchor />

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-5 text-accent"
        >
          <Heart size={28} />
        </motion.div>

        <p className="eyebrow mb-3">От всего сердца</p>
        <h2 className="section-title mb-5">Подарки и пожелания</h2>
        <SectionLine className="mb-8" />

        <p className="font-heading text-xl md:text-2xl italic text-warm-brown leading-relaxed max-w-xl mx-auto">
          К сожалению, долго наслаждаться красотой подаренных букетов не удастся,
          поэтому свои тёплые слова и пожелания приносите в сердцах,
          а подарки — в конвертах
        </p>
      </div>
    </section>
  );
};

export default GiftPreferences;
