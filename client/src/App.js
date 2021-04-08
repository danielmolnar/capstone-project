import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Ui/Navigation/Navigation';
import { useLocalStorage } from '../src/hooks/useLocalStorage';
import Searchbar from './components/Ui/Navigation/Searchbar';
import Sidebar from './components/Ui/Navigation/Sidebar';
import CreateProfile from './Pages/CreateProfile';
import ScrollToTop from './hooks/useScrollToTop';
import FriendsCards from './Pages/FriendsCards';
import Banner from '../src/components/Banner';
import instance from './services/axiosMovies';
import serverApi from './services/axiosServer';
import requests from './services/requests';
import Watchlist from './Pages/Watchlist';
import Favorites from './Pages/Favorites';
import Friends from './Pages/Friends';
import Profile from './Pages/Profile';
import Search from './Pages/Search';
import About from './Pages/About';
import Home from './Pages/Home';

function App() {
  const [userProfile, setUserProfile] = useLocalStorage('UserProfile', []);
  const [watchlist, setWatchList] = useLocalStorage('Watchlist', []);
  const [favorites, setFavorites] = useLocalStorage('Favorites', []);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMovie, setIsMovie] = useState(false);
  const [friends, setFriends] = useState([]);
  const [show, handleShow] = useState(false);
  const [search, setSearch] = useState([]);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  const userUrl = `${requests.user}${userProfile?._id}`;

  useEffect(() => {
    async function getFriends() {
      setIsLoading(true);
      const response = await serverApi.get(requests.fetchUsers);
      const data = response.data;
      setFriends(data.filter((friend) => friend._id !== userProfile._id));
      setIsLoading(false);
    }
    getFriends();
  }, []);

  useEffect(() => {
    async function getUser() {
      setIsLoggedIn(false);
      const response = await serverApi.get(userUrl);
      const data = response.data;
      data?.name === undefined ? console.log(data) : setUserProfile(data);
      data?.name === undefined ? setIsLoggedIn(false) : setIsLoggedIn(true);
    }
    getUser();
  }, []);

  useEffect(() => {
    async function updateUser() {
      const response = await serverApi.put(userUrl, {
        favorites: [...favorites],
        favoritesNumber: favorites.length,
        watchlist: [...watchlist],
        watchlistNumber: watchlist.length,
      });
      const data = response.data;
      setUserProfile(data);
    }
    updateUser();
  }, [favorites, watchlist]);

  async function createProfile(profile) {
    const response = await serverApi.post(requests.fetchUsers, profile);
    const data = response.data;
    setUserProfile(data);
  }

  function createHandler(profile) {
    createProfile(profile);
    setIsLoggedIn(true);
  }

  let fetchUrl;
  query <= 2
    ? (fetchUrl = requests.fetchTrending)
    : isMovie
    ? (fetchUrl = `${requests.fetchMovies}${query}&page=1&include_adult=false`)
    : (fetchUrl = `${requests.fetchShows}${query}&page=1&include_adult=false`);

  useEffect(() => {
    async function fetchSearch() {
      setIsLoading(true);
      const request = await instance.get(fetchUrl);
      setSearch(request.data.results);
      setIsLoading(false);
      return request;
    }
    fetchSearch();
  }, [query, fetchUrl]);

  const isOnWatchList = (movieToAdd) =>
    watchlist.some((movie) => movie.id === movieToAdd.id);

  const addToWatchList = (movieToAdd) => {
    isOnWatchList(movieToAdd)
      ? setWatchList(watchlist.filter((movie) => movie.id !== movieToAdd.id))
      : setWatchList([...watchlist, movieToAdd]);
  };

  const isFavorite = (movieToAdd) =>
    favorites.some((movie) => movie.id === movieToAdd.id);

  const addToFavorites = (movieToAdd) => {
    isFavorite(movieToAdd)
      ? setFavorites(favorites.filter((movie) => movie.id !== movieToAdd.id))
      : setFavorites([...favorites, movieToAdd]);
  };

  return (
    <>
      <ScrollToTop>
        <Navigation setOpen={setOpen} />
        <Banner show={show} handleShow={handleShow} open={open} />
        <Sidebar open={open} setOpen={setOpen} isLoggedIn={isLoggedIn} />
        <Switch>
          <MainWrapper open={open}>
            <button onClick={() => console.log(favorites)}>LOGGER</button>
            <Route exact path="/">
              <HomeWrapper>
                <Home
                  isFavorite={isFavorite}
                  isOnWatchList={isOnWatchList}
                  addToWatchList={addToWatchList}
                  addToFavorites={addToFavorites}
                />
              </HomeWrapper>
            </Route>
            <Route path="/watchlist">
              <MovieWrapper>
                <HeadlineWrapper>WATCHLIST</HeadlineWrapper>
                <GridWrapper>
                  {watchlist.map((movie) => (
                    <Watchlist
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
            <Route path="/friends">
              <ProfileWrapper>
                {friends?.map((friend) => (
                  <div key={friend?._id}>
                    <FriendsHeadline>{friend?.name}</FriendsHeadline>
                    <FriendsFlex>
                      {friend?.favorites?.map((movie) => (
                        <Friends
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
                    </FriendsFlex>
                  </div>
                ))}
              </ProfileWrapper>
            </Route>
            <Route path="/search">
              <MovieWrapper>
                <HeadlineWrapper>SEARCH</HeadlineWrapper>
                <SearchbarWrapper>
                  <Searchbar
                    isMovie={isMovie}
                    setIsMovie={setIsMovie}
                    getQuery={(query) => setQuery(query)}
                  />
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
            <Route path="/friendsinfo">
              <ProfileWrapper>
                <HeadlineWrapper>MY FRIENDS</HeadlineWrapper>
                {friends?.map((friend) => (
                  <FriendsCards key={friend._id} friend={friend} />
                ))}
              </ProfileWrapper>
            </Route>
            <Route path="/profile">
              <ProfileWrapper>
                <Profile
                  userProfile={userProfile}
                  isLoggedIn={isLoggedIn}
                  friends={friends}
                  watchlist={watchlist}
                  favorites={favorites}
                />
              </ProfileWrapper>
            </Route>
            <Route path="/createprofile">
              <ProfileWrapper>
                <CreateProfile
                  friends={friends}
                  watchlist={watchlist}
                  favorites={favorites}
                  createHandler={createHandler}
                  isLoggedIn={isLoggedIn}
                  userProfile={userProfile}
                  setUserProfile={setUserProfile}
                />
              </ProfileWrapper>
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </MainWrapper>
        </Switch>
      </ScrollToTop>
    </>
  );
}

export default App;

const FriendsFlex = styled.div`
  margin-left: 25px;
  display: flex;
  padding: 20px;
  overflow-x: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ProfileWrapper = styled.div`
  margin: 0 auto;
  max-width: 1020px;
  width: 100%;
  overflow-x: hidden;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const MainWrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
`;

const HomeWrapper = styled.div`
  margin-top: 128px;
`;

const GridWrapper = styled.div`
  display: grid;
  gap: 20px;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1020px;
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
  margin: 0 auto;
  padding: 10px;
  width: 100%;
  max-width: 1020px;
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
  max-width: 1020px;
`;

const FriendsHeadline = styled.h2`
  display: flex;
  margin-left: 20px;
  width: 100%;
  max-width: 1020px;
`;

const SearchbarWrapper = styled.div`
  margin: 0 auto;
  margin: 0 auto;
  width: 80%;
  max-width: 450px;
`;
