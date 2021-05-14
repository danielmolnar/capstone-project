import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isIOS, isMobile } from 'react-device-detect';
import RotateLogo from '../components/RotateLogo';
import DevDanLogo from '../assets/DevDanLogo.svg';
import GithubLogo from '../assets/GithubLogo.svg';

function About() {
  const target = isMobile ? '' : '_blank';
  const rel = isMobile ? '' : 'noopener noreferrer';

  const Technologies = [
    'React',
    'React-Router',
    'PropTypes',
    'Styled-Components',
    'Styleguidist',
    'axios',
    'Jest',
    'Cypress',
    'Node.js',
    'Local Storage',
    'MongoDB',
    'Express',
    'Mongoose',
    'AdobeXD',
  ];

  return (
    <>
      <HeadlineWrapper data-testid="headline">
        <h2>About</h2>
      </HeadlineWrapper>
      <PageWrapper isMobile={isMobile}>
        <SublineWrapper>
          <h3>FLIXBUDDIES</h3>
        </SublineWrapper>
        <StyledSection>
          <p data-testid="story">
            This app is a digital journeyman's piece and marks the successful
            completion of my 3 month coding bootcamp at neue fische, upon which
            I became a certified Junior Web Developer. The functionalities used
            in this app represent my coding skills of April 2021. Many thanks to
            neue fische for giving me the opportunity to attend their bootcamp
            and a huge shoutout to my incredibly gifted (and patient) coaches
            Miriam and Thomas.
            <br /> <br />- Daniel Molnar, April 2021
          </p>
        </StyledSection>
        <SublineWrapper>
          <h3>Technologies</h3>
        </SublineWrapper>
        <TagWrapper>
          {Technologies.map((tag, index) => (
            <StyledSpan data-testid="tag" key={tag + index} isMobile={isMobile}>
              {tag}
            </StyledSpan>
          ))}
        </TagWrapper>
        <SublineWrapper>
          <h3>Contact</h3>
        </SublineWrapper>
        <ContactWrapper>
          <LogoWrapper isIOS={isIOS}>
            <a
              href="https://www.danielmolnar.dev"
              title="Daniel Molnar Website"
              target={target}
              rel={rel}
            >
              <img src={DevDanLogo} alt="Daniels Logo - DevDan" />
              <span>
                <RotateLogo isMyLogo />
              </span>
            </a>
            <p>Website</p>
          </LogoWrapper>
          <LogoWrapper isIOS={isIOS}>
            <a
              href="https://github.com/danielmolnar"
              title="Daniel Molnar on Github"
              target={target}
              rel={rel}
            >
              <img src={GithubLogo} alt="Github Logo" />
              <span>
                <RotateLogo />
              </span>
            </a>
            <p>Github</p>
          </LogoWrapper>
        </ContactWrapper>
        <SublineWrapper>
          <h3>Credits</h3>
        </SublineWrapper>
        <StyledSection>
          <ul>
            <li>
              {' '}
              <a
                href="https://www.neuefische.de/"
                title="neuefische"
                target={target}
                rel={rel}
              >
                neuefische GmbH
              </a>
            </li>
            <li>
              {' '}
              <a
                href="https://www.themoviedb.org//"
                title="TMDB"
                target={target}
                rel={rel}
              >
                TMDB - The Movie Database API{' '}
              </a>
            </li>
            <li>
              Navbar Icon Cinema made by{' '}
              <a
                href="https://www.freepik.com"
                title="Freepik"
                target={target}
                rel={rel}
              >
                Freepik
              </a>{' '}
              from{' '}
              <a
                href="https://www.flaticon.com/"
                title="Flaticon"
                target={target}
                rel={rel}
              >
                www.flaticon.com
              </a>
            </li>
          </ul>
        </StyledSection>
      </PageWrapper>
    </>
  );
}

About.propTypes = {
  Technologies: PropTypes.array,
};

const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: var(--boxshadow);
  color: var(--fontcolor-primary);
  margin: 0 auto;
  margin-bottom: 3rem;
  max-width: 450px;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 1.5rem;
  width: 90%;

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: bold;
    margin: 0;
  }

  p {
    font-size: 1rem;
  }

  li {
    font-size: 0.9rem;
    padding: 5px;
  }

  a {
    color: var(--secondary-100);
  }

  ul {
    margin: 0;
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 2rem;
  width: 100%;
  p {
    padding: 0.5rem;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  span {
    cursor: pointer;
    display: ${({ isIOS }) => (isIOS ? 'none' : '')};
  }

  img {
    cursor: pointer;
    display: ${({ isIOS }) => (isIOS ? '' : 'none')};
    width: 100px;
  }

  p {
    margin: 0;
  }
`;

const SublineWrapper = styled.div`
  margin-bottom: 2rem;
  width: 100%;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  width: 100%;

  p {
    margin: 0;
  }
`;

const TagWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  border: none;
  border-radius: 5px;
  color: var(--fontcolor-primary);
  margin-bottom: 2rem;
`;

const StyledSpan = styled.span`
  background-color: var(--secondary-100);
  border-radius: 10px;
  box-shadow: var(--boxshadow-light);
  color: var(--fontcolor-secondary);
  font-size: 0.9rem;
  margin: ${({ isMobile }) =>
    isMobile ? ' 0 .9rem .9rem 0' : ' 0 1rem 1rem 0'};
  padding: 5px;
`;

const HeadlineWrapper = styled.div`
  margin: 0 auto;
  max-width: 1020px;
  width: 100%;
  h2 {
    margin-left: 20px;
  }
`;

export default About;
