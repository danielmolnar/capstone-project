import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from './services/axios';
import requests from './services/requests';
import ScrollToTop from './services/ScrollToTop';
import { useLocalStorage } from '../src/hooks/useLocalStorage';
import Home from './Pages/Home';
import Search from './Pages/Search';
import Friends from './Pages/Friends';
import Ratings from './Pages/Ratings';
import Profile from './Pages/Profile';
import Watchlist from './Pages/Watchlist';
import Favorites from './Pages/Favorites';
import FriendsCards from './Pages/FriendsCards';
import CreateProfile from './Pages/CreateProfile';
import Sidebar from './components/Ui/Navigation/Sidebar';
import Banner from '../src/components/Banner';
import Searchbar from './components/Ui/Navigation/Searchbar';
import Navigation from './components/Ui/Navigation/Navigation';

function App() {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState([]);
  const [show, handleShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [watchlist, setWatchList] = useLocalStorage('Watchlist', []);
  const [favorites, setFavorites] = useLocalStorage('Favorites', []);
  const [friends, setFriends] = useLocalStorage('Testing', []);
  // const [myProfile, setMyProfile] = useLocalStorage('My Profile', []);
  const [myProfile, setMyProfile] = useState({});

  const apiServerURL = 'http://localhost:4000';
  let fetchUrl;

  useEffect(() => {
    setIsLoading(true);
    fetch(apiServerURL + '/users')
      .then((result) => result.json())
      .then((friends) => setFriends(friends))
      .then(setIsLoading(false))
      .catch((error) => console.error(error.message));
  }, []);

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
    : (fetchUrl = `${requests.fetchSearch}${query}&page=1&include_adult=false`);

  useEffect(() => {
    const updateFavorites = () => {
      setMyProfile({ ...myProfile, favorites: [...favorites] });
      updateUser(myProfile);
    };
    updateFavorites();
  }, [favorites]);

  async function postUser(user) {
    return fetch(apiServerURL + '/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
  }

  async function updateUser(user) {
    return fetch(`http://localhost:4000/users/606645949cd7861d1588953d`, {
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
      <Navigation open={open} setOpen={setOpen} />
      <Banner show={show} handleShow={handleShow} />
      <Sidebar
        open={open}
        setOpen={setOpen}
        show={show}
        handleShow={handleShow}
        myProfile={myProfile}
      />
      <ScrollToTop>
        <Switch>
          <MainWrapper open={open}>
            {/* <button onClick={() => console.log(myProfile)}></button>
            <button
              onClick={() =>
                setMyProfile({ ...myProfile, favorites: [...favorites] })
              }
            ></button>
            <button onClick={() => updateProfile(myProfile)}></button> */}
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
                {friends.map((friend) => (
                  <>
                    <HeadlineWrapper>{friend.name}</HeadlineWrapper>
                    <FriendsFlex>
                      {friend.favorites.map((movie) => (
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
                  </>
                ))}
              </FriendsWrapper>
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
              <>
                <Profile
                  myProfile={myProfile}
                  friends={friends}
                  watchlist={watchlist}
                  favorites={favorites}
                />
              </>
            </Route>
            <Route path="/createprofile">
              <FriendsWrapper>
                <CreateProfile
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
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 1020px) {
    box-shadow: var(--boxshadow);
    border-radius: 5px;
    height: 100%;
    padding: 1rem 0rem 2rem 0rem;
  }
`;

const MainWrapper = styled.div`
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
  justify-content: flex-end;
  margin: 0 auto;
  max-width: 1020px;
  overflow-x: hidden;

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 1020px) {
    box-shadow: var(--boxshadow);
    height: 100%;
    padding: 1rem 0rem 2rem 0rem;
  }
`;

const HeadlineWrapper = styled.h2`
  display: flex;
  margin-left: 20px;
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
