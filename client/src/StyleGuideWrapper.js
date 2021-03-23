import { GlobalStyles } from './Globalstyles';

const StyleGuideWrapper = ({ children }) => {
  const portal = document.createElement('div');
  portal.setAttribute('id', 'portal');
  document.body.appendChild(portal);

  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};

export default StyleGuideWrapper;
