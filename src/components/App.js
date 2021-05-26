import React from 'react';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friendList/FriendList';
import user from '../data/user.json';
import statData from '../data/statistical-data.json';
import friends from '../data/friends.json';

 const App = () => {
  return (
      <header className="App-header">
        <h1 className="App-title">React, Home Work 1 </h1>
      <Profile
        stats={user.stats}
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar= {user.avatar}
      />
      <Statistics
        stats={statData}
        // title="Upload stats"
      />
      <FriendList
        friends={friends}
      />
    </header>
  );
}

export default App;
