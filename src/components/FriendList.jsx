import { useState } from "react";

import Button from "./Button";
import FriendListItem from "./FriendListItem";
import Form from "./Form";

export default function FriendList({
  friendsList,
  onHandleAddFriend,
  onHandleExpenseFormOpen,
  handleSelectFriend,
}) {
  const [isAddFriendModalOpen, setIsAddFriendModalOpen] = useState(false);

  function handleToggleAction() {
    setIsAddFriendModalOpen((isOpen) => !isOpen);
  }
  return (
    <div className="sidebar">
      <ul>
        {friendsList.map((item) => (
          <FriendListItem
            item={item}
            handleSelectFriend={handleSelectFriend}
            onHandleExpenseFormOpen={onHandleExpenseFormOpen}
            key={item.id}
          />
        ))}
      </ul>
      {!isAddFriendModalOpen ? (
        <Button text="Add friend" handleAction={handleToggleAction} />
      ) : (
        <>
          <Form
            onAddFriend={onHandleAddFriend}
            handleToggleAction={handleToggleAction}
          />
          <Button text="Close" handleAction={handleToggleAction} />
        </>
      )}
    </div>
  );
}
