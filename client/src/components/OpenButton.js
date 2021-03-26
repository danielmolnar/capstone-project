import PropTypes from 'prop-types';
import styled from 'styled-components';
import { InfoCircle } from '@styled-icons/boxicons-regular/InfoCircle';
import { HeartCircle } from '@styled-icons/boxicons-solid/HeartCircle';
import { HeartCircle as HeartInActive } from '@styled-icons/boxicons-regular/HeartCircle';

export default function OpenButton({
  clickHandler,
  isFavorite,
  addToFavorites,
  movie,
}) {
  const favoriteCheck = isFavorite(movie);

  return (
    <ButtonWrapper>
      <StyledInfo onClick={clickHandler} />
      {favoriteCheck ? (
        <StyledHeartActive onClick={addToFavorites} />
      ) : (
        <StyledHeartInActive onClick={addToFavorites} />
      )}
    </ButtonWrapper>
  );
}

OpenButton.propTypes = {
  clickHandler: PropTypes.func,
};

const StyledHeartInActive = styled(HeartInActive)`
  color: white;
  cursor: pointer;
  /* font-weight: bold; */
  height: 22.5px;
  width: 22.5px;
`;

const StyledHeartActive = styled(HeartCircle)`
  color: white;
  cursor: pointer;
  /* font-weight: bold; */
  height: 22.5px;
  width: 22.5px;
`;

const StyledInfo = styled(InfoCircle)`
  color: white;
  cursor: pointer;
  height: 22.5px;
  width: 22.5px;
  margin-right: 5px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 10px; */
  background-color: var(--primary-100-opacity);
  margin-bottom: 0.5rem;
  position: relative;
  width: 100%;
`;

// return !favoriteCheck ? (
//   <HeartBackGround>
//     <HeartInactive onClick={addToFavorites} />
//   </HeartBackGround>
// ) : (
//   <HeartBackGround>
//     <HeartActive onClick={addToFavorites} />
//   </HeartBackGround>
// );
// }

const HeartBackGround = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: solid white 2.5px;
  height: 20px;
  width: 20px; */
  /* background-color: var(--primary-100); */
`;

const HeartInactive = styled(HeartCircle)`
  color: white;
  cursor: pointer;
  /* font-weight: bold; */

  transition: transform 250ms;
  height: 25px;
  width: 25px;

  :hover {
    color: var(--primary-100);
  }
`;

const ButtonStyler = styled.button`
  background-color: var(--primary-100-opacity);
  border-radius: 3px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 0.65rem;
  padding: 2px 5px;
  text-align: center;
  :hover {
    background-color: var(--primary-100);
  }
`;
