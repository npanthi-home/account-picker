import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../../context/theme/ThemeContext';
import useAccountApis from '../../../hooks/useAccountApis';
import './NewAccountForm.scss';

const NewAccountForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [platform, setPlatform] = useState('');
    const { createNewAccount } = useAccountApis('1181c201-6faf-4500-9ce2-3acc01bbe47d');
    const { theme } = useContext(ThemeContext);
    
    return (
        <div className={`new_form ${theme}`}>
            <input className="input_box" type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
            <input className="input_box" type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <input className="input_box" type="text" placeholder="category" onChange={(e) => setPlatform(e.target.value)} />
            <div className="buttons">
                <input
                    type="button"
                    className={`submit_button ${theme}`}
                    onClick={() => {
                        createNewAccount({
                            username,
                            email,
                            category: platform,
                            lastAccessed: new Date().getTime(),
                            favorite: false,
                        });
                    }}
                    value="Create Account"
                />
                 <input
                    type="button"
                    className={`cancel_button ${theme}`}
                    onClick={() => {

                    }}
                    value="Cancel"
                />
            </div>

        </div>
    )
}

export default NewAccountForm;

