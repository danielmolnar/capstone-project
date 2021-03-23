import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImageContainer from '../components/ImageContainer';

export default function Watchlist({
  isLarge,
  movie,
  addToWatchList,
  isOnWatchList,
}) {
  return (
    <Flex>
      <ImageContainer
        isLarge={isLarge}
        movie={movie}
        addToWatchList={addToWatchList}
        isOnWatchList={isOnWatchList}
      />
    </Flex>
  );
}

Watchlist.propTypes = {
  isLarge: PropTypes.bool,
  movie: PropTypes.object,
  addToWatchList: PropTypes.func,
  isOnWatchList: PropTypes.func,
};

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
