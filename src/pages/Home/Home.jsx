import React from 'react';
import Typewriter from 'typewriter-effect';

// import classes from '../../assets/scss/styles.module.scss';
import classes from './Home.module.scss';

export const Home = () => {
   return (
      <div
         className={`${classes.home} animate__animated animate__fadeIn`}
         id='home'>
         <h1>
            Hi, Iam <br />{' '}
            <span>
               <strong>Carlos Rojas</strong>
            </span>{' '}
         </h1>
         <div className={`${classes.sub}`}>
            <Typewriter
               options={{
                  strings: [
                     'Web Developer',
                     'React',
                     'NodeJS',
                     'Angular',
                     'MongoDB',
                     'Express',
                     'Learner',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
               }}
            />
         </div>
      </div>
   );
};
