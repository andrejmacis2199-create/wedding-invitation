'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionLine, Branch } from './Ornaments';
import SectionAnchor from './SectionAnchor';

const palette = [
  { name: 'Слоновая кость', color: '#f5ecd9' },
  { name: 'Пудра', color: '#e8c8b8' },
  { name: 'Шалфей', color: '#c4cdb6' },
  { name: 'Пыльная роза', color: '#d8a8a8' },
  { name: 'Лаванда', color: '#c8bcd9' },
];

const DressCode: React.FC = () => {
  return (
    <section id="dresscode" className="bg-cream py-14 md:py-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <SectionAnchor />
        <p className="eyebrow mb-3">Дресс-код</p>
        <h2 className="section-title mb-5">Палитра нашей свадьбы</h2>
        <SectionLine className="mb-6" />

        <p className="font-body text-sm md:text-base text-warm-brown-soft mb-4 leading-relaxed max-w-xl mx-auto">
          Мы очень старались сделать праздник красивым и будем рады,
          <br className="hidden md:block" />
          если в своих нарядах вы поддержите цветовую гамму нашей свадьбы
        </p>
        <p className="font-heading italic text-base md:text-lg text-warm-brown mb-10">
          Предпочтение — пастельным оттенкам
        </p>

        <div className="flex items-center justify-center gap-3 mb-8 text-accent/60">
          <Branch size={64} />
          <Branch size={64} flip />
        </div>

        <div className="flex justify-center items-center gap-4 md:gap-6 flex-wrap">
          {palette.map(({ name, color }, idx) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.1, y: -4 }}
              className="cursor-default"
            >
              <div
                className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-soft-accent shadow-sm"
                style={{ backgroundColor: color }}
                aria-label={name}
                role="img"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DressCode;
