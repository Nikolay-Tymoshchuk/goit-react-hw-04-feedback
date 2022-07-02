import styled from '@emotion/styled';

export const Numbers = styled.td`
  width: 40%;
  text-align: center;
`;

export const Row = styled.tr`
  &:nth-of-type(even) {
    background-color: #f7f7f7;
  }
`;
export const Table = styled.table`
  border-spacing: 0;
  width: 100%;
`;

export const Positive = styled(Row)`
  color: var(--color-positive);
`;
export const Negative = styled(Row)`
  color: var(--color-negative);
`;

export const TotalPositive = styled(Numbers)`
  color: ${props =>
    props.value < 50
      ? 'var(--color-negative)'
      : props.value !== 50
      ? 'var(--color-positive)'
      : 'var(--color-text-primary)'};
`;
