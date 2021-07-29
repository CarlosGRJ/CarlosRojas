import React from 'react';

import classes from './CardSkills.module.scss';

const CardSkills = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default CardSkills;
