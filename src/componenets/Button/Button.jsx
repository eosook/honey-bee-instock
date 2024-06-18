import "./Button.scss";

export default function Button({ text, onClick, active }) {
  return (
    <button
      className={`button ${active ? "active" : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
