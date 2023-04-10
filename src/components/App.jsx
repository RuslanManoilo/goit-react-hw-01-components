import { Profile } from "./Profile/Profile";
import user from '../components/Profile/user.json';

import { Statistics } from "./statistics/Statistics";
import data from '../components/statistics/data.json';

import { FriendList } from "./friendList/FriendList";
import friends from '../components/friendList/friends.json';

import { TransactionHistory } from "./transactionHistory/TransactionHistory";
import transactions from '../components/transactionHistory/transactions.json';


export const App = () => {
  return (
    <div>
      <Profile userProfile= { user } />
      <Statistics stats = { data } />
      <FriendList friends = { friends }/>
      <TransactionHistory items = { transactions } />
    </div>
  );
};
