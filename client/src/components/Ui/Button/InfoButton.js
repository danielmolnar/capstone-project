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
  addToFavorites: PropTypes.func,
};

const StyledHeartInActive = styled(InfoCircle)(
  (props) => css`
    cursor: pointer;
    height: 22.5px;
    width: 22.5px;
    margin-right: 5px;
    color: ${(props) => `("${props.color}")`};
  `
);
