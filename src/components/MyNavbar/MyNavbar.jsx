import React from 'react';
import { Link } from 'react-router-dom';
import { IconAbout } from '../../iconsNavBar/IconAbout';
import { IconContact } from '../../iconsNavBar/IconContact';
// import { IconExperience } from '../../iconsNavBar/IconExperience';
import { IconHome } from '../../iconsNavBar/IconHome';
import { IconProjects } from '../../iconsNavBar/IconProjects';
import { IconSkills } from '../../iconsNavBar/IconSkills';

import classes from './MyNavbar.module.scss';

export const MyNavbar = () => {
   return (
      <nav className={classes.nav}>
         <ul className={classes.nav__links}>
            <li className={classes.logo}>
               <a href='#home' className={classes.nav__link}>
                  <span className={`${classes['link-text']}`}>Menu</span>
                  <svg
                     aria-hidden='true'
                     focusable='false'
                     data-prefix='fad'
                     data-icon='angle-double-right'
                     role='img'
                     xmlns='http://www.w3.org/2000/svg'
                     viewBox='0 0 448 512'
                     className={
                        classes[
                           'svg-inline--fa fa-angle-double-right fa-w-14 fa-5x'
                        ]
                     }>
                     <g className={classes['fa-group']}>
                        <path
                           fill='currentColor'
                           d='M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z'
                           className={classes['fa-secondary']}></path>
                        <path
                           fill='currentColor'
                           d='M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z'
                           className={classes['fa-primary']}></path>
                     </g>
                  </svg>
               </a>
            </li>
            <li className={classes.nav__item}>
               <Link to='/home' className={classes.nav__link}>
                  <IconHome className={classes['nav__link-icon']} />
                  <span className={classes['link-text']}>Home</span>
               </Link>
            </li>
            <li className={classes.nav__item}>
               <Link to='/about' className={classes.nav__link}>
                  <IconAbout />
                  <span className={classes['link-text']}>About</span>
               </Link>
            </li>

            <li className={classes.nav__item}>
               <Link to='/skills' className={classes.nav__link}>
                  <IconSkills />
                  <span className={classes['link-text']}>Skills</span>
               </Link>
            </li>

            {/* <li className={classes.nav__item}>
               <Link to='/experience' className={classes.nav__link}>
                  <IconExperience />
                  <span className={classes['link-text']}>Experience</span>
               </Link>
            </li> */}

            <li className={classes.nav__item}>
               <Link to='/projects' className={classes.nav__link}>
                  <IconProjects />
                  <span className={classes['link-text']}>Projects</span>
               </Link>
            </li>

            <li className={classes.nav__item} id='themeButton'>
               <Link to='/contact' className={classes.nav__link}>
                  <IconContact />
                  <span className={classes['link-text']}>Contact me</span>
               </Link>
            </li>
         </ul>
      </nav>
      // <>
      //    <nav className='nav'>
      //       <ul className='nav__links'>
      //          <li className={classes.nav__item}>
      //             <a href='#home' className={classes.nav__link}>
      //                <IconHome className='nav__link-icon' />
      //                <span>Home</span>
      //             </a>
      //          </li>
      //       </ul>
      //    </nav>
      // </>
   );
};
