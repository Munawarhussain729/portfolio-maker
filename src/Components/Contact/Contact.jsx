import { useRef, useState } from 'react';
import React from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const [done, setDone]=useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
          publicKey: 'YOUR_PUBLIC_KEY',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setDone(true);
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };


  return (
    <div className='Contact-form'>
        <div className='w-left'>
            <div className='Awesome'>
            <span>Get in touch</span>
            <span>Contact me</span>
            <div className='blur t-blur1 ' style={{background:"#abf1ff94"}}></div>

            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text"
                name='user-name'
                className='user'
                placeholder='Name' />
                <input type="email"
                name='user-email'
                className='user'
                placeholder='Email'
                 />
                 <textarea name="message" 
                 className='user'
                 placeholder='Message'
                 />
                 <input type="submit"
                 value="send"
                 className='button' />
             <div className='blur c-blur1 ' style={{background:"var(--purple)"}}></div>
                <span>{done && "Thanks for contacting me"} </span>
            </form>
        </div>
    </div>
  )
}

export default Contact;