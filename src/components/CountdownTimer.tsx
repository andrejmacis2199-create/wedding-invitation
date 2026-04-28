'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionLine, Branch } from './Ornaments';

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function pluralize(n: number, forms: [string, string, string]): string {
  const abs = Math.abs(n) % 100;
  const n1 = abs % 10;
  if (abs > 10 && abs < 20) return forms[2];
  if (n1 > 1 && n1 < 5) return forms[1];
  if (n1 === 1) return forms[0];
  return forms[2];
}

const FORMS = {
  days: ['день', 'дня', 'дней'] as [string, string, string],
  hours: ['час', 'часа', 'часов'] as [string, string, string],
  minutes: ['минута', 'минуты', 'минут'] as [string, string, string],
  seconds: ['секунда', 'секунды', 'секунд'] as [string, string, string],
};

const calculateTimeLeft = (targetDate: string): TimeLeft => {
  const difference = +new Date(targetDate) - +new Date();
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const TimeBox: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="relative w-[68px] h-[68px] md:w-24 md:h-24 flex items-center justify-center">
      <div className="absolute inset-0 border border-accent/40 rotate-45" />
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 8, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="font-heading text-2xl md:text-5xl text-warm-brown relative"
        >
          {String(value).padStart(2, '0')}
        </motion.span>
      </AnimatePresence>
    </div>
    <span className="font-body text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.25em] text-warm-brown-soft mt-3">
      {label}
    </span>
  </div>
);

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(targetDate));
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const isOver =
    timeLeft &&
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <section id="countdown" className="bg-cream pt-6 md:pt-10 pb-14 md:pb-20 relative overflow-hidden">
      {/* угловые веточки */}
      <div className="absolute top-6 left-6 text-accent/30 hidden md:block">
        <Branch size={80} />
      </div>
      <div className="absolute bottom-6 right-6 text-accent/30 hidden md:block">
        <Branch size={80} flip />
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative">
        <SectionLine className="mb-8 md:mb-10" />
        <p className="eyebrow mb-3">До нашего дня</p>
        <h2 className="section-title mb-5">осталось</h2>
        <SectionLine className="mb-10" />

        {!timeLeft ? (
          <div className="h-24" />
        ) : isOver ? (
          <p className="font-script text-4xl md:text-5xl text-accent-dark">Сегодня наш день!</p>
        ) : (
          <div className="flex justify-center gap-2 md:gap-8 flex-wrap">
            <TimeBox value={timeLeft.days} label={pluralize(timeLeft.days, FORMS.days)} />
            <TimeBox value={timeLeft.hours} label={pluralize(timeLeft.hours, FORMS.hours)} />
            <TimeBox value={timeLeft.minutes} label={pluralize(timeLeft.minutes, FORMS.minutes)} />
            <TimeBox value={timeLeft.seconds} label={pluralize(timeLeft.seconds, FORMS.seconds)} />
          </div>
        )}
      </div>
    </section>
  );
};

export default CountdownTimer;
