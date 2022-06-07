export const Button = ({ text, clName, event }) => {
  return (
    <button onClick={event} className={clName}>
      {text}
    </button>
  );
};
