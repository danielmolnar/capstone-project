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
    <FlexWrapper>
      <ImageContainer
        isLarge={isLarge}
        movie={movie}
        addToWatchList={addToWatchList}
        isOnWatchList={isOnWatchList}
      />
    </FlexWrapper>
  );
}

Watchlist.propTypes = {
  isLarge: PropTypes.bool,
  movie: PropTypes.object,
  addToWatchList: PropTypes.func,
  isOnWatchList: PropTypes.func,
};

const FlexWrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
