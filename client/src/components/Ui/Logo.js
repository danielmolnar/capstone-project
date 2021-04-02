import styled, { css } from 'styled-components';
import FlixbuddiesLogo from '../../images/FlixbuddiesLogo';

function Logo() {
  return <StyledLogo />;
}

export default Logo;

const StyledLogo = styled(FlixbuddiesLogo)(
  (props) => css`
    height: 3.5rem;
    object-fit: contain;
    padding: 10px;
    width: 100%;
  `
);
