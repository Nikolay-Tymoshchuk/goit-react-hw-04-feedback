import { Component } from 'react';
import { BsEmojiSmile, BsEmojiNeutral, BsEmojiFrown } from 'react-icons/bs';

class FeedbackWidget extends Component {
  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          {}
          {/* {this.state.map(item => (
            <button onClick={() => this.handleClick(item)}>{item}</button>
          ))} */}
          {/* <button onClick={() => this.setState({ good: this.state.good + 1 })}>
            <BsEmojiSmile />
          </button>
          <button
            onClick={() => this.setState({ neutral: this.state.neutral + 1 })}
          >
            <BsEmojiNeutral />
          </button>
          <button onClick={() => this.setState({ bad: this.state.bad + 1 })}>
            <BsEmojiFrown />
          </button> */}
        </div>
        <div>
          <h3>Statistics</h3>
        </div>
      </div>
    );
  }
}

export default FeedbackWidget;
