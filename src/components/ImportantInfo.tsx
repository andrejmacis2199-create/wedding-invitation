'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CornerOrnament, SectionLine } from './Ornaments';
import SectionAnchor from './SectionAnchor';

interface ImportantInfoProps {
  telegramChatLink?: string;
  organizerName?: string;
  organizerPhone?: string;
}

const ImportantInfo: React.FC<ImportantInfoProps> = ({
  telegramChatLink,
  organizerName = 'Анастасия',
  organizerPhone = '+7 900 954 01 74',
}) => {
  const phoneHref = `tel:${organizerPhone.replace(/\s/g, '')}`;

  return (
    <section id="important-info" className="bg-cream py-14 md:py-20 relative overflow-hidden">
      <div className="absolute top-4 left-4 text-accent/35 hidden md:block">
        <CornerOrnament size={56} />
      </div>
      <div className="absolute top-4 right-4 text-accent/35 hidden md:block">
        <CornerOrnament size={56} rotate={90} />
      </div>
      <div className="absolute bottom-4 left-4 text-accent/35 hidden md:block">
        <CornerOrnament size={56} rotate={270} />
      </div>
      <div className="absolute bottom-4 right-4 text-accent/35 hidden md:block">
        <CornerOrnament size={56} rotate={180} />
      </div>

      <div className="max-w-2xl mx-auto px-6 text-center relative">
        <SectionAnchor />
        <p className="eyebrow mb-3">А ещё</p>
        <h2 className="section-title mb-5">Важная информация</h2>
        <SectionLine className="mb-10" />

        <div className="mb-12">
          <p className="font-body text-base md:text-lg text-warm-brown leading-relaxed mb-5">
            Будет предоставлен трансфер до места проведения{' '}
            <br className="hidden md:block" />
            торжества и обратно — подробности в чате
          </p>
          {telegramChatLink && (
            <motion.a
              href={telegramChatLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-warm-brown bg-transparent hover:bg-accent hover:text-cream font-body text-xs uppercase tracking-[0.25em]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
              </svg>
              Перейти в Telegram-чат
            </motion.a>
          )}
        </div>

        <div className="border-t border-soft-accent pt-10">
          <p className="font-body text-sm text-warm-brown-soft mb-5 leading-relaxed max-w-lg mx-auto">
            Если у вас возникнут вопросы по организации торжества или вы планируете
            творческое поздравление, смело обращайтесь к нашему организатору
          </p>
          <p className="font-script text-4xl md:text-5xl text-accent-dark mb-2">{organizerName}</p>
          <a
            href={phoneHref}
            className="font-heading text-xl md:text-2xl italic text-warm-brown hover:text-accent-dark"
          >
            {organizerPhone}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImportantInfo;
