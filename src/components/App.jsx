import { useState } from "react";
import "./App.css";

import ExpenseForm from "./ExpenseForm";
import FriendList from "./FriendList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friendsList, setFriendsList] = useState(initialFriends);
  const [isExpenseFormOpen, setIsExpenseFormOpen] = useState(false);
  const [selectedFriend, setSelectFriend] = useState(null);

  function handleExpenseFormOpen() {
    setIsExpenseFormOpen((isOpen) => !isOpen);
  }
  function handleSelectFriend(friend) {
    if (friend !== selectedFriend) {
      setSelectFriend(friend);
      return true;
    }
    return false;
  }
  function handleAddFriend(newFriend) {
    setFriendsList((friendsList) => [...friendsList, newFriend]);
  }
  function updateFriendExpense(id, balance) {
    if (balance === 0) return;
    setFriendsList((friendsList) =>
      friendsList.map((friend) =>
        friend.id === id
          ? { ...friend, balance: friend.balance + balance }
          : friend
      )
    );
  }
  return (
    <div className="app">
      <FriendList
        friendsList={friendsList}
        onHandleAddFriend={handleAddFriend}
        onHandleExpenseFormOpen={handleExpenseFormOpen}
        handleSelectFriend={handleSelectFriend}
      />
      {isExpenseFormOpen && (
        <ExpenseForm
          selectedFriend={selectedFriend}
          updateFriendExpense={updateFriendExpense}
        />
      )}
    </div>
  );
}

export default App;
