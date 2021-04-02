import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { HeartCircle } from '@styled-icons/boxicons-regular/HeartCircle';

function HeartInactiveButton({ addToFavorites, color }) {
  return (
    <>
      <StyledHeartInActive onClick={addToFavorites} color={color} />
    </>
  );
}

export default HeartInactiveButton;

HeartInactiveButton.propTypes = {
  color: PropTypes.string,
  addToFavorites: PropTypes.func,
};

const StyledHeartInActive = styled(HeartCircle)(
  (props) => css`
    cursor: pointer;
    height: 22.5px;
    width: 22.5px;
    color: ${(props) => `("${props.color}")`};
  `
);
