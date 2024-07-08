export type Navigation = Record<
  'home' | 'about' | 'portfolio' | 'resume' | 'contact',
  {
    ref: React.RefObject<HTMLElement>;
    action: () => void;
    label: string;
    id: string;
  }
>;
