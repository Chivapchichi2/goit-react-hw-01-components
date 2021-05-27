import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friend.module.css';

const Friend = ({ status, avatar, name }) =>
(<li className={styles.Friend}>
  <span className={status ? styles.active : styles.status}></span>
  <img className={styles.avatar} src={avatar} alt={name} width="48" />
  <p className={styles.name}>{name}</p>
</li>);

Friend.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired  
}

export default Friend;