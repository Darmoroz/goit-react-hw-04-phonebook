import styled from 'styled-components';

export const StyledSection = styled.section`
  width: 320px;
  margin: 0 auto;
  padding: 0 ${p => p.theme.spacing(2)};
  text-align: center;
  h2 {
    margin-bottom: ${p => p.theme.spacing(3)};
  }
  :not(:last-child) {
    margin-bottom: ${p => p.theme.spacing(4)};
  }
`;
