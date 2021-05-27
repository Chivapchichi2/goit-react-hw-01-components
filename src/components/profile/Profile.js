import React from 'react';
import PropTypes from 'prop-types';
import StatsList from './StatsList';
import Description from './Description';
import styles from './Profile.module.css'

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div  className={styles.Profile}>
      <Description
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <StatsList stats={stats} />
    </div>
  );
};

Profile.defaultProps = {
  avatar: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg",
};

Profile.propTypes = {
  stats: PropTypes.shape({}).isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string
}
export default Profile;