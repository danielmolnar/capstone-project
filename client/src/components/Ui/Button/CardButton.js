import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function CardButton({ buttonText, addToWatchList }) {
  return <StyledButton onClick={addToWatchList}>{buttonText}</StyledButton>;
}

CardButton.propTypes = {
  buttonText: PropTypes.string,
  addToWatchList: PropTypes.func,
};

const StyledButton = styled.button`
  background-color: var(--primary-100-opacity);
  border: none;
  border-radius: 3px;
  color: var(--secondary-100);
  font-weight: bold;
  margin-bottom: 5px;
  outline: none;
  padding: 10px;
  text-decoration: none;
  transition: transform 250ms;

  cursor: pointer;
  :hover {
    background-color: var(--primary-100);
  }
`;
