import styled from 'styled-components';

export const Contacts = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing(2)};
  margin-top: ${p => p.theme.spacing(3)};
  li {
    font-style: italic;
    button {
      margin-left: ${p => p.theme.spacing(3)};
    }
  }
`;
