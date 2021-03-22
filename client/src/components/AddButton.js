import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Context } from '../hooks/Store';

export default function AddButton({ addToWatchList }) {
  const [checkWatchList, setCheckWatchList] = useContext(Context);

  return (
    <WatchListButton onClick={addToWatchList}>
      {checkWatchList ? 'Remove from ' : 'Add to '}Watchlist
    </WatchListButton>
  );
}

AddButton.propTypes = {
  addToWatchList: PropTypes.func,
};

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
