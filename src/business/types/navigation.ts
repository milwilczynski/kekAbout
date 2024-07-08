export type Navigation = Record<
  'home' | 'about' | 'portfolio' | 'resume' | 'contact',
  {
    ref: React.RefObject<HTMLElement>;
    methodName: string;
    label: string;
    id: string;
  }
>;
