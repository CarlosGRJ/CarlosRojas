import React from 'react';
import Photo from '../../assets/img/about/profile.webp';

import classes from './About.module.scss';

export const About = () => {
   return (
      <div className={`${classes.about}  animate__animated animate__fadeIn`}>
         <h2>About Me</h2>
         <br />
         <div className={classes.about__content}>
            <div
               className={`${classes['about__content-img']}  animate__animated animate__fadeInLeft`}>
               <img src={Photo} alt='Me' />
            </div>
            <div
               className={`${classes['about__content-p']}  animate__animated animate__fadeInRight`}>
               <p>
                  Hi there! I am <strong>&nbsp;Carlos Rojas</strong>
                  <br />A passionate programmer, born and brought up in Mexico.
                  I am a Full Stack Web Developer with React.js, Redux,
                  Express.js, Node.js, and MongoDB as my tech stack.
                  <br />
                  In 2019, I successfully completed my Engineering in
                  'Mechanical Engineering'.
                  <br />
                  Working with the clients, my goal is always driven towards
                  providing amazing experience with the best level of quality
                  and service to them.
                  <br />I love learning about new technologies, what problems
                  are they solving and How can I use them to build better and
                  scalable products.
                  <br /> <br />
               </p>
            </div>
         </div>
      </div>
   );
};
