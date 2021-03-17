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
  const [isWatchList, setIsWatchList] = useState([]);

  function addToWatchList(movieToAdd) {
    const isOnWatchList = isWatchList.some(
      (movie) => movie.id === movieToAdd.id
    );

    if (!isOnWatchList) {
      setIsWatchList([...isWatchList, movieToAdd]);
    } else
      setIsWatchList(isWatchList.filter((movie) => movie.id !== movieToAdd.id));
  }

  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home addToWatchList={addToWatchList} />
        </Route>
        <Route path="/watchlist">
          <Watchlist />
        </Route>
        <Route path="/friends">
          <Friends />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </Switch>
    </>
  );
}

export default App;

const Buffer = styled.div`
  height: 1px;
  width: 100%;
  margin-bottom: 150px;
`;
