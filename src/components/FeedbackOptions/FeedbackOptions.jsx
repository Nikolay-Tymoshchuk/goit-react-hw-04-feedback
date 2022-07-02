import { Button, ButtonGroup } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonGroup>
      {options.map(option => {
        return (
          <Button
            key={option}
            data-status={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default FeedbackOptions;
