import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImageContainer from '../components/ImageContainer';
import Spinner from '../components/Spinner';
import { Context } from '../Store';

export default function Search({
  isLarge,
  movie,
  addToWatchList,
  isOnWatchList,
  isLoading,
}) {
  const [checkWatchlist, setCheckWatchlist] = useContext(Context);

  function toggleButton(movie) {
    addToWatchList(movie);
    setCheckWatchlist(!checkWatchlist);
  }

  function toggleWatchList(movie) {
    setCheckWatchlist(isOnWatchList(movie));
  }

  return isLoading ? (
    <>
      <Spinner />
    </>
  ) : (
    <Flex>
      <ImageContainer
        isLarge={isLarge}
        movie={movie}
        addToWatchList={() => toggleButton(movie)}
        isOnWatchList={() => toggleWatchList(movie)}
      />
    </Flex>
  );
}

Search.propTypes = {
  isLarge: PropTypes.bool,
  movie: PropTypes.object,
  addToWatchList: PropTypes.func,
  isOnWatchList: PropTypes.func,
};

const Flex = styled.div`
  display: flex;
`;

// const MovieWrapper = styled.div`
//   display: flex;
//   overflow-y: hidden;
//   overflow-x: scroll;
//   padding: 20px;
//   scrollbar-width: none;
//   ::-webkit-scrollbar {
//     display: none;
//   }
// `;
