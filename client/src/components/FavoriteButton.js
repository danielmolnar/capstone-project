import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Button({ addToFavorites, isFavorite }) {
  return (
    <ButtonWrapper>
      <ButtonStyler onClick={addToFavorites}>Add to Favorites</ButtonStyler>
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
  text-align: center;
  color: white;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  padding: 2px 5px;
  font-size: 0.65rem;
  :hover {
    background-color: var(--primary-100);
  }
`;
