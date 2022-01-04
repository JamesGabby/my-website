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
    const reSizeForm = () => {
        window.innerWidth < 630 ? setForms(true) : setForms(false);
    }
    window.addEventListener('scroll', reSizeForm);

    const testIt = () => {
        alert('hi');
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_8ha7d7h',
            'template_4r4d79p', 
            form.current, 
            'user_VFME93BlMSF9rgQKEJauz').then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    
    return (
        <section className="bg-light top-pad" id='contact'>
            <div className=''>
                <div className="split-form">
                    <div className='contact'>
                        <h2 className='contact-title'>Contact</h2>
                    </div>
                    
                    <Form ref={form} onSubmit={sendEmail} onSubmit={testIt} className='form'>
                        <div className="skill">
                            <Form.Group className={forms ? 'w-100' : 'w-50'} controlId="formBasicPassword">
                                <Form.Control className='text-primary' type="text" name="user_name" placeholder='Your Name'/>
                            </Form.Group>
                        </div>
                        <div className="skill">
                            <Form.Group className={forms ? 'w-100' : 'w-50'} controlId="formBasicPassword">
                                    <Form.Control className='text-primary' type="text" name="user_email" placeholder='Your Email' />
                            </Form.Group>                    
                        </div>
                        <div className="skill">
                            <Form.Group className={forms ? 'w-100' : 'w-50'} controlId="formBasicPassword">
                                    <Form.Control className='text-primary' as="textarea" rows={3} placeholder='Message' />
                            </Form.Group>                    
                        </div>
                        <div className="skill">
                            <Button type="submit">Send</Button>
                        </div>
                    </Form>
                </div>   
            </div>
        </section>
    );   
}

export default ContactSection;