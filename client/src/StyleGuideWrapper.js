import { GlobalStyles } from './Globalstyles';
import { BrowserRouter as Router } from 'react-router-dom';

const StyleGuideWrapper = ({ children }) => {
  const portal = document.createElement('div');
  portal.setAttribute('id', 'portal');
  document.body.appendChild(portal);

  return (
    <>
      <GlobalStyles />
      <Router>{children}</Router>
    </>
  );
};

export default StyleGuideWrapper;
