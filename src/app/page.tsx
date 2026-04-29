'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import CountdownTimer from '../components/CountdownTimer';
import LocationMap from '../components/LocationMap';
import Welcome from '../components/Welcome';
import Divider from '../components/Divider';
import { Dove, Laurel, Monogram, Heart, Branch } from '../components/Ornaments';

const Timeline = dynamic(() => import('../components/Timeline'));
const DressCode = dynamic(() => import('../components/DressCode'));
const GiftPreferences = dynamic(() => import('../components/GiftPreferences'));
const ImportantInfo = dynamic(() => import('../components/ImportantInfo'));
const RSVPSection = dynamic(() => import('../components/RSVPSection'));

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <main className="bg-cream">
      {/* HERO */}
      <section
        ref={heroRef}
        id="hero"
        className="relative h-screen min-h-[640px] w-full flex items-end justify-center pb-6 md:pb-10 text-cream overflow-hidden bg-warm-brown"
      >
        <motion.div
          className="absolute inset-0 will-change-transform overflow-hidden"
          style={{ scale: bgScale, y: bgY }}
        >
          <Image
            src="/photos/IMG_0861.JPG"
            alt=""
            fill
            priority
            sizes="100vw"
            quality={75}
            className="object-cover scale-110"
            style={{ objectPosition: 'center' }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-warm-brown/30" />

        {/* левая декоративная планка */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-20 bg-warm-brown/95 z-[5] flex flex-col items-center justify-between py-8 md:py-12 pointer-events-none border-r border-accent/30">
          <div className="text-cream/70">
            <Branch size={40} />
          </div>
          <span
            className="font-script text-cream/80 text-sm md:text-base tracking-[0.4em] whitespace-nowrap"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            save the date
          </span>
          <div className="text-cream/70">
            <Branch size={40} flip />
          </div>
        </div>

        {/* правая декоративная планка */}
        <div className="absolute inset-y-0 right-0 w-12 md:w-20 bg-warm-brown/95 z-[5] flex flex-col items-center justify-between py-8 md:py-12 pointer-events-none border-l border-accent/30">
          <div className="text-cream/70">
            <Branch size={40} />
          </div>
          <span
            className="font-script text-cream/80 text-sm md:text-base tracking-[0.4em] whitespace-nowrap"
            style={{ writingMode: 'vertical-rl' }}
          >
            07 · 08 · 2026
          </span>
          <div className="text-cream/70">
            <Branch size={40} flip />
          </div>
        </div>

        {/* голубь сверху */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ delay: 0.3, duration: 1.6, ease: 'easeOut' }}
          className="absolute top-12 left-1/2 -translate-x-1/2 z-10 text-cream"
        >
          <Dove size={56} />
        </motion.div>

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-10 text-center px-6"
        >
          {/* имена с лавровыми ветвями */}
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-6">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 0.85 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="hidden md:block text-cream"
            >
              <Laurel size={70} />
            </motion.div>

            <motion.h1
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 1.2 }}
              className="font-script text-5xl sm:text-6xl md:text-8xl leading-none"
            >
              Андрей
              <span className="block font-heading italic text-xl sm:text-2xl md:text-4xl my-1 sm:my-2 text-cream/90">
                &amp;
              </span>
              Виктория
            </motion.h1>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 0.85 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="hidden md:block text-cream"
            >
              <Laurel size={70} flip />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="flex items-center justify-center gap-3 md:gap-4 max-w-md mx-auto"
          >
            <span className="flex-grow h-px bg-cream/60" />
            <span className="font-heading text-base md:text-xl tracking-[0.3em] md:tracking-[0.4em]">
              07 · 08 · 2026
            </span>
            <span className="flex-grow h-px bg-cream/60" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.9, scale: 1 }}
            transition={{ delay: 1.7, duration: 1.2 }}
            className="mt-6 md:mt-8 flex justify-center text-cream"
          >
            <Monogram size={72} />
          </motion.div>
        </motion.div>
      </section>

      {/* WELCOME + COUNTDOWN — единая секция */}
      <motion.div {...fadeIn}>
        <Welcome />
      </motion.div>
      <motion.div {...fadeIn}>
        <CountdownTimer targetDate="2026-08-07T16:30:00" />
      </motion.div>

      <Divider bg="cream" />

      {/* LOCATION */}
      <motion.div {...fadeIn}>
        <LocationMap />
      </motion.div>

      <Divider bg="beige" />

      {/* TIMELINE */}
      <motion.div {...fadeIn}>
        <Timeline />
      </motion.div>

      <Divider bg="cream" />

      {/* DRESS CODE */}
      <motion.div {...fadeIn}>
        <DressCode />
      </motion.div>

      <Divider bg="beige" />

      {/* GIFTS */}
      <motion.div {...fadeIn}>
        <GiftPreferences />
      </motion.div>

      <Divider bg="cream" />

      {/* IMPORTANT INFO */}
      <motion.div {...fadeIn}>
        <ImportantInfo />
      </motion.div>

      <Divider bg="beige" />

      {/* RSVP */}
      <motion.div {...fadeIn}>
        <RSVPSection formLink="https://forms.yandex.ru/u/69f02cdb90fa7b1e90591531" />
      </motion.div>

      {/* FOOTER */}
      <footer className="bg-beige py-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.85, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center gap-4 text-accent-dark"
        >
          <Monogram size={56} />
          <Heart size={18} className="opacity-60" />
          <p className="font-script text-2xl">Андрей &amp; Виктория · 2026</p>
        </motion.div>
      </footer>
    </main>
  );
}
