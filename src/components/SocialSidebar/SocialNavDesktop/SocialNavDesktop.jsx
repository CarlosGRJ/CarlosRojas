import React from 'react';

import classes from './SocialNavDesktop.module.scss';

export const SocialNavDesktop = () => {
   return (
      <div className={classes.socialSide}>
         <div className={`${classes.socialSide__Linke} ${classes.social}`}>
            <a
               className={classes['socialSide-link']}
               href='https://www.linkedin.com/in/carlos-gerardo-rojas-jaime-116b1a15b/'
               target='_blank'
               rel='noopener noreferrer'>
               <p>
                  <i className='fab fa-linkedin-in'></i> <span>Linkedin</span>
               </p>
            </a>
         </div>
         <div className={`${classes.socialSide__Google} ${classes.social}`}>
            <a
               className={classes['socialSide-link']}
               href='mailto:carlosgrj2013@gmail.com'
               target='_blank'
               rel='noopener noreferrer'>
               <p>
                  <i className='fab fa-google'></i> <span>Google</span>
               </p>
            </a>
         </div>
         <div className={`${classes.socialSide__Github} ${classes.social}`}>
            <a
               className={classes['socialSide-link']}
               href='https://github.com/CarlosGRJ'
               target='_blank'
               rel='noopener noreferrer'>
               <p>
                  <i className='fab fa-github'></i> <span>GitHub</span>
               </p>
            </a>
         </div>
         <div className={`${classes.socialSide__Resume} ${classes.social}`}>
            <a
               className={classes['socialSide-link']}
               href='https://drive.google.com/file/d/1soRz_0-8_WRL4uUgzO-CUYYDIWyJl177/view?usp=sharing'
               target='_blank'
               rel='noopener noreferrer'>
               <p>
                  <i className='far fa-file-pdf'></i> <span>Resume</span>
               </p>
            </a>
         </div>
      </div>
   );
};
