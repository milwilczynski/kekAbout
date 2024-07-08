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
      action: () => {
        //terminal.position.maximize();
        terminal.state.doAction('_initHome()', () => {
          refs.home.current?.scrollIntoView({ behavior: 'smooth' });
          //setTimeout(terminal.position.minimalize, HIDE_TERMINAL_AFTER);
        });
      },
      ref: refs.home,
    },
    about: {
      label: '.about()',
      id: 'about',
      action: () => {
        //terminal.position.maximize();
        terminal.state.doAction('_initAbout()', () => {
          refs.about.current?.scrollIntoView({ behavior: 'smooth' });
          //setTimeout(terminal.position.minimalize, HIDE_TERMINAL_AFTER);
        });
      },
      ref: refs.about,
    },
    portfolio: {
      label: '.portfolio()',
      id: 'portfolio',
      action: () => {
        //terminal.position.maximize();
        terminal.state.doAction('_initPortfolio()', () => {
          refs.portfolio.current?.scrollIntoView({ behavior: 'smooth' });
          // setTimeout(terminal.position.minimalize, HIDE_TERMINAL_AFTER);
        });
      },
      ref: refs.portfolio,
    },
    resume: {
      label: '.resume()',
      id: 'resume',
      action: () => {
        //terminal.position.maximize();
        terminal.state.doAction('_initResume()', () => {
          refs.resume.current?.scrollIntoView({ behavior: 'smooth' });
          //setTimeout(terminal.position.minimalize, HIDE_TERMINAL_AFTER);
        });
      },
      ref: refs.resume,
    },
    contact: {
      label: '.contact()',
      id: 'contact',
      action: () => {
        //terminal.position.maximize();
        terminal.state.doAction('_initContact()', () => {
          refs.contact.current?.scrollIntoView({ behavior: 'smooth' });
          //setTimeout(terminal.position.minimalize, HIDE_TERMINAL_AFTER);
        });
      },
      ref: refs.contact,
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
