import { BsEmojiSmile, BsEmojiNeutral, BsEmojiFrown } from 'react-icons/bs';
import {
  Table,
  Row,
  Numbers,
  Positive,
  Negative,
  TotalPositive,
} from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Table>
      <tbody>
        <Positive>
          <td>
            <BsEmojiSmile />
          </td>
          <Numbers>{good}</Numbers>
        </Positive>
        <Row>
          <td>
            <BsEmojiNeutral />
          </td>
          <Numbers>{neutral}</Numbers>
        </Row>
        <Negative>
          <td>
            <BsEmojiFrown className="react-icons" />
          </td>
          <Numbers>{bad}</Numbers>
        </Negative>
        <Row>
          <td>Total</td>
          <Numbers>{total}</Numbers>
        </Row>
        <Row>
          <td>Positive feedback</td>
          <TotalPositive value={positivePercentage}>
            {positivePercentage} %
          </TotalPositive>
        </Row>
      </tbody>
    </Table>
  );
};

export default Statistics;
