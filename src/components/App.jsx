import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import Section from './Section';
import { Container } from './App.styled';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = { good, neutral, bad };
  const feedbackVotesLabels = Object.keys(feedback);
  const totalFeedbackVotesCount = Object.values(feedback).reduce(
    (acc, curr) => acc + curr,
    0
  );

  function countPositiveFeedbackPercentage() {
    if (totalFeedbackVotesCount === 0) {
      return 0;
    }
    return Math.round((good / totalFeedbackVotesCount) * 100);
  }

  function handleLeaveFeedback(label) {
    switch (label) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  }

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackVotesLabels}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>

      <Section title={'Statistics'}>
        {totalFeedbackVotesCount === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbackVotesCount}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        )}
      </Section>
    </Container>
  );
}
