import PropTypes from 'prop-types';
import { BsEmojiSmile, BsEmojiNeutral, BsEmojiFrown } from 'react-icons/bs';
import {
  Table,
  Row,
  Numbers,
  Positive,
  Negative,
  TotalPositive,
  Cell,
} from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Table>
      <tbody>
        <Positive>
          <Cell>
            <BsEmojiSmile />
          </Cell>
          <Numbers>{good}</Numbers>
        </Positive>
        <Row>
          <Cell>
            <BsEmojiNeutral />
          </Cell>
          <Numbers>{neutral}</Numbers>
        </Row>
        <Negative>
          <Cell>
            <BsEmojiFrown className="react-icons" />
          </Cell>
          <Numbers>{bad}</Numbers>
        </Negative>
        <Row>
          <Cell>Total</Cell>
          <Numbers>{total}</Numbers>
        </Row>
        <Row>
          <Cell>Positive feedback</Cell>
          <TotalPositive value={positivePercentage}>
            {positivePercentage} %
          </TotalPositive>
        </Row>
      </tbody>
    </Table>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
