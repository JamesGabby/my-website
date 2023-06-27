import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import './contact-section.styles.scss';
import { init } from '@emailjs/browser';
init("user_VFME93BlMSF9rgQKEJauz");

const ContactSection = () => {
    const form = useRef();
    const [forms, setForms] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [msgToClient, setMsgToClient] = useState('');
    const [wasSent, setWasSent] = useState(false)

    const reSizeForm = () => {
        window.innerWidth < 630 ? setForms(true) : setForms(false);
    }
    window.addEventListener('scroll', reSizeForm);

    const sendEmail = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
          return handleError()
        }

        emailjs.sendForm(
            'service_8ha7d7h',
            'template_4r4d79p', 
            form.current, 
            'user_VFME93BlMSF9rgQKEJauz').then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            }
        );

        setWasSent(true)
        setMsgToClient('Message sent!') 
        hideMessage()
        setName(''); setEmail(''); setMessage('')
    };

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleMessageChange = (event) => {
        setMessage(event.target.value)
    }

    const hideMessage = () => {
        setTimeout(() => (
            setMsgToClient('')
        ), 2500)
    }

    const handleError = () => {
      setWasSent(false)
      setMsgToClient('All fields must be filled in. Please try again.')
      hideMessage()
    }
    
    return (
        <section className="bg-alt top-pad" id='contact'>
                <div className="split-form">
                    <div className='contact'>
                        <div data-aos="zoom-in-right" data-aos-delay="150">
                            <h2 className='contact-title'>Contact</h2>
                        </div>
                    </div>
                    
                    <Form ref={form} onSubmit={sendEmail} className='form'>
                        <div className="skill">
                            <Form.Group className={forms ? 'w-100' : 'w-50'} controlId="formBasicUsername" id='form'>
                                <Form.Control className='text-primary' value={name} onChange={handleNameChange} type="text" name="user_name" placeholder='Your Name'/>
                            </Form.Group>
                        </div>
                        <div className="skill">
                            <Form.Group className={forms ? 'w-100' : 'w-50'} controlId="formBasicEmail" id='form'>
                                    <Form.Control className='text-primary' value={email} onChange={handleEmailChange} type="email" name="user_email" placeholder='Your Email' />
                            </Form.Group>                    
                        </div>
                        <div className="skill">
                            <Form.Group className={forms ? 'w-100' : 'w-50'} controlId="formBasicMessage" id='form'>
                                    <Form.Control className='text-primary' value={message} onChange={handleMessageChange} as="textarea" rows={3} name="message" placeholder='Message' />
                            </Form.Group>                    
                        </div>
                        <div className="skill">
                            <Button type="submit" id='button'>Send</Button>
                        </div>
                        <div className={wasSent ? 'was-sent' : 'not-sent'}>
                            {msgToClient}
                        </div>
                    </Form>
                </div>   
        </section>
    );   
}

export default ContactSection;