import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { HeartCircle } from '@styled-icons/boxicons-regular/HeartCircle';
import { isMobile } from 'react-device-detect';

function HeartInactiveButton({ addToFavorites, color }) {
  return (
    <>
      <StyledHeartInActive
        onClick={addToFavorites}
        color={color}
        isMobile={isMobile}
      />
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
    width: ${({ isMobile }) => (isMobile ? '30px' : '35px')};
  `
);
