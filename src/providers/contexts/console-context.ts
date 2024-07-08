import React, { useContext } from 'react';
import type { MotionValue } from 'framer-motion';

interface ConsoleMainState {
  text: string;
  doAction: (text: string, action: () => void) => void;
  consoleRef: React.RefObject<HTMLDivElement>;
}

interface ConsolePositionProps {
  window: { x: number; y: number };
  isMinimalized: boolean;
  minimalize: () => void;
  maximize: () => void;
}

interface ConsoleAnimationProps {
  play: (() => void) | undefined;
  displayText: MotionValue<string>;
}

interface ConsoleContextType {
  state: ConsoleMainState;
  animation: ConsoleAnimationProps;
  position: ConsolePositionProps;
}

export const ConsoleContext = React.createContext<ConsoleContextType | null>(
  null,
);

export function useConsoleContext() {
  const ctx = useContext(ConsoleContext);
  if (!ctx)
    throw new Error('useConsoleContext must be used within ConsoleProvider');

  return ctx;
}
