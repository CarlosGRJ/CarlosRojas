import React from 'react';

import { Fab } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';

// import classes from '../../../assets/scss/styles.module.scss';
import classes from './SocialNavPhone.module.scss';

export const SocialNavPhone = () => {
   return (
      <Fab
         event={'click'}
         mainButtonStyles={{
            backgroundColor: '#ec7819c2',
         }}
         style={{
            bottom: '6rem',
            right: '0',
            WebkitTapHighlightColor: 'rgba(0,0,0,0)'
         }}
         icon={<i className='fas fa-share-alt'></i>}>
         <div className={`${classes.linke}`}>
            <a
               className={`${classes['socialSide-link']}`}
               href='https://www.linkedin.com/in/carlos-gerardo-rojas-jaime-116b1a15b/'
               target='_blank'
               rel='noopener noreferrer'>
               <p>
                  <i className='fab fa-linkedin-in'></i>
               </p>
            </a>
         </div>

         <div className={`${classes.google}`}>
            <a
               className={`${classes['socialSide-link']}`}
               href='mailto:carlosgrj2013@gmail.com'
               target='_blank'
               rel='noopener noreferrer'>
               <p>
                  <i className='fab fa-google'></i>
               </p>
            </a>
         </div>

         <div className={`${classes.github}`}>
            <a
               className={`${classes['socialSide-link']}`}
               href='https://github.com/CarlosGRJ'
               target='_blank'
               rel='noopener noreferrer'>
               <p>
                  <i className='fab fa-github'></i>
               </p>
            </a>
         </div>

         <div className={`${classes.resume}`}>
            <a
               className={`${classes['socialSide-link']}`}
               href='https://drive.google.com/file/d/1SoyZlVQUGskNg2-fHkcpo8EpDWTwccM6/view?usp=sharing'
               target='_blank'
               rel='noopener noreferrer'>
               <p>
                  <i className='far fa-file-pdf'></i>
               </p>
            </a>
         </div>
      </Fab>
   );
};
