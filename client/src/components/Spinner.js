import React from 'react';
import spinner from '../images/spinner.gif';
import styled, { css } from 'styled-components';

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

const Wrapper = styled.div`
  margin-left: 20px;
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
