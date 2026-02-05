import { createContext, useContext, useState, useRef } from 'react';

const OnScreenContext = createContext();

export const useOnScreen = () => {
    const context = useContext(OnScreenContext);
    if (!context) {
        throw new Error('useOnScreen must be used within a OnScreenProvider');
    }
    return context;
};

export const OnScreenProvider = ({ children }) => {
    const DivScreenRef = useRef(null);
    const [isOnScreen, setIsOnScreen] = useState(false);

    const isElementOnScreen = (element) => {
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return rect.top >= 0 && rect.bottom <= (windowHeight + 200);
    };

    const checkIfOnScreen = () => {
        const element = DivScreenRef.current;
        if (isElementOnScreen(element)) {
            setIsOnScreen(true)
        } else {
            setIsOnScreen(false);
        }
    };

    return (
        <OnScreenContext.Provider value={{ isOnScreen, DivScreenRef, checkIfOnScreen }}>
            {children}
        </OnScreenContext.Provider>
    );
};