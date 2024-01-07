export const Button = ({ text, color, onClick }) => {
  return (
    <button onClick={onClick} style={{ background: color }} className="btn">
      {text}
    </button>
  );
};
