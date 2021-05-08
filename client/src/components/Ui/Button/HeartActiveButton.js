import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';
import styled, { css } from 'styled-components';
import { HeartCircle } from '@styled-icons/boxicons-solid/HeartCircle';

function HeartActiveButton({ addToFavorites, color }) {
  return (
    <>
      <StyledHeartActive
        color={color}
        isMobile={isMobile}
        onClick={addToFavorites}
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
