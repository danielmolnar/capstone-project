import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Ui/Navigation/Navigation';
import { useLocalStorage } from '../src/hooks/useLocalStorage';
import Searchbar from './components/Ui/Navigation/Searchbar';
import Sidebar from './components/Ui/Navigation/Sidebar';
import CreateProfile from './Pages/CreateProfile';
import ScrollToTop from './services/ScrollToTop';
import FriendsCards from './Pages/FriendsCards';
import Banner from '../src/components/Banner';
import requests from './services/requests';
import Watchlist from './Pages/Watchlist';
import Favorites from './Pages/Favorites';
import Friends from './Pages/Friends';
import Profile from './Pages/Profile';
import axios from './services/axios';
import Search from './Pages/Search';
import Home from './Pages/Home';

function App() {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState([]);
  const [show, handleShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [watchlist, setWatchList] = useLocalStorage('Watchlist', []);
  const [favorites, setFavorites] = useLocalStorage('Favorites', []);
  const [showType, setShowType] = useState(false);
  // const [friends, setFriends] = useLocalStorage('Testing', []);

  const [friends, setFriends] = useState([]);
  // const [myProfile, setMyProfile] = useLocalStorage('My Profile', []);
  const [myProfile, setMyProfile] = useState({});

  const apiServerURL = 'http://localhost:4000';

  useEffect(() => {
    setIsLoading(true);
    fetch(apiServerURL + '/users')
      .then((result) => result.json())
      .then((friends) => setFriends(friends))
      .then(setIsLoading(false))
      .catch((error) => console.error(error.message));
  }, []);

  let fetchUrl;
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

  query <= 2
    ? (fetchUrl = requests.fetchTrending)
    : showType
    ? (fetchUrl = `${requests.fetchSearch}${query}&page=1&include_adult=false`)
    : (fetchUrl = `${requests.fetchShows}${query}&page=1&include_adult=false`);

  useEffect(() => {
    const updateFavorites = () => {
      setMyProfile({ ...myProfile, favorites: [...favorites] });
      updateUser(myProfile);
    };
    updateFavorites();
  }, []);

  async function postUser(user) {
    return fetch(apiServerURL + '/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
  }

  async function updateUser(user) {
    return fetch(`http://localhost:4000/users/6068db64385e830e158d3e16`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
  }

  const createProfile = (profile) => {
    setMyProfile({ ...profile });
    postUser(profile);
  };

  const updateProfile = (profile) => {
    setMyProfile({ ...profile, favorites: [...favorites] });
    updateUser(profile);
  };

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
        <Sidebar open={open} setOpen={setOpen} myProfile={myProfile} />
        <Switch>
          <MainWrapper open={open}>
            <button onClick={() => console.log(favorites)}></button>
            {/* <button
              onClick={() =>
                setMyProfile({ ...myProfile, favorites: [...favorites] })
              }
            ></button>
            <button onClick={() => updateProfile(myProfile)}></button> */}
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
              <FriendsWrapper>
                {friends?.map((friend) => (
                  <div key={friend._id}>
                    <FriendsHeadline>{friend.name}</FriendsHeadline>
                    <FriendsFlex>
                      {friend?.favorites.map((movie) => (
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
              </FriendsWrapper>
            </Route>
            <Route path="/search">
              <MovieWrapper>
                <HeadlineWrapper>SEARCH</HeadlineWrapper>
                <SearchbarWrapper>
                  <Searchbar
                    getQuery={(query) => setQuery(query)}
                    showType={showType}
                    setShowType={setShowType}
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
              <FriendsWrapper>
                <HeadlineWrapper>MY FRIENDS</HeadlineWrapper>
                {friends?.map((friend) => (
                  <FriendsCards key={friend._id} friend={friend} />
                ))}
              </FriendsWrapper>
            </Route>
            <Route path="/profile">
              <FriendsWrapper>
                <Profile
                  myProfile={myProfile}
                  friends={friends}
                  watchlist={watchlist}
                  favorites={favorites}
                />
              </FriendsWrapper>
            </Route>
            <Route path="/createprofile">
              <FriendsWrapper>
                <CreateProfile
                  friends={friends}
                  watchlist={watchlist}
                  updateProfile={updateProfile}
                  myProfile={myProfile}
                  createProfile={createProfile}
                  favorites={favorites}
                />
              </FriendsWrapper>
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

const FriendsWrapper = styled.div`
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
  /* justify-content: flex-end; */
  /* margin: 0 auto; */

  width: 100%;
  max-width: 1020px;
  overflow-x: hidden;
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
