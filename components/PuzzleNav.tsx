
import React from 'react';

// Specialized Jigsaw Path with In/Out Logic
const getJigsawPath = (top: number, right: number, bottom: number, left: number) => {
  // 0: Flat, 1: Out (Tab), -1: In (Socket)
  const size = 100;
  const p = 15; // tab size
  const n = 12; // neck width
  
  let d = 'M 0,0';

  // Top edge
  if (top === 0) d += ` L ${size},0`;
  else if (top === 1) d += ` L ${size/2 - n},0 C ${size/2 - n},-${p} ${size/2 + n},-${p} ${size/2 + n},0 L ${size},0`;
  else d += ` L ${size/2 - n},0 C ${size/2 - n},${p} ${size/2 + n},${p} ${size/2 + n},0 L ${size},0`;

  // Right edge
  if (right === 0) d += ` L ${size},${size}`;
  else if (right === 1) d += ` L ${size},${size/2 - n} C ${size + p},${size/2 - n} ${size + p},${size/2 + n} ${size},${size/2 + n} L ${size},${size}`;
  else d += ` L ${size},${size/2 - n} C ${size - p},${size/2 - n} ${size - p},${size/2 + n} ${size},${size/2 + n} L ${size},${size}`;

  // Bottom edge
  if (bottom === 0) d += ` L 0,${size}`;
  else if (bottom === 1) d += ` L ${size/2 + n},${size} C ${size/2 + n},${size + p} ${size/2 - n},${size + p} ${size/2 - n},${size} L 0,${size}`;
  else d += ` L ${size/2 + n},${size} C ${size/2 + n},${size - p} ${size/2 - n},${size - p} ${size/2 - n},${size} L 0,${size}`;

  // Left edge
  if (left === 0) d += ' Z';
  else if (left === 1) d += ` L 0,${size/2 + n} C -${p},${size/2 + n} -${p},${size/2 - n} 0,${size/2 - n} Z`;
  else d += ` L 0,${size/2 + n} C ${p},${size/2 + n} ${p},${size/2 - n} 0,${size/2 - n} Z`;

  return d;
};

interface PieceProps {
  label: string;
  target: string;
  color: string;
  edges: [number, number, number, number]; // top, right, bottom, left
}

const PuzzlePiece: React.FC<PieceProps> = ({ label, target, color, edges }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
  };

  return (
    <button
      onClick={() => scrollTo(target)}
      className="group relative w-28 h-28 md:w-44 md:h-44 transition-all duration-300 hover:scale-110 active:scale-95 z-10 hover:z-30"
    >
      <svg 
        viewBox="-20 -20 140 140" 
        className={`w-full h-full drop-shadow-md filter group-hover:drop-shadow-2xl transition-all ${color}`}
      >
        {/* Fix: Explicitly pass tuple elements by index to resolve spread argument type error on line 59 */}
        <path 
          d={getJigsawPath(edges[0], edges[1], edges[2], edges[3])} 
          className="fill-current stroke-white/40 stroke-2"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <span className="text-white font-kids font-bold text-[10px] md:text-base leading-tight select-none pointer-events-none">
          {label}
        </span>
      </div>
    </button>
  );
};

const PuzzleNav: React.FC = () => {
  // Grid layout interlocking logic (0: Flat, 1: Out, -1: In)
  const pieces: PieceProps[] = [
    { label: 'WER?', target: 'wer', color: 'text-[#6A2C91]', edges: [0, 1, 1, 0] },
    { label: 'WARUM?', target: 'warum', color: 'text-[#2EB5B5]', edges: [0, 1, 1, -1] },
    { label: 'WAS?', target: 'was', color: 'text-[#84C225]', edges: [0, 0, 1, -1] },
    { label: 'FÜR WEN?', target: 'wer-fuer', color: 'text-[#6A2C91]', edges: [-1, 1, 0, 0] },
    { label: 'WIE?', target: 'wie', color: 'text-[#2EB5B5]', edges: [-1, 1, 0, -1] },
    { label: 'WIEVIEL?', target: 'wieviel', color: 'text-[#84C225]', edges: [-1, 0, 0, -1] },
  ];

  return (
    <div className="flex flex-col items-center py-10 overflow-visible">
      <div className="grid grid-cols-3 gap-0">
        {pieces.map((p, i) => (
          <div key={i} className={`${i >= 3 ? '-mt-4 md:-mt-6' : ''} ${i % 3 !== 0 ? '-ml-4 md:-ml-6' : ''}`}>
            <PuzzlePiece {...p} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PuzzleNav;
