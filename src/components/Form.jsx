import { useState } from "react";
import Button from "./Button";

export default function Form({ onAddFriend, handleToggleAction }) {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("https://i.pravatar.cc/48");
  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id: Date.now(),
      balance: 0,
      name,
      image: `${imgUrl}?=${id}`,
    };
    onAddFriend(newFriend);
    setName("");
    setImgUrl("https://i.pravatar.cc/48");
    handleToggleAction();
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="">👫 Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="">🌄 Image URL</label>
      <input type="text" value={imgUrl} />
      <Button text="Add" handleAction={handleSubmit} />
    </form>
  );
}
