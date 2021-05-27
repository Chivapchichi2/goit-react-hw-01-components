import React from 'react';
import Stat from './Stat';
import PropTypes from 'prop-types';
import styles from './Stat-list.module.css';

const StatsList = ({ stats }) => (
  <ul className={styles["Stat-list"]}>
    {stats.map(({id, label, percentage}) => (
      <Stat
        key= {id}
        label= {label}
        percentage={percentage}
        bg={{backgroundColor: randomColor()}}
      />
    ))}
  </ul> 
);

StatsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function randomColor() {
  return `rgb(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)})`
}

export default StatsList;