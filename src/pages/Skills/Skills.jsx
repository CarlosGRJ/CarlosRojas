import React from 'react';
import CardSkills from '../../components/UI/CardSkills/CardSkills';
import { IconAngular } from '../../iconsSkills/IconAngular';
import { IconBoot } from '../../iconsSkills/IconBoot';
import { IconCss } from '../../iconsSkills/IconCss';
import { IconGraphQL } from '../../iconsSkills/IconGraphQL';
import { IconHtml } from '../../iconsSkills/IconHtml';
import { IconJavascript } from '../../iconsSkills/IconJavascript';
import { IconMongo } from '../../iconsSkills/IconMongo';
import { IconMySql } from '../../iconsSkills/IconMySql';
import { IconNode } from '../../iconsSkills/IconNode';
import { IconReact } from '../../iconsSkills/IconReact';
import { IconReactNative } from '../../iconsSkills/IconReactNative';
import { IconSass } from '../../iconsSkills/IconSass';
import { IconAWS } from '../../iconsSkills/IconAWS';
import IconTypes from '../../iconsSkills/IconTypes';

import classes from './Skills.module.scss';

export const Skills = () => {
   return (
      <div className={classes['skills-section']}>
         {/* <h2>Skills</h2> */}
         <div className={classes.skills}>
            <CardSkills className='animate__animated animate__fadeInDown'>
               <div className={`${classes.skills__left}`}>
                  <h2>SKILLS</h2>
                  <ul className={classes.list}>
                     <li className={classes.list__item}>
                        <IconJavascript /> JavaScript
                     </li>
                     <li className={classes.list__item}>
                        <IconHtml /> HTML
                     </li>
                     <li className={classes.list__item}>
                        <IconCss /> CSS
                     </li>
                     <li className={classes.list__item}>
                        <IconSass /> SASS
                     </li>
                     <li className={classes.list__item}>
                        <IconBoot /> Bootstrap
                     </li>
                     <li className={classes.list__item}>
                        <IconReact /> REACT
                     </li>
                     <li className={classes.list__item}>
                        <IconAngular /> Angular
                     </li>
                     <li className={classes.list__item}>
                        <IconTypes /> TypeScript
                     </li>

                     {/* Prueba */}
                     <li className={classes.list__item}>
                        <IconNode /> NodeJS
                     </li>
                     <li className={classes.list__item}>
                        <IconMongo /> MongoDB
                     </li>
                     <li className={classes.list__item}>
                        <IconMySql /> MySQL
                     </li>
                  </ul>
               </div>
            </CardSkills>
            <CardSkills
               className={`animate__animated animate__fadeInUp ${classes.skills__right}`}>
               <div>
                  <h2>LEARNING</h2>
                  <ul className={classes.list}>
                     <li className={classes.list__item}>
                        <IconReactNative /> React Native
                     </li>
                     <li className={classes.list__item}>
                        <IconGraphQL /> GraphQL
                     </li>
                     <li className={classes.list__item}>
                        <IconAWS /> AWS
                     </li>
                  </ul>
               </div>
            </CardSkills>
         </div>
      </div>
   );
};
