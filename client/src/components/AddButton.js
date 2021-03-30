import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function AddButton({ movie, isOnWatchList, addToWatchList }) {
  const checkOnWatchList = isOnWatchList(movie);

  return (
    <WatchListButton onClick={addToWatchList}>
      {checkOnWatchList ? 'Remove from ' : 'Add to '}Watchlist
    </WatchListButton>
  );
}

AddButton.propTypes = {
  movie: PropTypes.object,
  isOnWatchList: PropTypes.func,
  addToWatchList: PropTypes.func,
};

const WatchListButton = styled.button`
  background-color: var(--primary-100-opacity);
  border-radius: 3px;
  border: none;
  color: var(--secondary-100);
  font-weight: bold;
  outline: none;
  padding: 5px 10px;
  text-decoration: none;
  transition: transform 250ms;

  cursor: pointer;
  :hover {
    background-color: var(--primary-100);
  }
`;
