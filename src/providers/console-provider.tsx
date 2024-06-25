import { FC, PropsWithChildren } from 'react';
import { ConsoleContext } from '~/providers/contexts/console-context';

interface ConsoleProviderProps {

}

export const ConsoleProvider: FC<PropsWithChildren<ConsoleProviderProps>> = ({ children }) => {
    return (<ConsoleContext.Provider value={{}}>{children}</ConsoleContext.Provider>);
};
    