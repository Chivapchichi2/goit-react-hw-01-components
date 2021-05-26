import React from 'react';
import PropTypes from 'prop-types';

const Description =({name, tag, location, avatar}) => {
  return(<div className="description">
        <img
          src={avatar}
          alt={name}
          className="avatar"
        />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
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