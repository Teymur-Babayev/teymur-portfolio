import React, { createContext, useEffect, useState } from "react";

const StyleModeContext = createContext();

const StyleModeProvider = ({ children }) => {
    const [response, setResponse] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const [colorMode, setColorMode] = useState('#ec1839');
    const [currentRouter, setCurrentRouter] = useState('');

    const toggleResponse = () => {
        setResponse(!response);
    }
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }
    const toggleColorMode = (color) => {
        setColorMode(color);
    }
    const toggleCurrentRouter = (_router) => {
        setCurrentRouter(_router);
    }
    useEffect(() => {
        if (darkMode)
            document.body.classList.add('dark');
        else
            document.body.classList.remove('dark');
        document.documentElement.style.setProperty('--main-color', colorMode);
    }, [darkMode, colorMode])

    return (
        <StyleModeContext.Provider value={{ response, toggleResponse, darkMode, toggleDarkMode, colorMode, toggleColorMode, currentRouter, toggleCurrentRouter }}>
            {children}
        </StyleModeContext.Provider>
    );
}

export { StyleModeContext, StyleModeProvider }