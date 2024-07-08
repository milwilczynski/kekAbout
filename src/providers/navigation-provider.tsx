import React, { FC, PropsWithChildren, useMemo, useRef } from 'react';
import { NavigationContext } from '~/providers/contexts/navigation-context';
import { useConsoleContext } from '~/providers/contexts/console-context';

const HIDE_TERMINAL_AFTER = 2000;
const useNavigation = () => {
  const terminal = useConsoleContext();
  const refs = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    portfolio: useRef<HTMLElement>(null),
    resume: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  const navigation = {
    home: {
      label: '.home()',
      id: 'home',
      ref: refs.home,
      methodName: '_initHome()',
    },
    about: {
      label: '.about()',
      id: 'about',
      ref: refs.about,
      methodName: '_initAbout()',
    },
    portfolio: {
      label: '.portfolio()',
      id: 'portfolio',
      ref: refs.portfolio,
      methodName: '_initPortfolio()',
    },
    resume: {
      label: '.resume()',
      id: 'resume',
      ref: refs.resume,
      methodName: '_initResume()',
    },
    contact: {
      label: '.contact()',
      id: 'contact',
      ref: refs.contact,
      methodName: '_initContact()',
    },
  };

  return navigation;
};

interface NavigationProviderProps {}

export const NavigationProvider: FC<
  PropsWithChildren<NavigationProviderProps>
> = ({ children }) => {
  const navigation = useNavigation();
  const value = useMemo(() => {
    return { navigation };
  }, []);

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};
