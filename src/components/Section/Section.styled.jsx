import styled from '@emotion/styled';

export const Title = styled.h2`
  font-size: 1.5em;
`;
export const Box = styled.div`
  width: 100%;
  background-color: var(--color-background-primary);
  &:first-of-type {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }
  &:last-of-type {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }
`;
