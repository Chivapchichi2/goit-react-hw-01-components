import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.module.css'

const Container = ({ children }) => (
  <div className={styles.Container}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Container;