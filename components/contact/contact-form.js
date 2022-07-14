/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState, useEffect } from 'react';
import Notification from '../ui/notification';
import cssClasses from './contact-form.module.css';

const ContactForm = () => {
    const [notification, setNotification] = useState();

    const enteredEmail = useRef();
    const enteredName = useRef();
    const enteredMessage = useRef();

    useEffect(() => {
        if (notification && notification.status !== 'pending') {
            const timer = setTimeout(() => {
                setNotification(null);
            }, 3500);
            return () => clearTimeout(timer);
        }
    }, [notification]);

    const sendMessageHandler = async(e) => {
        e.preventDefault();
        if (notification && notification.status === 'pending') return;
        setNotification({
            status: 'pending',
            title: 'Sending Message!',
            message: 'Your Message is on it is way!',
        });
        const response = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail.current.value,
                name: enteredName.current.value,
                message: enteredMessage.current.value,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        if (response.ok) {
            console.log(data.message);
            setNotification({
                status: 'success',
                title: 'Success!',
                message: data.message,
            });
        } else {
            console.error(data.message);
            setNotification({
                status: 'error',
                title: 'Error!',
                message: data.message,
            });
        }
    };

    return (
        <section className={cssClasses.contact}>
            <h1>How I Can Help You?</h1>
            <form className={cssClasses.form} onSubmit={sendMessageHandler}>
                <div className={cssClasses.controls}>
                    <div className={cssClasses.control}>
                        <label htmlFor='email'>Your Email</label>
                        <input type='email' id='email' required ref={enteredEmail}/>
                    </div>
                    <div className={cssClasses.control}>
                        <label htmlFor='name'>Your Name</label>
                        <input type='text' id='name' required ref={enteredName}/>
                    </div>
                </div>
                <div className={cssClasses.control}>
                    <label htmlFor='message'>Your Message</label>
                    <textarea id='message' rows={5} required ref={enteredMessage}></textarea>
                </div>
                <div className={cssClasses.actions}>
                    <button type='submit' 
                    disabled={notification && notification.status === 'pending' ? true : false}>Send Message</button>
                </div>
            </form>
            {
                notification && <Notification 
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                    hideNotification={() => {
                        setNotification(null);
                    }}
                />
            }
        </section>
    );
};

export default ContactForm;