import styled from '@emotion/styled';

export const Cell = styled.td`
  text-indent: 5%;
  padding: 8px;
`;

export const Numbers = styled(Cell)`
  text-align: center;
  width: 40%; ;
`;

export const Row = styled.tr`
  &:nth-of-type(even) {
    background-color: #312f42;
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
