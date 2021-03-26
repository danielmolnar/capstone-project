import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Button({ clickHandler }) {
  return (
    <ButtonWrapper>
      <ButtonStyler onClick={clickHandler}>MORE</ButtonStyler>
    </ButtonWrapper>
  );
}

Button.propTypes = {
  clickHandler: PropTypes.func,
};

const ButtonWrapper = styled.div`
  margin-bottom: 0.5rem;
  position: relative;
`;

const ButtonStyler = styled.button`
  background-color: var(--primary-100-opacity);
  border-radius: 3px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 0.65rem;
  padding: 2px 5px;
  text-align: center;
  :hover {
    background-color: var(--primary-100);
  }
`;
