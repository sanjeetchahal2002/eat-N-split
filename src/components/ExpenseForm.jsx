import { useState } from "react";
import Button from "./Button";

export default function ExpenseForm({ selectedFriend, updateFriendExpense }) {
  const [bill, setBill] = useState(0);
  const [myExpense, setMyExpense] = useState(0);
  const [paidBy, setPaidBy] = useState("you");
  const otherExpense = bill - myExpense;
  function handleExpense(e) {
    if (+e.target.value < 0 || +e.target.value > bill) return;
    setMyExpense(e.target.value);
  }
  function handleForm(e) {
    e.preventDefault();
    setMyExpense(0);
    setBill(0);
    setPaidBy("you");
  }
  function getAccount() {
    let expense;
    if (paidBy === "you") {
      expense = otherExpense;
    } else {
      expense = -myExpense;
    }
    updateFriendExpense(selectedFriend.id, expense);
  }
  return (
    <form className="form-split-bill" onSubmit={handleForm}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label htmlFor="">💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => {
          setBill(+e.target.value);
        }}
      />
      <label htmlFor="">🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={myExpense}
        onChange={(e) => {
          handleExpense(e);
        }}
      />
      <label htmlFor="">👫 {selectedFriend.name}'s expense</label>
      <input type="text" value={otherExpense} disabled />
      <label htmlFor="">🤑 Who is paying the bill</label>
      <select value={paidBy} onChange={(e) => setPaidBy(e.target.value)}>
        <option value="you">You</option>
        <option value="other">{selectedFriend.name}</option>
      </select>
      <Button text="Split bill" handleAction={getAccount} />
    </form>
  );
}
