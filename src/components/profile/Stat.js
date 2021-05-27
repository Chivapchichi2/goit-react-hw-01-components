import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stat.module.css';

const Stat = ({ label, quantity}) => {
  return (<li className={styles.Stat}>
    <span className={styles.label}>{label.charAt(0).toUpperCase() + label.slice(1)} </span>
    <span className={styles.quantity}>{quantity}</span>
  </li>);
};

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired  
}
export default Stat;