import style from "./Options.module.css";

export default function Options({
  onUpdateFeedback,
  onResetUpdateFeedback,
  countTotalFeedback,
}) {
  return (
    <>
      <button
        onClick={() => {
          onUpdateFeedback("good");
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          onUpdateFeedback("neutral");
        }}
      >
        Neurtal
      </button>
      <button
        onClick={() => {
          onUpdateFeedback("bad");
        }}
      >
        Bad
      </button>

      {countTotalFeedback != 0 && (
        <button onClick={onResetUpdateFeedback}>Reset</button>
      )}
    </>
  );
}
