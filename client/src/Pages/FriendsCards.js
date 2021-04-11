import PropTypes from 'prop-types';
import styled from 'styled-components';
import { HeartCircle } from '@styled-icons/boxicons-regular/HeartCircle';
import { CameraMovie } from '@styled-icons/boxicons-solid/CameraMovie';
import { PeopleFill } from '@styled-icons/bootstrap/PeopleFill';

export default function FriendsCards({ friend }) {
  return (
    <ProfileWrapper>
      <SublineWrapper>
        <Subline data-testid="name">{friend.name}</Subline>
        <StatsWrapper>
          <IconWrapper>
            <Friends data-testid="friends" />
            <p>{friend.friendsNumber} Friends</p>
          </IconWrapper>
          <IconWrapper>
            <Favorites data-testid="favorites" />
            <p>{friend.favoritesNumber} Favorites</p>
          </IconWrapper>
          <IconWrapper>
            <WatchList data-testid="watchlist" />
            <p>{friend.watchlistNumber} on Watchlist</p>
          </IconWrapper>
        </StatsWrapper>
      </SublineWrapper>
      <MainWrapper>
        <p>FLIXTAGS</p>
        <TagWrapper>
          {friend?.tags.map((tag, index) => (
            <StyledSpan data-testid="tag" key={tag + index}>
              {tag}
            </StyledSpan>
          ))}
        </TagWrapper>
      </MainWrapper>
    </ProfileWrapper>
  );
}

FriendsCards.propTypes = {
  friend: PropTypes.object,
};

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
  margin: 7.5px;

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
