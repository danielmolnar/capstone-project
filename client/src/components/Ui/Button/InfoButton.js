import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';
import styled, { css } from 'styled-components';
import { InfoCircle } from '@styled-icons/boxicons-regular/InfoCircle';

function InfoButton({ clickHandler, color }) {
  return (
    <>
      <StyledHeartInActive
        color={color}
        isMobile={isMobile}
        onClick={clickHandler}
      />
    </>
  );
}

export default InfoButton;

InfoButton.propTypes = {
  color: PropTypes.string,
  isMobile: PropTypes.bool,
  clickHandler: PropTypes.func,
};

const StyledHeartInActive = styled(InfoCircle)(
  (props) => css`
    color: ${(props) => `("${props.color}")`};
    cursor: pointer;
    width: ${({ isMobile }) => (isMobile ? '30px' : '35px')};
    margin-right: 10px;
  `
);
