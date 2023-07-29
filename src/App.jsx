import user from "./assets/user.json";
import data from "./assets/data.json";
import friends from "./assets/friends.json";
import transactions from "./assets/transactions.json";
import Profile from "./components/profile/Profile";
import Statistics from "./components/statistics/Statistics";
import FriendList from "./components/friends/FriendList";
import TransactionHistory from "./components/transactions/TransactionHistory";
import {AppTag} from "./App.styled"

function App() {
  return (
    <AppTag>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </AppTag>
  );
}

export default App;
