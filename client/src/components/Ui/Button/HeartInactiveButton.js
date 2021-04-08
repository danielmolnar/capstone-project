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
    color: ${(props) => `("${props.color}")`};
    height: 30px;
    width: 30px;
  `
);
