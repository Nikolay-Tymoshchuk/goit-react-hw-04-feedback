import { BsEmojiSmile, BsEmojiNeutral, BsEmojiFrown } from 'react-icons/bs';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <BsEmojiSmile />
            </td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>
              <BsEmojiNeutral />
            </td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>
              <BsEmojiFrown className="react-icons" />
            </td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>{total}</td>
          </tr>
          <tr>
            <td>Positive feedback</td>
            <td>{positivePercentage} %</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
