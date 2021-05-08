import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';
import styled, { css } from 'styled-components';
import { HeartCircle } from '@styled-icons/boxicons-regular/HeartCircle';

function HeartInactiveButton({ addToFavorites, color }) {
  return (
    <>
      <StyledHeartInActive
        color={color}
        isMobile={isMobile}
        onClick={addToFavorites}
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
