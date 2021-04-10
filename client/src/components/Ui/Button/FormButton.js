import PropTypes from 'prop-types';
import styled from 'styled-components';

function FormButton({ text, onClick, styleguide }) {
  return (
    <StyledButton onClick={onClick} styleguide={styleguide}>
      {text}
    </StyledButton>
  );
}

export default FormButton;

FormButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

const StyledButton = styled.button`
  background: ${({ styleguide }) =>
    styleguide ? 'var(--primary-100)' : 'none'};
  border: solid 1px var(--secondary-100);
  border-radius: 3px;
  color: var(--secondary-100);
  font-weight: bold;
  margin-bottom: 5px;
  outline: none;
  padding: 5px 10px;
  text-decoration: none;
  transition: transform 250ms;
  width: 100%;

  cursor: pointer;
  :hover,
  :active {
    ${({ styleguide }) =>
      styleguide ? '--primary-100-opacity' : 'var(--button-hover-light)'};
  }
`;
