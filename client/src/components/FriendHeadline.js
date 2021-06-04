import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MoveHorizontal } from '@styled-icons/boxicons-regular/MoveHorizontal';
import { InformationCircle } from '@styled-icons/ionicons-outline/InformationCircle';

export default function FriendHeadline({ friend, isFirstFriend, isMobile }) {
  const [desktopInfo, setDesktopInfo] = useState(false);
  const showInfo = !isMobile && isFirstFriend;

  return (
    <HeadlineWrapper>
      <h2 data-testid="headline">{friend?.name}</h2>
      <InfoContainer desktopInfo={desktopInfo} showInfo={showInfo}>
        <div onClick={() => setDesktopInfo(!desktopInfo)}>
          <ScrollIcon />
          <InfoIcon />
        </div>
        <p>
          Use "Shift" + "Mousewheel" in order to scroll through the movies
          horizontally
        </p>
      </InfoContainer>
    </HeadlineWrapper>
  );
}

FriendHeadline.propTypes = {
  friend: PropTypes.object,
  isFirstFriend: PropTypes.bool,
  isMobile: PropTypes.bool,
};

const HeadlineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  h2 {
    margin-left: 20px;
  }
`;

const InfoContainer = styled.div`
  display: ${({ showInfo }) => (showInfo ? 'flex' : 'none')};
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;

  div {
    cursor: pointer;
    display: flex;
    padding: 5px;
    transition: transform 450ms;
    &:hover {
      transform: scale(1.1);
    }
  }
  p {
    display: ${({ desktopInfo }) => (desktopInfo ? '' : 'none')};
    font-size: 1.1rem;
    padding: 0rem 1rem;
    text-align: right;
  }
`;

const ScrollIcon = styled(MoveHorizontal)`
  color: var(--secondary-100);
  width: 40px;
`;

const InfoIcon = styled(InformationCircle)`
  color: var(--secondary-100);
  width: 40px;
`;
