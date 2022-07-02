// import { Component } from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <button
            key={option}
            onClick={() => onLeaveFeedback(option)}
            style={{
              backgroundColor: '#010101',
              color: '#fff',
              border: 'none',
              padding: '10px',
              margin: '10px',
              borderRadius: '5px',
              fontSize: '20px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;
