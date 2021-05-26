import React from 'react';
import PropTypes from 'prop-types';

const Friend = ({ status, avatar, name }) =>
(<li className="item">
  <span className="status">{status}</span>
  <img className="avatar" src={avatar} alt={name} width="48" />
  <p className="name">{name}</p>
</li>);

Friend.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired  
}

export default Friend;