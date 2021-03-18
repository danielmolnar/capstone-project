import React from 'react';
import styled from 'styled-components';
import ImageContainer from '../components/ImageContainer';

export default function Watchlist({ isLarge, movie, addToWatchList }) {
  return (
    <Wrapper>
      <ImageContainer
        isLarge={isLarge}
        movie={movie}
        addToWatchList={addToWatchList}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
