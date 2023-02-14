import styled from 'styled-components';

export const Form = styled.form`
  label {
    text-align: center;
    display: block;
    margin-bottom: ${p => p.theme.spacing(3)};
  }
  input {
    display: block;
    margin: ${p => p.theme.spacing(2)} auto 0;
  }
`;
