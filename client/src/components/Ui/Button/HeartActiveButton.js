import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { HeartCircle } from '@styled-icons/boxicons-solid/HeartCircle';
import { isMobile } from 'react-device-detect';
function HeartActiveButton({ addToFavorites, color }) {
  return (
    <>
      <StyledHeartActive
        onClick={addToFavorites}
        color={color}
        isMobile={isMobile}
      />
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
    width: ${({ isMobile }) => (isMobile ? '30px' : '35px')};
  `
);
