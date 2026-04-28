import React from 'react';

interface OrnamentProps {
  className?: string;
  size?: number;
}

/* ===== Ботаническая веточка с листьями ===== */
export const Branch: React.FC<OrnamentProps & { flip?: boolean }> = ({
  className = '',
  size = 80,
  flip = false,
}) => (
  <svg
    width={size}
    height={size * 0.4}
    viewBox="0 0 200 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ transform: flip ? 'scaleX(-1)' : undefined }}
    aria-hidden="true"
  >
    <path
      d="M10 40 Q 60 30, 110 40 T 195 40"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <path d="M40 38 Q 35 25, 45 22 Q 50 30, 40 38 Z" fill="currentColor" opacity="0.7" />
    <path d="M70 42 Q 65 55, 75 58 Q 80 50, 70 42 Z" fill="currentColor" opacity="0.7" />
    <path d="M100 38 Q 95 22, 105 19 Q 110 28, 100 38 Z" fill="currentColor" opacity="0.7" />
    <path d="M130 42 Q 125 55, 135 58 Q 140 50, 130 42 Z" fill="currentColor" opacity="0.7" />
    <path d="M160 39 Q 155 26, 165 23 Q 170 32, 160 39 Z" fill="currentColor" opacity="0.7" />
    <circle cx="190" cy="40" r="2" fill="currentColor" />
  </svg>
);

/* ===== Лавровая полу-ветвь ===== */
export const Laurel: React.FC<OrnamentProps & { flip?: boolean }> = ({
  className = '',
  size = 90,
  flip = false,
}) => (
  <svg
    width={size}
    height={size * 1.6}
    viewBox="0 0 60 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ transform: flip ? 'scaleX(-1)' : undefined }}
    aria-hidden="true"
  >
    <path d="M30 95 Q 28 60, 30 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    {[15, 30, 45, 60, 75].map((y, i) => (
      <g key={`l-${i}`}>
        <path
          d={`M30 ${y} Q 18 ${y - 4}, 12 ${y + 4} Q 22 ${y + 6}, 30 ${y}`}
          fill="currentColor"
          opacity="0.65"
        />
        <path
          d={`M30 ${y + 7} Q 42 ${y + 3}, 48 ${y + 11} Q 38 ${y + 13}, 30 ${y + 7}`}
          fill="currentColor"
          opacity="0.65"
        />
      </g>
    ))}
    <circle cx="30" cy="3" r="1.6" fill="currentColor" />
  </svg>
);

/* ===== Сердце-контур ===== */
export const Heart: React.FC<OrnamentProps> = ({ className = '', size = 32 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M16 27 C 16 27, 4 19, 4 11 C 4 7, 7 4, 11 4 C 13 4, 15 5, 16 7 C 17 5, 19 4, 21 4 C 25 4, 28 7, 28 11 C 28 19, 16 27, 16 27 Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

/* ===== Кольца с маленьким бриллиантом ===== */
export const Rings: React.FC<OrnamentProps> = ({ className = '', size = 64 }) => (
  <svg
    width={size}
    height={size * 0.65}
    viewBox="0 0 64 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="22" cy="24" r="14" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="42" cy="24" r="14" stroke="currentColor" strokeWidth="1.2" />
    <path d="M19 8 L 22 11 L 25 8 Z" fill="currentColor" />
    <path d="M39 8 L 42 11 L 45 8 Z" fill="currentColor" />
  </svg>
);

/* ===== Голубь line-art с оливковой веточкой ===== */
export const Dove: React.FC<OrnamentProps> = ({ className = '', size = 64 }) => (
  <svg
    width={size}
    height={size * 0.8}
    viewBox="0 0 100 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* тело и голова голубя */}
    <path
      d="M18 46 Q 12 40, 14 34 Q 22 28, 32 32 Q 38 22, 50 24 Q 60 16, 72 18 Q 82 22, 80 30 Q 76 34, 70 33 Q 66 39, 58 40 Q 50 48, 38 48 Q 26 50, 18 46 Z"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinejoin="round"
      strokeLinecap="round"
      fill="none"
    />
    {/* верхнее крыло — изящная дуга с пёрышками */}
    <path
      d="M30 32 Q 36 18, 50 22 Q 58 14, 66 16"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeLinecap="round"
      fill="none"
    />
    <path d="M36 26 Q 38 22, 42 22" stroke="currentColor" strokeWidth="0.6" fill="none" />
    <path d="M44 24 Q 46 20, 50 22" stroke="currentColor" strokeWidth="0.6" fill="none" />
    <path d="M54 22 Q 56 18, 60 18" stroke="currentColor" strokeWidth="0.6" fill="none" />
    {/* хвост */}
    <path
      d="M14 34 L 6 30 M 14 36 L 4 36 M 14 38 L 6 42"
      stroke="currentColor"
      strokeWidth="0.7"
      strokeLinecap="round"
    />
    {/* глазик и клюв */}
    <circle cx="76" cy="22" r="0.8" fill="currentColor" />
    <path d="M82 22 L 88 20 L 82 24 Z" fill="currentColor" opacity="0.85" />
    {/* оливковая веточка в клюве */}
    <path
      d="M88 22 Q 95 22, 99 18"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeLinecap="round"
      fill="none"
    />
    <path d="M92 21 Q 90 18, 92 16 Q 95 18, 92 21 Z" fill="currentColor" opacity="0.7" />
    <path d="M97 19 Q 95 16, 97 14 Q 100 16, 97 19 Z" fill="currentColor" opacity="0.7" />
    <path d="M94 22 Q 96 25, 94 27 Q 91 25, 94 22 Z" fill="currentColor" opacity="0.7" />
    {/* мерцающие звёздочки */}
    <circle cx="20" cy="18" r="0.7" fill="currentColor" opacity="0.6" />
    <circle cx="28" cy="12" r="0.5" fill="currentColor" opacity="0.5" />
    <circle cx="14" cy="60" r="0.6" fill="currentColor" opacity="0.5" />
    <circle cx="60" cy="58" r="0.7" fill="currentColor" opacity="0.6" />
    <circle cx="86" cy="44" r="0.5" fill="currentColor" opacity="0.5" />
  </svg>
);

/* ===== Угловой завиток ===== */
export const CornerOrnament: React.FC<OrnamentProps & { rotate?: number }> = ({
  className = '',
  size = 40,
  rotate = 0,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ transform: `rotate(${rotate}deg)` }}
    aria-hidden="true"
  >
    <path
      d="M2 38 Q 2 20, 12 12 Q 22 4, 38 2"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="38" cy="2" r="1.5" fill="currentColor" />
    <path d="M14 16 Q 8 18, 6 24" stroke="currentColor" strokeWidth="0.8" fill="none" />
    <circle cx="6" cy="24" r="1" fill="currentColor" />
  </svg>
);

/* ===== Монограмма «А ♥ В» ===== */
export const Monogram: React.FC<OrnamentProps> = ({ className = '', size = 100 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* двойное золотистое кольцо */}
    <circle cx="60" cy="60" r="56" stroke="currentColor" strokeWidth="0.9" opacity="0.85" />
    <circle cx="60" cy="60" r="52" stroke="currentColor" strokeWidth="0.4" opacity="0.55" />
    {/* верхняя веточка */}
    <path
      d="M52 9 Q 60 5, 68 9"
      stroke="currentColor"
      strokeWidth="0.7"
      strokeLinecap="round"
      fill="none"
    />
    <path d="M55 8 Q 53 5, 56 4 Q 58 6, 55 8 Z" fill="currentColor" opacity="0.7" />
    <path d="M65 8 Q 67 5, 64 4 Q 62 6, 65 8 Z" fill="currentColor" opacity="0.7" />
    <circle cx="60" cy="6" r="0.9" fill="currentColor" />
    {/* нижняя веточка */}
    <path
      d="M52 111 Q 60 115, 68 111"
      stroke="currentColor"
      strokeWidth="0.7"
      strokeLinecap="round"
      fill="none"
    />
    <path d="M55 112 Q 53 115, 56 116 Q 58 114, 55 112 Z" fill="currentColor" opacity="0.7" />
    <path d="M65 112 Q 67 115, 64 116 Q 62 114, 65 112 Z" fill="currentColor" opacity="0.7" />
    <circle cx="60" cy="114" r="0.9" fill="currentColor" />
    {/* буква А */}
    <text
      x="40"
      y="74"
      fontFamily="var(--font-cormorant), Georgia, serif"
      fontSize="46"
      fontStyle="italic"
      fontWeight="400"
      fill="currentColor"
      textAnchor="middle"
    >
      А
    </text>
    {/* контурное сердечко между */}
    <path
      d="M60 64 C 60 64, 54 58, 54 53 C 54 50, 56 48, 58 48 C 59 48, 60 49, 60 50 C 60 49, 61 48, 62 48 C 64 48, 66 50, 66 53 C 66 58, 60 64, 60 64 Z"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinejoin="round"
      fill="none"
      opacity="0.9"
    />
    {/* буква В */}
    <text
      x="80"
      y="74"
      fontFamily="var(--font-cormorant), Georgia, serif"
      fontSize="46"
      fontStyle="italic"
      fontWeight="400"
      fill="currentColor"
      textAnchor="middle"
    >
      В
    </text>
  </svg>
);

/* ===== Мини-монограмма (для каждой секции) ===== */
export const MiniMonogram: React.FC<OrnamentProps> = ({ className = '', size = 36 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="30" cy="30" r="27" stroke="currentColor" strokeWidth="0.6" opacity="0.85" />
    <text
      x="18"
      y="38"
      fontFamily="var(--font-cormorant), Georgia, serif"
      fontSize="20"
      fontStyle="italic"
      fontWeight="400"
      fill="currentColor"
      textAnchor="middle"
    >
      А
    </text>
    <circle cx="30" cy="30" r="0.9" fill="currentColor" opacity="0.85" />
    <text
      x="42"
      y="38"
      fontFamily="var(--font-cormorant), Georgia, serif"
      fontSize="20"
      fontStyle="italic"
      fontWeight="400"
      fill="currentColor"
      textAnchor="middle"
    >
      В
    </text>
    <circle cx="30" cy="2.5" r="0.8" fill="currentColor" opacity="0.6" />
    <circle cx="30" cy="57.5" r="0.8" fill="currentColor" opacity="0.6" />
  </svg>
);

/* ===== Декоративная линия с центральным элементом (для использования как локальный divider в секциях) ===== */
export const SectionLine: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <span className="block h-px w-12 bg-soft-accent" />
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-accent"
      aria-hidden="true"
    >
      <path d="M7 1 L 8 6 L 13 7 L 8 8 L 7 13 L 6 8 L 1 7 L 6 6 Z" fill="currentColor" opacity="0.7" />
    </svg>
    <span className="block h-px w-12 bg-soft-accent" />
  </div>
);
