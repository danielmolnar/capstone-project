import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Pages/Home';
import Watchlist from './Pages/Watchlist';
import Friends from './Pages/Friends';
import Search from './Pages/Search';
import Banner from '../src/components/Banner';
import Navigation from '../src/components/Navigation';
import { useLocalStorage } from '../src/hooks/useLocalStorage';

function App() {
  const [watchlist, setWatchList] = useLocalStorage('Watchlist', []);

  const isOnWatchList = (movieToAdd) =>
    watchlist.some((movie) => movie.id === movieToAdd.id);

  function addToWatchList(movieToAdd) {
    if (!isOnWatchList(movieToAdd)) {
      setWatchList([...watchlist, movieToAdd]);
    } else
      setWatchList(watchlist.filter((movie) => movie.id !== movieToAdd.id));
  }

  return (
    <>
      <Navigation />
      <Banner />
      <Buffer />
      <Switch>
        <Route exact path="/">
          <Home addToWatchList={addToWatchList} isOnWatchlist={isOnWatchList} />
        </Route>
        <Route path="/watchlist">
          <GridWrapper>
            <WatchlistWrapper>
              {watchlist.map((movie) => (
                <Watchlist
                  key={movie.id}
                  isLarge
                  movie={movie}
                  addToWatchList={() => addToWatchList(movie)}
                  isOnWatchList={() => isOnWatchList(movie)}
                />
              ))}
            </WatchlistWrapper>
          </GridWrapper>
        </Route>
        <Route path="/friends">
          <Friends />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </Switch>
      <Buffer />
    </>
  );
}

export default App;

const Buffer = styled.div`
  height: 1px;
  width: 100%;
  margin-bottom: 150px;
`;

const WatchlistWrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
`;

const GridWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
