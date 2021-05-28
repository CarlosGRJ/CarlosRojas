import React from 'react';

import classes from './Background.module.scss';

export const Background = () => {
   return (
      <div className={classes.lines}>
         <div className={classes.line}></div>
         <div className={classes.line}></div>
         <div className={classes.line}></div>
      </div>
   );
};
