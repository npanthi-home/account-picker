import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const context = {
        setTheme,
        theme
    };

    return (
        <div>
            <ThemeContext.Provider value={{ ...context }}>{children}</ThemeContext.Provider>
        </div>
    );
};

ThemeContextProvider.propTypes = {
    children: PropTypes.element.isRequired,
};

export default ThemeContextProvider;
