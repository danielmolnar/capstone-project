import axios from 'axios';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { Switch, Route } from 'react-router-dom';
import { DownArrow } from '@styled-icons/boxicons-regular/DownArrow';
import { UpArrow } from '@styled-icons/boxicons-regular/UpArrow';
import Navigation from './components/Ui/Navigation/Navigation';
import { useLocalStorage } from '../src/hooks/useLocalStorage';
import { checkExistingUser } from './lib/helperFunctions';
import Sidebar from './components/Ui/Navigation/Sidebar';
import Searchbar from './components/Ui/Searchbar';
import CreateProfile from './Pages/CreateProfile';
import ScrollToTop from './hooks/useScrollToTop';
import FriendsCards from './Pages/FriendsCards';
import sortFilter from './lib/helperFunctions';
import Banner from '../src/components/Banner';
import requests from './services/requests';
import Watchlist from './Pages/Watchlist';
import Favorites from './Pages/Favorites';
import Friends from './Pages/Friends';
import Profile from './Pages/Profile';
import Search from './Pages/Search';
import About from './Pages/About';
import Home from './Pages/Home';

function App() {
  const [userProfile, setUserProfile] = useLocalStorage('UserProfile', {});
  const [watchlist, setWatchList] = useLocalStorage('Watchlist', []);
  const [favorites, setFavorites] = useLocalStorage('Favorites', []);
  const [isLoadingFriends, setIsLoadingFriends] = useState(false);
  const [friends, setFriends] = useLocalStorage('Friends', []);
  const userUrl = `${requests.user}${userProfile?._id}`;
  const [isSearching, setIsSearching] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMovie, setIsMovie] = useState(true);
  const [show, handleShow] = useState(false);
  const [search, setSearch] = useState([]);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getFriends() {
      setIsLoadingFriends(true);
      try {
        const response = await axios.get(requests.fetchUsers);
        const data = response.data;
        sortFilter(data, userProfile, setFriends);
        setIsLoadingFriends(false);
      } catch (error) {
        console.error(error.message);
      }
    }
    getFriends();
  }, []);

  useEffect(() => {
    async function getUser() {
      if (checkExistingUser(userProfile)) {
        setIsLoggedIn(true);
        try {
          const response = await axios.get(userUrl);
          const data = response.data;
          setUserProfile(data);
        } catch (error) {
          console.error(error.message);
        }
      }
    }
    getUser();
  }, []);

  useEffect(() => {
    async function updateUser() {
      if (checkExistingUser(userProfile)) {
        try {
          const response = await axios.put(userUrl, {
            favorites: [...favorites],
            favoritesNumber: favorites.length,
            watchlist: [...watchlist],
            watchlistNumber: watchlist.length,
          });
          const data = response.data;
          setUserProfile(data);
        } catch (error) {
          console.error(error.message);
        }
      }
    }
    updateUser();
  }, [favorites, watchlist]);

  useEffect(() => {
    if (query === '') {
      setSearch([]);
      setIsSearching(false);
      setPage(1);
    } else {
      setIsSearching(true);
    }
  }, [query]);

  let fetchUrl;
  !isSearching
    ? (fetchUrl = requests.fetchTrending)
    : isMovie
    ? (fetchUrl = requests.fetchMovies)
    : (fetchUrl = requests.fetchShows);

  useEffect(() => {
    async function fetchSearch() {
      setIsLoading(true);
      try {
        const request = await axios.get(fetchUrl, {
          params: {
            query: query,
            page: page,
          },
        });
        setSearch(request.data.results);
        setIsLoading(false);
        return request;
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchSearch();
  }, [query, fetchUrl, page]);

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

  const filteredFriendsFavorites = friends.filter(
    (list) => list.favorites.length !== 0
  );

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <ScrollToTop>
        <Navigation setOpen={setOpen} />
        <Banner
          show={show}
          open={open}
          setOpen={setOpen}
          handleShow={handleShow}
        />
        <Sidebar open={open} setOpen={setOpen} isLoggedIn={isLoggedIn} />
        <Switch>
          <MainWrapper isMobile={isMobile}>
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
                <GridWrapper isMobile={isMobile}>
                  {watchlist?.map((movie) => (
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
                {filteredFriendsFavorites?.map((friend) => (
                  <div key={friend._id}>
                    <FriendsHeadline>{friend?.name}</FriendsHeadline>
                    <FriendsFlex>
                      {friend.favorites?.map((movie) => (
                        <Friends
                          isLarge
                          movie={movie}
                          key={movie.id}
                          isLoadingFriends={isLoadingFriends}
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
                <ArrowContainer isLoading={isLoading}>
                  <BackArrow
                    isFirstPage={page === 1}
                    onClick={() => setPage((prevPage) => prevPage - 1)}
                  />
                </ArrowContainer>
                <GridWrapper isMobile={isMobile}>
                  {search?.map((movie) => (
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
                <ArrowContainer isLoading={isLoading}>
                  <NextArrow
                    onClick={handleNextPage}
                    showNext={search.length >= 20 && isSearching}
                  />
                </ArrowContainer>
              </MovieWrapper>
            </Route>
            <Route path="/favorites">
              <MovieWrapper>
                <HeadlineWrapper>FAVORITES</HeadlineWrapper>
                <GridWrapper isMobile={isMobile}>
                  {favorites?.map((movie) => (
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
                  friends={friends}
                  watchlist={watchlist}
                  favorites={favorites}
                  isLoggedIn={isLoggedIn}
                  userProfile={userProfile}
                />
              </ProfileWrapper>
            </Route>
            <Route path="/createprofile">
              <ProfileWrapper>
                <CreateProfile
                  friends={friends}
                  watchlist={watchlist}
                  favorites={favorites}
                  isLoggedIn={isLoggedIn}
                  userProfile={userProfile}
                  setIsLoggedIn={setIsLoggedIn}
                  setUserProfile={setUserProfile}
                />
              </ProfileWrapper>
            </Route>
            <Route path="/about">
              <ProfileWrapper>
                <HeadlineWrapper>About</HeadlineWrapper>
                <About />
              </ProfileWrapper>
            </Route>
          </MainWrapper>
        </Switch>
      </ScrollToTop>
    </>
  );
}

export default App;

const MainWrapper = styled.div`
  margin: ${({ isMobile }) =>
    isMobile ? '100px 0px' : '100px 15rem 100px 15rem'};
`;

const HomeWrapper = styled.div`
  margin: 0;
`;

const MovieWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1020px;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 10px;
  width: 100%;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const HeadlineWrapper = styled.h2`
  display: flex;
  margin-left: 30px;
  max-width: 1020px;
  width: 100%;
`;

const SearchbarWrapper = styled.div`
  margin: 0 auto;
  max-width: 450px;
  width: 80%;
`;

const ArrowContainer = styled.div`
  display: ${({ isLoading }) => (isLoading ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  padding: 13px;
`;

const NextArrow = styled(DownArrow)`
  color: var(--secondary-100);
  cursor: pointer;
  height: 30px;
  transition: transform 450ms;
  visibility: ${({ showNext }) => (showNext ? 'visible' : 'hidden')};
  width: 30px;

  &:hover {
    transform: scale(1.2);
  }
`;

const BackArrow = styled(UpArrow)`
  color: var(--secondary-100);
  cursor: pointer;
  height: 30px;
  transition: transform 450ms;
  display: ${({ isFirstPage }) => (isFirstPage ? 'none' : '')};
  width: 30px;
  &:hover {
    transform: scale(1.2);
  }
`;

const GridWrapper = styled.div`
  display: grid;
  padding: ${({ isMobile }) => (isMobile ? '10px' : '20px')};
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ isMobile }) => (isMobile ? '20px' : '25px')};
  max-width: 1020px;
  @media (max-width: ${({ isMobile }) => (isMobile ? '800px' : '1450px')}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${({ isMobile }) => (isMobile ? '500px' : '1200px')}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ isMobile }) => (isMobile ? '320px' : '970px')}) {
    grid-template-columns: 1fr;
  }
`;

const ProfileWrapper = styled.div`
  margin: 0 auto;
  max-width: 1020px;
  overflow-x: hidden;
  scrollbar-width: none;
  width: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const FriendsHeadline = styled.h2`
  display: flex;
  margin-left: 20px;
  max-width: 1020px;
  width: 100%;
`;

const FriendsFlex = styled.div`
  display: flex;
  margin-left: 25px;
  overflow-x: scroll;
  padding: 20px;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
