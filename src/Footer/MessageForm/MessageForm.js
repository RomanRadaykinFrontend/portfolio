import React, { useState} from 'react';
import style from './MessageForm.module.scss';
import emailJs from "emailjs-com";

const MessageForm = () => {
    const initState = {

    }

    const [value, setValue] = useState()

    function sendEmail(e) {
        console.log(e)
        e.preventDefault();

        emailJs.sendForm('service_ei1ez18', 'template_52m8u09', e.currentTarget, 'user_FIWkrWAV7JvPTrsEZmeDG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return(
        <>
            <form className={style.contactForm} onSubmit={sendEmail}>
                <input type="text" name={"user_name"} className={style.userName} placeholder={'Name'} />
                <input type="email" name="user_email" className={style.userEmail} placeholder={'Email'}/>
                <textarea name="message" className={style.userMessage} placeholder={'Your message'} />
                <input type="submit" value="Send" className={style.buttonSend} />
            </form>
        </>
    )
}

export default MessageForm