import React, { useContext } from 'react';

interface ConsoleContextProps {

}

export const ConsoleContext = React.createContext<ConsoleContextProps>({});

export const useConsoleContext = () => {
    const ctx = useContext(ConsoleContext);
    if (!ctx) throw new Error('useConsoleContext must be used within ConsoleProvider');

    return ctx;
};