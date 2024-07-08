import React, { useContext } from 'react';
import { Navigation } from '~/business/types/navigation';

interface NavigationContextType {
  navigation: Navigation;
}

export const NavigationContext =
  React.createContext<NavigationContextType | null>(null);

export function useNavigationContext() {
  const ctx = useContext(NavigationContext);
  if (!ctx)
    throw new Error(
      'useNavigationContext must be used within NavigationProvider',
    );

  return ctx;
}
