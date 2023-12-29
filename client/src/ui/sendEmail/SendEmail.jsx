import React, {useState} from 'react';
import s from './SendEmail.module.scss'


const SendEmail = () => {

    const [inputEmail, setInputEmail] = useState('')

    return (
        <div className={s.blockSendEmail}>
            <form >
                <input
                    value={inputEmail}
                    onChange={(e) => setInputEmail(e.target.value)}
                    type="text"
                    placeholder="Enter email..."
                />
                <button
                    type={'submit'}
                    className={s.btnSendMail}
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default SendEmail;