import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Search from './Pages/Search';
import axios from './services/axios';
import Friends from './Pages/Friends';
import Ratings from './Pages/Ratings';
import Profile from './Pages/Profile';
import Watchlist from './Pages/Watchlist';
import Favorites from './Pages/Favorites';
import Sidebar from './components/Sidebar';
import requests from './services/requests';
import Banner from '../src/components/Banner';
import Searchbar from './components/Searchbar';
import FriendsCards from './Pages/FriendsCards';
import ScrollToTop from './services/ScrollToTop';
import Navigation from '../src/components/Navigation';
import { useLocalStorage } from '../src/hooks/useLocalStorage';

function App() {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [watchlist, setWatchList] = useLocalStorage('Watchlist', []);
  const [favorites, setFavorites] = useLocalStorage('Favorites', []);

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

  // useScreenLock(open);

  const isOnWatchList = (movieToAdd) =>
    watchlist.some((movie) => movie.id === movieToAdd.id);

  const isFavorite = (movieToAdd) =>
    favorites.some((movie) => movie.id === movieToAdd.id);

  const addToWatchList = (movieToAdd) => {
    !isOnWatchList(movieToAdd)
      ? setWatchList([...watchlist, movieToAdd])
      : setWatchList(watchlist.filter((movie) => movie.id !== movieToAdd.id));
  };

  const addToFavorites = (movieToAdd) => {
    !isFavorite(movieToAdd)
      ? setFavorites([...favorites, movieToAdd])
      : setFavorites(favorites.filter((movie) => movie.id !== movieToAdd.id));
  };

  return (
    <>
      <Navigation />
      <Banner />
      <Sidebar open={open} setOpen={setOpen} />
      <ScrollToTop>
        <Switch>
          <MainWrapper open={open}>
            <Buffer />
            <Route exact path="/">
              <Home
                isFavorite={isFavorite}
                isOnWatchList={isOnWatchList}
                addToWatchList={addToWatchList}
                addToFavorites={addToFavorites}
              />
            </Route>
            <Route path="/watchlist">
              <WatchlistHeadline>WATCHLIST</WatchlistHeadline>
              <MovieWrapper>
                <GridWrapper>
                  {watchlist.map((movie) => (
                    <Watchlist
                      isLarge
                      key={movie.id}
                      movie={movie}
                      isFavorite={() => isFavorite(movie)}
                      isOnWatchList={() => isOnWatchList(movie)}
                      addToWatchList={() => addToWatchList(movie)}
                      addToFavorites={() => addToFavorites(movie)}
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
                <Searchbar getQuery={(query) => setQuery(query)} />
              </SearchbarWrapper>
              <MovieWrapper>
                <GridWrapper>
                  {search.map((movie) => (
                    <Search
                      isLarge
                      movie={movie}
                      key={movie.id}
                      isLoading={isLoading}
                      isFavorite={() => isFavorite(movie)}
                      isOnWatchList={() => isOnWatchList(movie)}
                      addToWatchList={() => addToWatchList(movie)}
                      addToFavorites={() => addToFavorites(movie)}
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
                      isLarge
                      movie={movie}
                      key={movie.id}
                      isFavorite={() => isFavorite(movie)}
                      isOnWatchList={() => isOnWatchList(movie)}
                      addToWatchList={() => addToWatchList(movie)}
                      addToFavorites={() => addToFavorites(movie)}
                    />
                  ))}
                </GridWrapper>
              </MovieWrapper>
            </Route>
            <Route path="/ratings">
              <Ratings />
            </Route>
            <Route path="/friendsinfo">
              <FriendsCards />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Buffer />
          </MainWrapper>
        </Switch>
      </ScrollToTop>
    </>
  );
}

export default App;

const Buffer = styled.div`
  height: 1px;
  margin-bottom: 100px;
`;

const MainWrapper = styled.main`
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(30vH)' : 'translateX()')};
  @media (max-width: 800px) {
    transform: ${({ open }) => (open ? 'translateX(25vh)' : 'translateX()')};
  }

  @media (max-width: 500px) {
    transform: ${({ open }) => (open ? 'translateX(25vh)' : 'translateX()')};
  }
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
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
`;

const Headline = styled.h2`
  margin-bottom: 0px;
  margin-left: 20px;
`;

const WatchlistHeadline = styled.h2`
  margin-left: 20px;
`;

const SearchbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;
