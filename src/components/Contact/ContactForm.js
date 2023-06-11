import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import isEmail from 'validator/lib/isEmail';
import ContactFormUi from './ContactFormUi';

const ContactForm = () => {

    const [open, setOpen] = useState(false);

    const[subject, setSubject] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const form = useRef();
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };


    const handleContactForm = (e) => {
        e.preventDefault();
    
        if (name && email && message) {
          if (isEmail(email)) {
            emailjs.sendForm('testgmail', 'test_template', form.current, 'O-ggGSpn8terRIiHx')
              .then((result) => {
                console.log('success');
                setSuccess(true);
                setErrMsg('');
                setSubject('');
                setName('');
                setPhone('');
                setEmail('');
                setMessage('');
                setOpen(false);
              }, (error) => {
                console.log(error.text);
              });
          } else {
            setErrMsg('Invalid email');
            setOpen(true);
          }
        } else {
          setErrMsg('Enter all the fields');
          setOpen(true);
        }
    };

    return (
        <ContactFormUi
        open={open}
        success={success}
        errMsg={errMsg}
        handleClose={handleClose}
        handleContactForm={handleContactForm}
        subject={subject}
        setSubject={setSubject}
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        form={form}
        email={email}
        setEmail={setEmail}
        message={message}
        setMessage={setMessage}
      />
    )
}

export default ContactForm