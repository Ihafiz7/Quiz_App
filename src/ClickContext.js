import React, { useContext } from "react";

const DarkMode = React.createContext();

 export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = React.useState(false);
    const toggleSwitch = () => {
        setDarkMode((prevState) => !prevState)
    };

    return (
        <DarkMode.Provider value={{ darkMode, toggleSwitch }}>
            { children }
        </DarkMode.Provider>
    );
}

export const useDarkMode = () => {
    return useContext(DarkMode);
};
