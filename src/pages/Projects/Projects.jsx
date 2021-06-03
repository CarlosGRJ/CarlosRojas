import React from 'react';

// import { IconProjects } from '../../iconsNavBar/IconProjects';

import { ReactComponent as WorkIcon } from './work.svg';
import timelineElements from './timelineElements';
import {
   VerticalTimeline,
   VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// import classes from '../../assets/scss/styles.module.scss';
import classes from './Projects.module.scss';

export const Projects = () => {
   return (
      <div className={classes.projects}>
         {/* <h1>Projects</h1> */}

         <VerticalTimeline>
            {timelineElements.map((el) => (
               <VerticalTimelineElement
                  key={el.id}
                  // date={el.date}
                  dateClassName={`date ${classes.date}`}
                  iconStyle={{ background: '#ec7819' }}
                  icon={<WorkIcon />}>
                  <h3
                     className={`vertical-timeline-element-title ${classes.title}`}>
                     {el.title}
                  </h3>
                  <img className={classes.image} src={el.image} alt={el.alt} />
                  <h5 className={classes.subtitle}>Tecnologies</h5>
                  {/* <p id={classes.description}>{el.description}</p> */}
                  <ul className={classes.list} id={classes.description}>
                     {el.tecnologies.map((tec) => (
                        <li key={tec} className={classes['list__item']}>
                           {tec}
                        </li>
                     ))}
                  </ul>
                  <div className={classes.buttons}>
                     <a
                        href={el.url}
                        target='_blank'
                        className={`${classes.buttonEx} ${classes.viewButton}`}
                        rel='noopener noreferrer'>
                        {/* {el.buttonText} */}
                        <i className="fas fa-eye"></i>
                     </a>
                     {el.front.length > 0 ? (
                        <a
                           href={el.front}
                           target='_blank'
                           className={`${classes.buttonEx} ${classes.repButton} ${classes.front}`}
                           rel='noopener noreferrer'>
                           {/* {el.buttonText} */}
                           Front <i className="fab fa-github"></i>
                        </a>
                     ) : (
                        ''
                     )}

                     {el.back.length > 0 ? (
                        <a
                           href={el.repo}
                           target='_blank'
                           className={`${classes.buttonEx} ${classes.repButton} ${classes.back}`}
                           rel='noopener noreferrer'>
                           {/* {el.buttonText} */}
                           Back <i className="fab fa-github"></i>
                        </a>
                     ) : (
                        ''
                     )}
                  </div>
               </VerticalTimelineElement>
            ))}
         </VerticalTimeline>
      </div>
   );
};
