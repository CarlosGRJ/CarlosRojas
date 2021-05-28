import React from 'react';

import { IconProjects } from '../../iconsNavBar/IconProjects';

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
         <h1>Projects</h1>

         <VerticalTimeline>
            {timelineElements.map((el) => (
               <VerticalTimelineElement
                  key={el.id}
                  date={el.date}
                  dateClassName={`date ${classes.date}`}
                  className=''
                  iconStyle={{ background: '#ec7819' }}
                  icon={<WorkIcon />}>
                  <h3 className='vertical-timeline-element-title'>
                     {el.title}
                  </h3>
                  <h5 className='vertical-timeline-element-subtitle'>
                     {el.location}
                  </h5>
                  <p id={classes.description}>{el.description}</p>
                  <a
                     href='/'
                     className={`${classes.buttonEx} ${classes.workButton}`}>
                     {el.buttonText}
                  </a>
               </VerticalTimelineElement>
            ))}
         </VerticalTimeline>
      </div>
   );
};
