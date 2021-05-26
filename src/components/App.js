import React from 'react';
import Profile from './profile/Profile';
import user from '../data/user.json';

 const App = () => {
  return (
      <header className="App-header">
        <h1>React, Home Work 1 </h1>
      <Profile
        stats={user.stats}
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar= {user.avatar}
      />
      </header>
  );
}

export default App;
