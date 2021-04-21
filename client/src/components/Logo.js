import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import FlixbuddiesLogo from '../assets/FlixbuddiesLogo';

function Logo({ show, styleguide, setOpen }) {
  return (
    <ImageWrapper show={show} styleguide={styleguide}>
      <Link
        to={{
          pathname: '/',
        }}
      >
        <StyledLogo onClick={() => setOpen(false)} />
      </Link>
    </ImageWrapper>
  );
}

export default Logo;

Logo.propTypes = {
  show: PropTypes.bool,
  styleguide: PropTypes.bool,
};

const StyledLogo = styled(FlixbuddiesLogo)`
  height: 3.5rem;
  object-fit: contain;
  padding: 10px;
  width: 100%;
`;

const ImageWrapper = styled.div(
  (props) => css`
    display: flex;
    justify-content: center;
    background: var(--secondary-100);
    box-shadow: var(--boxshadow);
    position: ${({ styleguide }) => (styleguide ? '' : 'fixed')};
    top: 0;
    transition: all 0.5s;
    transition-timing-function: ease-out;
    width: 100%;
    z-index: 20;
    ${props.show &&
      css`
        opacity: 0;
      `}
  `
);
