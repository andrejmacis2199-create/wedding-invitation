'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionLine, Branch } from './Ornaments';
import SectionAnchor from './SectionAnchor';

const ChampagneIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <motion.path
      d="M14 4 H26 L24 16 C24 20 22 22 20 22 C18 22 16 20 16 16 L14 4 Z M20 22 V34 M14 34 H26"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.4, ease: 'easeOut' }}
    />
    <circle cx="18" cy="11" r="0.8" fill="currentColor" />
    <circle cx="22" cy="13" r="0.8" fill="currentColor" />
    <circle cx="20" cy="9" r="0.6" fill="currentColor" />
  </svg>
);

const RingsIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <motion.circle
      cx="15" cy="22" r="9" stroke="currentColor" strokeWidth="1.2" fill="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.4, ease: 'easeOut' }}
    />
    <motion.circle
      cx="25" cy="22" r="9" stroke="currentColor" strokeWidth="1.2" fill="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.4, ease: 'easeOut', delay: 0.2 }}
    />
    <path d="M13 9 L15 12 L17 9 Z" fill="currentColor" />
    <path d="M23 9 L25 12 L27 9 Z" fill="currentColor" />
  </svg>
);

const MoonIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <motion.path
      d="M27 23 C22 23 17 18 17 13 C17 11 17.5 9.5 18.3 8 C13 9 9 13.5 9 19 C9 25 14 30 20 30 C24.5 30 28.5 27.2 30 23 C29 23 28 23 27 23 Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
      fill="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.6, ease: 'easeOut' }}
    />
    <circle cx="32" cy="11" r="1" fill="currentColor" />
    <circle cx="34" cy="16" r="0.7" fill="currentColor" />
    <circle cx="29" cy="8" r="0.7" fill="currentColor" />
  </svg>
);

const events = [
  { time: '16:30', description: 'Фуршет', Icon: ChampagneIcon },
  { time: '17:00', description: 'Праздничный банкет', Icon: RingsIcon },
  { time: '23:00', description: 'Завершение вечера', Icon: MoonIcon },
];

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="bg-beige py-14 md:py-20 relative">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <SectionAnchor />
        <p className="eyebrow mb-3">Программа дня</p>
        <h2 className="section-title mb-5">Тайминг торжества</h2>
        <SectionLine className="mb-8" />

        <div className="flex items-center justify-center gap-3 mb-10 text-accent/70">
          <Branch size={70} />
          <Branch size={70} flip />
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-6 bottom-6 w-px bg-soft-accent -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col gap-10">
            {events.map(({ time, description, Icon }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="relative flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6"
              >
                <div className="md:w-1/2 md:text-right md:pr-8">
                  <span className="font-heading text-3xl md:text-4xl text-accent-dark">{time}</span>
                </div>
                <div className="text-accent z-10 bg-beige p-2 rounded-full">
                  <Icon />
                </div>
                <div className="md:w-1/2 md:text-left md:pl-8">
                  <span className="font-heading text-lg sm:text-xl md:text-2xl italic text-warm-brown">
                    {description}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
