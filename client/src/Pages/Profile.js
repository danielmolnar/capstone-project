import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PeopleFill } from '@styled-icons/bootstrap/PeopleFill';
import { HeartCircle } from '@styled-icons/boxicons-regular/HeartCircle';
import { CameraMovie } from '@styled-icons/boxicons-solid/CameraMovie';

export default function Profile({ myProfile, friends, favorites, watchlist }) {
  return !myProfile.name ? (
    <>
      <HeadlineWrapper>
        <h2>Please Create A Profile</h2>
      </HeadlineWrapper>

      <StyledLink
        to={{
          pathname: '/createprofile',
        }}
      >
        <ButtonContainer>
          <CreateButton>Create Profile</CreateButton>
        </ButtonContainer>
      </StyledLink>
    </>
  ) : (
    <PageWrapper>
      <HeadlineWrapper>
        <h2>My Profile</h2>
      </HeadlineWrapper>
      <ProfileWrapper>
        <SublineWrapper>
          <Subline>{myProfile.name}</Subline>
          <StatsWrapper>
            <IconWrapper>
              <Friends />
              <p>{friends.length} Friends</p>
            </IconWrapper>
            <IconWrapper>
              <Favorites />
              <p>{favorites.length} Favorites</p>
            </IconWrapper>
            <IconWrapper>
              <WatchList />
              <p>{watchlist.length} on Watchlist</p>
            </IconWrapper>
          </StatsWrapper>
        </SublineWrapper>
        <MainWrapper>
          <p>FLIXTAGS</p>
          <TagWrapper>
            {myProfile.tags.map((tag) => (
              <StyledSpan key={tag.index}>{tag}</StyledSpan>
            ))}
          </TagWrapper>
        </MainWrapper>
      </ProfileWrapper>
    </PageWrapper>
  );
}

const CreateButton = styled.button`
  border: solid 1px white;
  background: none;
  border-radius: 3px;
  color: white;
  font-weight: bold;
  margin-bottom: 5px;
  outline: none;
  padding: 5px 10px;
  text-decoration: none;
  transition: transform 250ms;
  width: 10rem;

  cursor: pointer;
  :hover {
    background-color: var(--primary-100-opacity);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ButtonContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-top: 5rem;
`;

const HeadlineWrapper = styled.div`
  margin-left: 20px;
`;

const Friends = styled(PeopleFill)`
  color: black;
  height: 1rem;
  margin-right: 0.3rem;
  width: 1rem;
`;

const Favorites = styled(HeartCircle)`
  color: black;
  height: 1.1rem;
  margin-right: 0.3rem;
  width: 1.1rem;
`;

const WatchList = styled(CameraMovie)`
  color: black;
  height: 1rem;
  margin-right: 0.3rem;
  width: 1rem;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  background-color: var(--secondary-100);
  box-shadow: var(--boxshadow-light);
  border-radius: 10px;
  p {
    color: black;
  }
`;

const Subline = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
`;

const SublineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;
`;

const StatsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  p {
    margin: 0;
    font-size: 0.8rem;
    /* padding: 5px;
    background-color: white;
    color: black;
    opacity: 0.7;
    border-radius: 10px; */
  }
`;

const StyledSpan = styled.span`
  font-size: 0.8rem;
  padding: 5px;
  color: black;
  border-radius: 10px;
  background-color: var(--secondary-100);
  box-shadow: var(--boxshadow-light);
`;

const TagWrapper = styled.section`
  display: flex;
  border: white solid 1px;
  flex-wrap: wrap;
  gap: 1rem;
  border-radius: 5px;
  border: none;
  color: white;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
`;

const PageWrapper = styled.div`
  margin: 0 auto;
  max-width: 1020px;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 1020px) {
    box-shadow: var(--boxshadow);
    border-radius: 5px;
    height: 100%;
    padding: 1rem 0rem 2rem 0rem;
  }
`;
