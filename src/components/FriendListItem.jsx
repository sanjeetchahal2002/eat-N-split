export default function FriendListItem({
  item,
  onHandleExpenseFormOpen,
  handleSelectFriend,
}) {
  function handleSelection(item) {
    if (!handleSelectFriend(item)) {
      onHandleExpenseFormOpen();
    }
  }
  return (
    <li>
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      {item.balance === 0 ? (
        <p>You and Anthony are even</p>
      ) : item.balance < 0 ? (
        <p className="red">{`You owe Clark${Math.abs(item.balance)}€`}</p>
      ) : (
        <p className="green">{`${item.name} owe you${Math.abs(
          item.balance
        )}€`}</p>
      )}
      <button className="button" onClick={() => handleSelection(item)}>
        Select
      </button>
    </li>
  );
}
