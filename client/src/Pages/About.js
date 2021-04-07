import styled from 'styled-components';

function About() {
  const Technologies = [
    'React',
    'React-Router',
    'Styled-Components',
    'PropTypes',
    'Styleguidist',
    'axios',
    'Jest',
    'Cypress',
    'LocalStorage',
    'node',
    'MongoDB',
    'Express',
    'Mongoose',
    'AdobeXD',
  ];

  return (
    <>
      <HeadlineWrapper>
        <h2>About</h2>
      </HeadlineWrapper>

      <PageWrapper>
        <SublineWrapper>
          <Subline>FLIXBUDDIES</Subline>
          <Story>
            This app is a digital journeyman's piece and marks the successful
            completion of my 3 month coding bootcamp at neue fische, upon which
            I became a certified Junior Web Developer. The functionalities used
            in this app represent my coding skills of April 2021. Many thanks to
            neuefische for giving me the opportunity to attend their bootcamp
            and a huge shoutout to my incredibly gifted (and patient) coaches
            Miriam and Thomas.
            <br /> <br />- Daniel Molnar, April 2021
          </Story>
        </SublineWrapper>
        <SublineWrapper>
          <Subline>Technologies</Subline>
        </SublineWrapper>
        <TagWrapper>
          {Technologies.map((tag) => (
            <StyledSpan key={tag.index}>{tag}</StyledSpan>
          ))}
        </TagWrapper>
        <SublineWrapper>
          <p>Credits</p>
          <ul>
            <Credits>
              {' '}
              <a href="https://www.themoviedb.org//" title="TMDB">
                TMDB - The Movie Database API{' '}
              </a>
            </Credits>
            <Credits>
              Navbar Icon Cinema made by{' '}
              <a href="https://www.freepik.com" title="Freepik">
                Freepik
              </a>{' '}
              from{' '}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </Credits>
          </ul>
        </SublineWrapper>
      </PageWrapper>
    </>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  max-width: 450px;
  border: transparent solid 1px;
  border-radius: 10px;
  margin-bottom: 3rem;
  padding: 1rem;
  box-shadow: var(--boxshadow);
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Subline = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  margin: 0;
`;

const Story = styled.p`
  font-size: 0.9rem;
`;

const Credits = styled.li`
  font-size: 0.7rem;
  padding: 5px;

  a {
    color: white;
  }
`;

const SublineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  width: 100%;

  ul {
    color: white;
    margin: 0;
  }
`;

const TagWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  border: none;
  border-radius: 5px;
  color: var(--fontcolor-primary);
  gap: 1rem;
  margin-bottom: 2rem;
`;

const StyledSpan = styled.span`
  background-color: var(--secondary-100);
  border-radius: 10px;
  box-shadow: var(--boxshadow-light);
  color: var(--fontcolor-secondary);
  font-size: 0.8rem;
  padding: 5px;
`;

const HeadlineWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1020px;
  h2 {
    margin-left: 20px;
  }
`;

export default About;
