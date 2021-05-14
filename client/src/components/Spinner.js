import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import LoadingSpinner from '../assets/LoadingSpinner.webp';

export default function Spinner({ isLarge }) {
  return (
    <SpinnerStyler isNetflix={isLarge} src={LoadingSpinner} alt="Loading" />
  );
}

Spinner.propTypes = {
  isLarge: PropTypes.bool,
};

const SpinnerStyler = styled.img(
  (props) => css`
    margin: auto;
    display: 'block';
    max-height: 100px;
    ${props.isNetflix &&
      css`
        max-height: 200px;
      `}
  `
);
