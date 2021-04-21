import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import LoadingSpinner from '../assets/LoadingSpinner.webp';

export default function Spinner({ isLarge }) {
  return (
    <Wrapper>
      <SpinnerStyler
        isNetflix={isLarge}
        src={LoadingSpinner}
        style={{ margin: 'auto', display: 'block' }}
        alt="Loading"
      />
    </Wrapper>
  );
}

Spinner.propTypes = {
  isLarge: PropTypes.bool,
};

const Wrapper = styled.div``;

const SpinnerStyler = styled.img(
  (props) => css`
    display: 'block';
    max-height: 100px;
    ${props.isNetflix &&
      css`
        max-height: 200px;
      `}
  `
);
