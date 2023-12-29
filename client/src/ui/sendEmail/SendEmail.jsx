import React from 'react';
import s from './SendEmail.module.scss'


const SendEmail = () => {
    return (
        <div className={s.blockSendEmail}>
            <input type="text" placeholder="Enter email..."/>
            <button className={s.btnSendMail}>
                Subscribe
            </button>
        </div>
    );
};

export default SendEmail;