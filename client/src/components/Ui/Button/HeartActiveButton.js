import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { HeartCircle } from '@styled-icons/boxicons-solid/HeartCircle';

function HeartActiveButton({ addToFavorites, color }) {
  return (
    <>
      <StyledHeartActive onClick={addToFavorites} color={color} />
    </>
  );
}

export default HeartActiveButton;

HeartActiveButton.propTypes = {
  color: PropTypes.string,
  addToFavorites: PropTypes.func,
};

const StyledHeartActive = styled(HeartCircle)(
  (props) => css`
    cursor: pointer;
    color: ${(props) => `("${props.color}")`};
    height: 22.5px;
    width: 22.5px;
  `
);