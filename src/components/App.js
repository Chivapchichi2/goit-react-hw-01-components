import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import Container from './Container/Container';
import user from '../data/user.json';
import statData from '../data/statistical-data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

 const App = () => {
   return (
     <>
       <Container>
         <header className="App-header">
          <h1 className="App-title">react, home work 1 </h1>
         </header>
       </Container>
       <Container>
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
        </Container>
    </>
  );
}

export default App;
