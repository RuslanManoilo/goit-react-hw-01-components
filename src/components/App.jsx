import { UserProfile } from './Profile/UserProfile';
import user from '../components/Profile/user.json';

import { Statistics } from "./Statistics/Statistics";
import data from '../components/Statistics/data.json';

import { FriendList } from "./FriendList/FriendList";
import friends from '../components/FriendList/friends.json';

import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from '../components/TransactionHistory/transactions.json';


export const App = () => {
  return (
    <div>
      <UserProfile userProfile= { user } />
      <Statistics title = {"UPLOAD STATS"} stats = { data } />
      <FriendList friends = { friends }/>
      <TransactionHistory items = { transactions } />
    </div>
  );
};
