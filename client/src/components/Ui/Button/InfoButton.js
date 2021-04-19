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
    color: ${(props) => `("${props.color}")`};
    cursor: pointer;
    height: 30px;
    margin-right: 10px;
    width: 30px;
  `
);
