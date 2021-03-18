import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Pages/Home';
import Watchlist from './Pages/Watchlist';
import Friends from './Pages/Friends';
import Search from './Pages/Search';
import Banner from '../src/components/Banner';
import Navigation from '../src/components/Navigation';

function App() {
  const [watchlist, setWatchList] = useState([]);
  const [isWatchList, setIsWatchList] = useState(false);

  function addToWatchList(movieToAdd) {
    const isOnWatchList = watchlist.some((movie) => movie.id === movieToAdd.id);

    if (!isOnWatchList) {
      setWatchList([...watchlist, movieToAdd]);
      setIsWatchList(!isWatchList);
    } else
      setWatchList(watchlist.filter((movie) => movie.id !== movieToAdd.id));
    setIsWatchList(!isWatchList);
  }
  console.log(watchlist);

  return (
    <>
      <Navigation />
      <Banner />
      <Buffer />
      <Switch>
        <Route exact path="/">
          <Home addToWatchList={addToWatchList} isWatchList={isWatchList} />
        </Route>
        <Route path="/watchlist">
          <GridWrapper>
            <WatchlistWrapper>
              {watchlist.map((movie) => (
                <Watchlist
                  isWatchList={movie.isWatchList}
                  key={movie.id}
                  isLarge
                  movie={movie}
                  addToWatchList={() => addToWatchList(movie)}
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
  grid-template-columns: repeat(4, 1fr);
`;

const GridWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
