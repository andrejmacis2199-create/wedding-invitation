'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Branch, SectionLine } from './Ornaments';
import SectionAnchor from './SectionAnchor';

const YANDEX_LINK =
  'https://yandex.ru/maps/org/medvezhya_berloga/144857791959/?ll=39.570074%2C51.637316&z=11';

const LOCATION_PHOTO =
  '/photos/TWXkjOItEUgf--2nkk_gMgJsAJB6zZWvDeHIUPy4MyPdF0dGGasXME9wcer7ZnKj8E0OA3PCvjmXrYlnlt2cH05w.jpg';

const LocationMap: React.FC = () => {
  return (
    <section id="location" className="bg-cream py-14 md:py-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <SectionAnchor />

        {/* фото в овальной рамке */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-[220px] h-[280px] sm:w-[260px] sm:h-[320px] md:w-[300px] md:h-[360px] mx-auto mb-8"
        >
          {/* внешняя золотистая рамка */}
          <div className="absolute inset-0 rounded-[50%] border border-accent/50 shadow-md" />
          <div className="absolute inset-2 rounded-[50%] overflow-hidden">
            <Image
              src={LOCATION_PHOTO}
              alt="База отдыха «Медвежья берлога»"
              fill
              sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, 300px"
              className="object-cover"
            />
          </div>

          {/* декоративные веточки по бокам фото */}
          <div className="absolute -left-4 sm:-left-8 top-1/2 -translate-y-1/2 text-accent hidden sm:block">
            <Branch size={70} />
          </div>
          <div className="absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 text-accent hidden sm:block">
            <Branch size={70} flip />
          </div>
        </motion.div>

        <p className="eyebrow mb-3">Локация</p>
        <h2 className="section-title mb-4 px-2">
          База отдыха
          <br />
          «Медвежья берлога»
        </h2>
        <SectionLine className="mb-6" />

        <p className="font-body text-sm md:text-base text-warm-brown-soft mb-8 leading-relaxed">
          Воронежская область, Новоусманский район,
          <br className="hidden md:block" />
          Хреновское сельское поселение
        </p>

        <motion.a
          href={YANDEX_LINK}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-3 sm:py-3.5 border border-accent text-warm-brown bg-transparent hover:bg-accent hover:text-cream font-body text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.18em] sm:tracking-[0.25em]"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
              fill="currentColor"
            />
          </svg>
          Открыть в Яндекс.Картах
        </motion.a>
      </div>
    </section>
  );
};

export default LocationMap;
