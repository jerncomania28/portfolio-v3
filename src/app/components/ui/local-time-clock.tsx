'use client';

import { useSyncExternalStore } from 'react';

import { AnimatePresence, motion } from 'motion/react';

function subscribe(callback: () => void) {
  const id = setInterval(callback, 1000);

  return () => clearInterval(id);
}

function getSnapshot() {
  return new Date().toLocaleTimeString('en-US', {
    timeZone: 'Africa/Lagos',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

function getServerSnapshot() {
  return null;
}

export function LocalTimeClock() {
  const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!time) {
    return (
      <span className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium tracking-widest text-[#666666B2] uppercase">
          Local Time
        </span>
        <span className="text-xl leading-[100%] font-normal -tracking-[2%] text-[#666666B2]">
          --:-- GMT+1
        </span>
      </span>
    );
  }

  // Split "2:32 PM" into hours, minutes, period
  const colonIndex = time.indexOf(':');
  const hours = time.slice(0, colonIndex);
  const rest = time.slice(colonIndex + 1); // "32 PM"
  const minutes = rest.slice(0, 2);
  const period = rest.slice(2).trim(); // "PM"

  return (
    <motion.span
      className="flex flex-col items-center gap-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <span className="text-xs font-medium tracking-widest text-[#666666B2] uppercase">
        Local Time
      </span>
      <span className="inline-flex items-baseline text-xl leading-[100%] font-normal -tracking-[2%] text-[#666666B2]">
        <span>{hours}</span>
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        >
          :
        </motion.span>
        <AnimatePresence mode="popLayout">
          <motion.span
            key={minutes}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.3 }}
          >
            {minutes}
          </motion.span>
        </AnimatePresence>
        <span className="ml-1">{period}</span>
        <span className="ml-1.5 text-sm text-[#66666680]">GMT+1</span>
      </span>
    </motion.span>
  );
}
