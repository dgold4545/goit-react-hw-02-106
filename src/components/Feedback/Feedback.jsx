import style from "./Feedback.module.css";

export default function Feedback({
  feedbackData,
  positiveFeedback,
  totalFeedbackData,
}) {
  return (
    <div>
      <ul>
        <li>Good: {feedbackData.good}</li>
        <li>Neutral: {feedbackData.neutral}</li>
        <li>Bad: {feedbackData.bad}</li>
        <li>Total: {totalFeedbackData}</li>
        <li>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  );
}
