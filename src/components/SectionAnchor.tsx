'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MiniMonogram } from './Ornaments';

interface SectionAnchorProps {
  className?: string;
}

const SectionAnchor: React.FC<SectionAnchorProps> = ({ className = '' }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.6 }}
    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    className={`flex justify-center text-accent/75 mb-4 md:mb-5 ${className}`}
  >
    <MiniMonogram size={36} />
  </motion.div>
);

export default SectionAnchor;
