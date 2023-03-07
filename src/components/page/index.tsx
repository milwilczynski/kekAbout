import React, { ReactNode } from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

interface PageProps {
  offset: number;
  onClick: () => void;
  children: ReactNode | ReactNode[];
}

export const Page = ({ offset, onClick, children }: PageProps) => {
  return (
    <ParallaxLayer offset={offset} onClick={onClick}>
      {children}
    </ParallaxLayer>
  );
};
