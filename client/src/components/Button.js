import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const ButtonStyler = styled.button`
  background-color: var(--primary-100-opacity);
  text-align: center;
  margin: 0 auto;
  color: white;
  border-radius: 3px;
  border: none;
  display: block;
  cursor: pointer;
  padding: 2px 5px;
  font-size: 0.65rem;
  :hover {
    background-color: var(--primary-100);
  }
`;
