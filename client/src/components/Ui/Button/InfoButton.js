import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { InfoCircle } from '@styled-icons/boxicons-regular/InfoCircle';

function InfoButton({ clickHandler, color }) {
  return (
    <>
      <StyledHeartInActive onClick={clickHandler} color={color} />
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
    cursor: pointer;
    margin-right: 10px;
    color: ${(props) => `("${props.color}")`};
    height: 30px;
    width: 30px;
  `
);
