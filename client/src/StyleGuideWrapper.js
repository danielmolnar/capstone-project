import { GlobalStyles } from './Globalstyles';

const StyleGuideWrapper = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};

export default StyleGuideWrapper;
