import PropTypes from 'prop-types';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import GithubLogo from '../assets/GithubLogo.svg';
import DevDanLogo from '../assets/DevDanLogo.svg';

export default function RotateLogo({ isMyLogo }) {
  return (
    <Coin>
      <Front isMyLogo={isMyLogo}></Front>
    </Coin>
  );
}

RotateLogo.propTypes = {
  isMyLogo: PropTypes.bool,
};

const diameter = '100px';
const turntime = '8s';
const rotate3d = keyframes`
 0% {
      transform: perspective(1000px) rotateY(0deg);
    }

    100% {
      transform: perspective(1000px) rotateY(360deg);
    }
`;

const Coin = styled.div`
  width: ${diameter};
  height: ${diameter};
  transform-style: preserve-3d;
  animation: ${rotate3d} ${turntime} linear infinite;
  transition: all 0.3s;
`;

const Front = styled.div`
  width: ${diameter};
  height: ${diameter};
  border-radius: 50%;
  overflow: hidden;
  background-image: ${({ isMyLogo }) =>
    isMyLogo ? `url(${DevDanLogo})` : `url(${GithubLogo})`};
  background-size: cover;
  transform: translateZ(20px/2);
`;
