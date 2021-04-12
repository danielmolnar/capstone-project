import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import FlixbuddiesLogo from '../assets/FlixbuddiesLogo';

function Logo({ show, styleguide }) {
  return (
    <ImageWrapper show={show} styleguide={styleguide}>
      <StyledLogo />
    </ImageWrapper>
  );
}

export default Logo;

Logo.propTypes = {
  show: PropTypes.bool,
  styleguide: PropTypes.bool,
};

const StyledLogo = styled(FlixbuddiesLogo)(
  (props) => css`
    height: 3.5rem;
    object-fit: contain;
    padding: 10px;
    width: 100%;
  `
);

const ImageWrapper = styled.div(
  (props) => css`
    display: flex;
    justify-content: center;
    position: ${({ styleguide }) => (styleguide ? '' : 'fixed')};
    top: 0;
    width: 100%;
    box-shadow: var(--boxshadow);
    transition: all 0.5s;
    transition-timing-function: ease-out;
    z-index: 20;
    background: var(--secondary-100);

    ${props.show &&
      css`
        opacity: 0;
      `}
  `
);
