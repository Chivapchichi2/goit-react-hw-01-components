import React from 'react';
import StatsList from './StatsList';
import PropTypes from 'prop-types';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div >
      <div >
        <img
          src={avatar}
          alt={name}
        />
        <p >{name}</p>
        <p >@{tag}</p>
        <p >{location}</p>
      </div>
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