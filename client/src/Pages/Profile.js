import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FormButton from '../components/Ui/Button/FormButton';
import { HeartCircle } from '@styled-icons/boxicons-regular/HeartCircle';
import { CameraMovie } from '@styled-icons/boxicons-solid/CameraMovie';
import { PeopleFill } from '@styled-icons/bootstrap/PeopleFill';

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
        <Wrapper>
          <ButtonContainer>
            <FormButton text="Create Profile" />
            {/* <CreateButton>Create Profile</CreateButton> */}
          </ButtonContainer>
        </Wrapper>
      </StyledLink>
    </>
  ) : (
    <>
      <HeadlineWrapper>
        <h2>My Profile</h2>
      </HeadlineWrapper>
      <PageWrapper>
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
    </>
  );
}

Profile.propTypes = {
  friends: PropTypes.array,
  favorites: PropTypes.array,
  watchlist: PropTypes.array,
  myProfile: PropTypes.object,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10rem;
  margin: 0 auto;
  max-width: 15rem;
  width: 50%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ButtonContainer = styled.div`
  width: 80%;
`;

const HeadlineWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1020px;
  h2 {
    margin-left: 20px;
  }
`;

const Friends = styled(PeopleFill)`
  color: var(--fontcolor-secondary);
  height: 1rem;
  margin-right: 0.3rem;
  width: 1rem;
`;

const Favorites = styled(HeartCircle)`
  color: var(--fontcolor-secondary);
  margin-right: 0.3rem;
  height: 1.1rem;
  width: 1.1rem;
`;

const WatchList = styled(CameraMovie)`
  color: var(--fontcolor-secondary);
  height: 1rem;
  margin-right: 0.3rem;
  width: 1rem;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--secondary-100);
  border-radius: 10px;
  box-shadow: var(--boxshadow-light);
  padding: 5px;

  p {
    color: var(--fontcolor-secondary);
  }
`;

const Subline = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
`;

const SublineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  width: 100%;
`;

const StatsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  p {
    margin: 0;
    font-size: 0.8rem;
  }
`;

const StyledSpan = styled.span`
  background-color: var(--secondary-100);
  border-radius: 10px;
  box-shadow: var(--boxshadow-light);
  color: var(--fontcolor-secondary);
  font-size: 0.8rem;
  padding: 5px;
`;

const TagWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  border: none;
  border-radius: 5px;
  color: var(--fontcolor-primary);
  gap: 1rem;
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

const PageWrapper = styled.div``;
