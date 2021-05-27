import React from 'react';
import Stat from './Stat';
import PropTypes from 'prop-types';
import styles from './StatsList.module.css';

const StatsList = ({ stats }) => (
  <ul className={styles.StatsList}>
    {Object.entries(stats).map(stat => (
      <Stat
        key= {stat[0]}
        label= {stat[0]}
        quantity={stat[1]}
      />
    ))}
  </ul>
);

StatsList.propTypes = {
  stats: PropTypes.shape({}).isRequired,
}
export default StatsList;