import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Store';

export default function AddButton({ addToWatchList }) {
  const [lala, setLala] = useContext(Context);

  return (
    <WatchListButton onClick={addToWatchList}>
      {lala ? 'Remove from ' : 'Add to '}Watchlist
    </WatchListButton>
  );
}

const WatchListButton = styled.button`
  background-color: var(--primary-100-opacity);
  border: none;
  outline: none;
  border-radius: 3px;
  padding: 5px 10px;
  transition: transform 250ms; // ?
  color: white;
  font-weight: bold;
  text-decoration: none;

  cursor: pointer;
  :hover {
    background-color: var(--primary-100);
  }
`;
