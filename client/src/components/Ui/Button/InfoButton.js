import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { InfoCircle } from '@styled-icons/boxicons-regular/InfoCircle';
import { isMobile } from 'react-device-detect';

function InfoButton({ clickHandler, color }) {
  return (
    <>
      <StyledHeartInActive
        onClick={clickHandler}
        color={color}
        isMobile={isMobile}
      />
    </>
  );
}

export default InfoButton;

InfoButton.propTypes = {
  color: PropTypes.string,
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
