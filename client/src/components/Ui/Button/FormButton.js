import styled from 'styled-components';

function FormButton({ text, onClick }) {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
}

export default FormButton;

const StyledButton = styled.button`
  border: solid 1px white;
  background: none;
  border-radius: 3px;
  color: white;
  font-weight: bold;
  margin-bottom: 5px;
  outline: none;
  padding: 5px 10px;
  text-decoration: none;
  transition: transform 250ms;
  width: 5rem;

  cursor: pointer;
  :hover {
    background-color: var(--primary-100-opacity);
  }
`;
