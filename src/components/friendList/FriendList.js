import React from 'react';
import PropTypes from 'prop-types';
import Friend from './Friend';

const FriendList = ({friends}) => (
  <ul className="friend-list">
    {friends.map(({isOnline, avatar, name, id}) => (
      <Friend
        key={id}
        status={isOnline}
        avatar={avatar}
        name={name}
      />
    ))}
  </ul>
);


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default FriendList;