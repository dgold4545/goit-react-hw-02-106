import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import "./App.module.css";
import { useState, useEffect } from "react";

export default function App() {
  const [feedback, setFeetback] = useState(() => {
    const savedFeedbackClick = window.localStorage.getItem("feedback");

    if (savedFeedbackClick !== null) {
      return JSON.parse(savedFeedbackClick);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeetback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setFeetback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  let totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  let positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <div>
      <Description />
      <Options
        onUpdateFeedback={updateFeedback}
        countTotalFeedback={totalFeedback}
        onResetUpdateFeedback={resetFeedback}
      />
      {totalFeedback ? (
        <Feedback
          feedbackData={feedback}
          positiveFeedback={positiveFeedback}
          totalFeedbackData={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
