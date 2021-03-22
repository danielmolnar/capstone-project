import { Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Home from './Pages/Home';
import Watchlist from './Pages/Watchlist';
import Friends from './Pages/Friends';
import Search from './Pages/Search';
import Banner from '../src/components/Banner';
import Navigation from '../src/components/Navigation';
import Store from './Store';
import { useLocalStorage } from '../src/hooks/useLocalStorage';

function App() {
  const [watchlist, setWatchList] = useLocalStorage('Watchlist', []);
  const [search, setSearch] = useState([]);
  const baseUrl = 'https://api.themoviedb.org/3/';
  const APIKEY = process.env.REACT_APP_APIKEY;

  useEffect(() => {
    const fetchSearch = async () => {
      const result = await axios(
        `${baseUrl}search/movie?api_key=${APIKEY}&language=en-US&query=Godfather&page=1&include_adult=false`
      );
      setSearch(result.data.results);
      // console.log(result.data);
    };
    fetchSearch();
  }, []);

  const isOnWatchList = (movieToAdd) =>
    watchlist.some((movie) => movie.id === movieToAdd.id);

  function addToWatchList(movieToAdd) {
    if (!isOnWatchList(movieToAdd)) {
      setWatchList([...watchlist, movieToAdd]);
    } else
      setWatchList(watchlist.filter((movie) => movie.id !== movieToAdd.id));
  }

  console.log(watchlist);

  return (
    <>
      <Navigation />
      <Banner />
      <Buffer />
      <Switch>
        <Store>
          <Route exact path="/">
            <Home
              addToWatchList={addToWatchList}
              isOnWatchList={isOnWatchList}
            />
          </Route>
          <Route path="/watchlist">
            <Headline>WATCHLIST</Headline>
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
            <Headline>SEARCH</Headline>
            <GridWrapper>
              <WatchlistWrapper>
                {search.map((movie) => (
                  <Search
                    key={movie.id}
                    movie={movie}
                    isLarge
                    addToWatchList={() => addToWatchList(movie)}
                    isOnWatchList={() => isOnWatchList(movie)}
                  />
                ))}
              </WatchlistWrapper>
            </GridWrapper>
          </Route>
        </Store>
      </Switch>
      <Buffer />
    </>
  );
}

export default App;

const Buffer = styled.div`
  height: 1px;
  margin-bottom: 100px;
`;

const WatchlistWrapper = styled.div`
  display: grid;
  max-width: 80%;
  gap: 1rem;

  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 320px) {
    grid-template-columns: 1fr;
  }
`;

const GridWrapper = styled.div`
  display: flex;
  justify-content: center;

  /* max-width: 80%; */
`;

const Headline = styled.h2`
  margin-left: 20px;
`;
