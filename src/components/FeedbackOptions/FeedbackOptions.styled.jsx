import styled from '@emotion/styled';

export const ButtonGroup = styled.div`
  display: flex;
`;

export const Button = styled.button`
  background-color: inherit;
  color: inherit;
  border: 1px solid var(--color-text-primary);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: var(--color-text-primary);
    color: var(--color-background-primary);
  }

  &[data-status='good'] {
    border: 1px solid var(--color-positive);
    color: var(--color-positive);

    &:hover {
      background-color: var(--color-positive);
      color: var(--color-background-primary);
    }
  }

  &[data-status='bad'] {
    border: 1px solid var(--color-negative);
    color: var(--color-negative);

    &:hover {
      background-color: var(--color-negative);
      color: var(--color-background-primary);
    }
  }
`;
