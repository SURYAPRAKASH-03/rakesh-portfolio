import React, { useRef } from 'react';
import './Contact.css'; // Import the CSS for styling
import emailjs from '@emailjs/browser';

const ContactForms = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dyvm1wp', 'template_6mbg4qf', form.current, {
        publicKey: 'aVYE5f2edieqNnYpv',
        
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      alert("FORM SUBMITTED SUCCESSFULLY!");

  };

  return (
    <div className="contact-form-container">
      
        <br></br> <br></br> <br></br> <br></br>
      
        <div className='contactcontainer'>
        <div className='contactimg'>
          <br></br><br></br> <br></br><br></br> <br></br><br></br>
        <img src='src/components/image/dancing-guy.png'width={'400px'}></img>
        </div>
        <div className='contactcontact'>
            <p className='contacttopic'>Let’s Collaborate</p>
        <p className='contactme'>Contact Me</p>
        <center>
        <p className='contactpara'>Ready to create something amazing together? <br></br>Let's connect and bring your ideas to life!</p>
        </center>
        <div className="form-group">
        <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="from_name" placeholder='Enter Your Name'/>
      <input type="email" name="from_email" placeholder='Enter Your Email'/>
      <input type="mobile number" name="from_phone" placeholder='Enter Your Mobile Number'/>
      <textarea name="message" placeholder='Message'className='msg'/>
      <div className='submit'>
      <input type="submit" value="Send" /> </div>
    </form>
        </div>
        </div>
    </div>
    </div>
  );
};

export default ContactForms;
