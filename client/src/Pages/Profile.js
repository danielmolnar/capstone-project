import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HeartCircle } from '@styled-icons/boxicons-regular/HeartCircle';
import { CameraMovie } from '@styled-icons/boxicons-solid/CameraMovie';
import { PeopleFill } from '@styled-icons/bootstrap/PeopleFill';
import FormButton from '../components/Ui/Button/FormButton';

export default function Profile({
  friends,
  watchlist,
  favorites,
  isLoggedIn,
  userProfile,
}) {
  return !isLoggedIn ? (
    <>
      <HeadlineWrapper data-testid="headline">
        <h2>Please Create A Profile</h2>
      </HeadlineWrapper>
      <StyledLink
        to={{
          pathname: '/createprofile',
        }}
      >
        <Wrapper>
          <ButtonContainer data-testid="button">
            <FormButton text="Create Profile" />
          </ButtonContainer>
        </Wrapper>
      </StyledLink>
    </>
  ) : (
    <>
      <HeadlineWrapper data-testid="headline">
        <h2>My Profile</h2>
      </HeadlineWrapper>
      <ProfileWrapper>
        <SublineWrapper>
          <Subline>{userProfile?.name}</Subline>
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
          <TagWrapper data-testid="tags">
            {userProfile?.tags?.map((tag, index) => (
              <StyledSpan key={index + tag}>{tag}</StyledSpan>
            ))}
          </TagWrapper>
        </MainWrapper>
      </ProfileWrapper>
    </>
  );
}

Profile.propTypes = {
  friends: PropTypes.array,
  favorites: PropTypes.array,
  watchlist: PropTypes.array,
  isLoggedIn: PropTypes.bool,
  userProfile: PropTypes.object,
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
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
  margin: 0 auto;
  max-width: 1020px;
  width: 100%;
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
  margin: 7.5px;
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
  margin-right: 7.5px;
  margin-bottom: 7.5px;
`;

const TagWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  border: none;
  border-radius: 5px;
  color: var(--fontcolor-primary);
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: transparent solid 1px;
  border-radius: 10px;
  box-shadow: var(--boxshadow);
  margin: 0 auto;
  margin-bottom: 3rem;
  max-width: 450px;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 1rem;
  scrollbar-width: none;
  width: 80%;
  ::-webkit-scrollbar {
    display: none;
  }
`;
