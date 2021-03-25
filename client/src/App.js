import { Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from './services/axios';
import styled from 'styled-components';
import requests from './services/requests';
import { useLocalStorage } from '../src/hooks/useLocalStorage';
import Home from './Pages/Home';
import Watchlist from './Pages/Watchlist';
import Friends from './Pages/Friends';
import Search from './Pages/Search';
import Banner from '../src/components/Banner';
import Favorites from './Pages/Favorites';
import Navigation from '../src/components/Navigation';
import Store from './Store';
import Searchbar from './components/Searchbar';

function App() {
  const [watchlist, setWatchList] = useLocalStorage('Watchlist', []);
  const [favorites, setFavorites] = useLocalStorage('Favorites', []);
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);

  let fetchUrl;
  query === ''
    ? (fetchUrl = requests.fetchTrending)
    : (fetchUrl = `${requests.fetchSearch}${query}&page=1&include_adult=false`);

  useEffect(() => {
    async function fetchSearch() {
      setIsLoading(true);
      const request = await axios.get(fetchUrl);
      setSearch(request.data.results);
      setIsLoading(false);
      return request;
    }

    fetchSearch();
  }, [query, fetchUrl]);

  const isOnWatchList = (movieToAdd) =>
    watchlist.some((movie) => movie.id === movieToAdd.id);

  const addToWatchList = (movieToAdd) => {
    !isOnWatchList(movieToAdd)
      ? setWatchList([...watchlist, movieToAdd])
      : setWatchList(watchlist.filter((movie) => movie.id !== movieToAdd.id));
  };

  const isFavorite = (movieToAdd) =>
    favorites.some((movie) => movie.id === movieToAdd.id);

  const addToFavorites = (movieToAdd) => {
    !isFavorite(movieToAdd)
      ? setFavorites([...favorites, movieToAdd])
      : setFavorites(favorites.filter((movie) => movie.id !== movieToAdd.id));
  };

  return (
    <>
      <Navigation />
      <Banner open={open} setOpen={setOpen} />
      <Buffer />
      <Switch>
        <Store>
          <Route exact path="/">
            <Home
              addToWatchList={addToWatchList}
              isOnWatchList={isOnWatchList}
              addToFavorites={addToFavorites}
              isFavorite={isFavorite}
            />
          </Route>
          <Route path="/watchlist">
            <WatchlistHeadline>WATCHLIST</WatchlistHeadline>
            <MovieWrapper>
              <GridWrapper>
                {watchlist.map((movie) => (
                  <Watchlist
                    key={movie.id}
                    isLarge
                    movie={movie}
                    addToWatchList={() => addToWatchList(movie)}
                    isOnWatchList={() => isOnWatchList(movie)}
                  />
                ))}
              </GridWrapper>
            </MovieWrapper>
          </Route>
          <Route path="/friends">
            <Friends />
          </Route>
          <Route path="/search">
            <Headline>SEARCH</Headline>
            <SearchbarWrapper>
              <Searchbar getQuery={(q) => setQuery(q)} />
            </SearchbarWrapper>
            <MovieWrapper>
              <GridWrapper>
                {search.map((movie) => (
                  <Search
                    isLoading={isLoading}
                    key={movie.id}
                    movie={movie}
                    isLarge
                    addToWatchList={() => addToWatchList(movie)}
                    isOnWatchList={() => isOnWatchList(movie)}
                  />
                ))}
              </GridWrapper>
            </MovieWrapper>
          </Route>
          <Route path="/favorites">
            <WatchlistHeadline>FAVORITES</WatchlistHeadline>
            <MovieWrapper>
              <GridWrapper>
                {favorites.map((movie) => (
                  <Favorites
                    key={movie.id}
                    isLarge
                    movie={movie}
                    addToFavorites={() => addToFavorites(movie)}
                    isFavorite={() => isFavorite(movie)}
                  />
                ))}
              </GridWrapper>
            </MovieWrapper>
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

const GridWrapper = styled.div`
  display: grid;
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

const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
`;

const Headline = styled.h2`
  margin-left: 20px;
  margin-bottom: 0px;
`;

const WatchlistHeadline = styled.h2`
  margin-left: 20px;
  margin-bottom: 3rem;
`;

const SearchbarWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1rem;
`;
