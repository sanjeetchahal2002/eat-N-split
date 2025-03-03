export default function Button({ text, handleAction }) {
  return (
    <button className="button" onClick={handleAction}>
      {text}
    </button>
  );
}
