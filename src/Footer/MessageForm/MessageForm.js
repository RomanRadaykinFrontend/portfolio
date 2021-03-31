import React, { useState} from 'react';
import style from './MessageForm.module.scss';
import emailJs from "emailjs-com";

const MessageForm = () => {
    const initState = {

    }

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')


    function sendEmail(e) {
        console.log(e)
        e.preventDefault();

        emailJs.sendForm('service_ei1ez18', 'template_52m8u09', e.currentTarget, 'user_FIWkrWAV7JvPTrsEZmeDG')
            .then((result) => {
                setName('')
                setEmail('')
                setMessage('')
            }, (error) => {
                console.log(error.text);
            });
    }

    return(
        <>
            <form className={style.contactForm} onSubmit={sendEmail}>
                <input value={name} onChange={(e) => setName(e.currentTarget.value)}
                       type="text" name={"user_name"} className={style.userName} placeholder={'Name'} />
                <input value={email} onChange={(e) => setEmail(e.currentTarget.value)}
                       type="email" name="user_email" className={style.userEmail} placeholder={'Email'}/>
                <textarea value={message} onChange={(e) => setMessage(e.currentTarget.value)}
                          name="message" className={style.userMessage} placeholder={'Your message'} />
                <input type="submit" value="Send" className={style.buttonSend} />
            </form>
        </>
    )
}

export default MessageForm