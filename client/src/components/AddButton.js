import React from 'react';
import styled from 'styled-components';

export default function AddButton({ addToWatchList, isWatchList }) {
  return (
    <WatchListButton onClick={addToWatchList}>
      {isWatchList ? 'Remove from ' : 'Add to '}Watchlist
    </WatchListButton>
  );
}

const WatchListButton = styled.button`
  background-color: var(--primary-100-opacity);
  border: none;
  outline: none;
  border-radius: 3px;
  padding: 5px 10px;
  transition: transform 250ms;
  color: white;
  font-weight: bold;
  text-decoration: none;

  cursor: pointer;
  :hover {
    background-color: var(--primary-100);
  }
`;
