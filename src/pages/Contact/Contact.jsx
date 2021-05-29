import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

import { Button } from '../../components/UI/Button/Button';
import { IconContactMe } from './IconContactMe';
import { useForm } from '../../hooks/useForm';

import classes from './Contact.module.scss';
import Card from '../../components/UI/Card/Card';

export const Contact = () => {
   const [formIsValid, setFormIsValid] = useState(false);
   const [formValues, handleInputChange, reset] = useForm({
      name: '',
      email: '',
      message: '',
   });
   const { name, email, message } = formValues;

   useEffect(() => {
      const emailPattern = new RegExp(
         /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
      );
      // email.includes('@')
      setFormIsValid(emailPattern.test(email) && name && message);
   }, [email, name, message]);

   const handleSubmit = async (e) => {
      e.preventDefault();
      await emailjs
         .sendForm(
            'service_v8fa2d9',
            'template_clhu4t3',
            e.target,
            'user_rQJBZBDaDYFrK1pP8xluw',
         )
         .then(
            (res) => {
               console.log('RES', res);
               toast.success('Email sent! 😉');
            },
            (error) => {
               console.log(error);
               toast.error(error.text);
            },
         );
      reset();
   };

   return (
      <div className={`${classes.contact} animate__animated animate__fadeIn`}>
         {/* <h1>Contact</h1> */}
         <Card className={classes.card}>
            {/* <div className={classes['contact-box']}> */}
               <div className={classes.contact__left}>
                  <IconContactMe classes={classes} />
               </div>
               <div className={classes.contact__right}>
                  <h2>Contact Me</h2>

                  <form onSubmit={handleSubmit}>
                     <div className={classes.form__group}>
                        <input
                           type='text'
                           placeholder='Name'
                           className={classes.form__input}
                           id='name'
                           autoComplete='off'
                           name='name'
                           value={name}
                           onChange={handleInputChange}
                        />
                        <label hmtlfor='name' className={classes.form__label}>
                           Name
                        </label>
                     </div>

                     <div className={classes.form__group}>
                        <input
                           type='email'
                           className={classes.form__input}
                           placeholder='Email'
                           id='email'
                           required
                           autoComplete='off'
                           name='email'
                           value={email}
                           onChange={handleInputChange}
                        />
                        <label hmtlfor='email' className={classes.form__label}>
                           Email
                        </label>
                     </div>

                     <div className={classes.form__group}>
                        <textarea
                           placeholder='Message'
                           className={classes.form__input}
                           name='message'
                           value={message}
                           onChange={handleInputChange}></textarea>
                     </div>

                     <div>
                        <Button className={classes.form__button} disabled={!formIsValid} type='submit'>
                           Send
                        </Button>
                        {/* <button disabled={!formIsValid} type='submit'>
                     Send
                  </button> */}
                     </div>
                  </form>
               </div>
            {/* </div> */}
         </Card>
      </div>
   );
};
