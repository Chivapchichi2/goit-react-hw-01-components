import React from 'react';
import PropTypes from 'prop-types';
import styles from './Description.module.css'

const Description =({name, tag, location, avatar}) => {
  return (
    <div className={styles.Description}>
      <img
        src={avatar}
        alt={name}
        className={styles.avatar}
        width="300px"
      />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>)
}

Description.defaultProps = {
  avatar: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg",
};

Description.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string
}

export default Description;