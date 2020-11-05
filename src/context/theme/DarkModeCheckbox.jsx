import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const DarkModeCheckbox = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className="dark_mode_checkbox">
            <label>
                Go Dark
            <input
                    type="checkbox"
                    checked={theme === 'dark'}
                    onChange={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}
                />
            </label>
        </div>
    )
}

export default DarkModeCheckbox;

