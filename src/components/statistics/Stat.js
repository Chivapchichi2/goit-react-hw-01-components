import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stat.module.css';

const Stat = ({ label, percentage, bg}) => {
  return (<li className={styles.Stat} style={bg}>
    <span className={styles.label}>{label} </span>
    <span className={styles.percentage}>{percentage}</span>
  </li>);
};

Stat.defaultProps = {
  st: { backgroundColor: "red" },
}

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  bg:PropTypes.shape({})
}
export default Stat;