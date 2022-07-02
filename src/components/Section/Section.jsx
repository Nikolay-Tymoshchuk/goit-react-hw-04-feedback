import { Box, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Box>
      <Title>{title}</Title>
      {children}
    </Box>
  );
};

export default Section;
