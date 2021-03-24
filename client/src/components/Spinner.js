import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import spinner from '../images/spinner.gif';

export default function Spinner({ isNetflix }) {
  return (
    <Wrapper>
      <SpinnerStyler
        isNetflix={isNetflix}
        src={spinner}
        style={{ margin: 'auto', display: 'block' }}
        alt="Loading"
      />
    </Wrapper>
  );
}

Spinner.propTypes = {
  isNetflix: PropTypes.bool,
};

const Wrapper = styled.div`
  /* margin-left: 20px; */
`;

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
