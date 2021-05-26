import React from 'react';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friendList/FriendList';
import TransactionHistory from './transactionHistory/TransactionHistory';
import user from '../data/user.json';
import statData from '../data/statistical-data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

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
      <TransactionHistory
        items={transactions}
      />
    </header>
  );
}

export default App;
