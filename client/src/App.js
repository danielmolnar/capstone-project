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
import { v4 as uuidv4 } from 'uuid';
import CreateProfile from './Pages/CreateProfile';

function App() {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState([]);
  const [show, handleShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [watchlist, setWatchList] = useLocalStorage('Watchlist', []);
  const [favorites, setFavorites] = useLocalStorage('Favorites', []);
  const [user, setUser] = useLocalStorage('UserProfile', []);
  const [myProfile, setMyProfile] = useState([]);
  const [finalUser, setFinalUser] = useState({});

  const createProfile = (profile) =>
    setMyProfile([...myProfile, { ...profile, user_id: uuidv4() }]);

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

  //   const userData = {
  //     data: { user },
  //     favs: [...favorites],

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
      <Navigation open={open} setOpen={setOpen} />
      <Banner show={show} handleShow={handleShow} />
      <Sidebar
        open={open}
        setOpen={setOpen}
        show={show}
        handleShow={handleShow}
      />
      <ScrollToTop>
        <Switch>
          <MainWrapper open={open}>
            <button onClick={() => console.log(finalUser)}></button>
            <Route exact path="/">
              <Home
                isFavorite={isFavorite}
                isOnWatchList={isOnWatchList}
                addToWatchList={addToWatchList}
                addToFavorites={addToFavorites}
              />
            </Route>
            <Route path="/watchlist">
              <MovieWrapper>
                <HeadlineWrapper>WATCHLIST</HeadlineWrapper>
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
              <MovieWrapper>
                <HeadlineWrapper>SEARCH</HeadlineWrapper>
                <SearchbarWrapper>
                  <Searchbar getQuery={(query) => setQuery(query)} />
                </SearchbarWrapper>
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
              <MovieWrapper>
                <HeadlineWrapper>FAVORITES</HeadlineWrapper>
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
            <Route path="/createprofile">
              <CreateProfile
                createProfile={createProfile}
                favorites={favorites}
              />
            </Route>
          </MainWrapper>
        </Switch>
      </ScrollToTop>
    </>
  );
}

export default App;

const MainWrapper = styled.main`
  margin-top: 100px;
  margin-bottom: 100px;
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
  max-width: 1080px;
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
  margin: 0 auto;
  max-width: 1080px;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const HeadlineWrapper = styled.h2`
  display: flex;
  margin-left: 30px;
  width: 100%;
  max-width: 1080px;
`;

const SearchbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
`;
