import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import FormButton from '../components/Ui/Button/FormButton';
import isValidForm from '../lib/validateFunctions';
import Tags from '../components/Tags';
// import axios from 'axios';
import dataBase from '../services/axiosServer';
import requests from '../services/requests';

export default function CreateProfile({
  friends,
  creator,
  favorites,
  watchlist,
  isLoggedIn,
  userProfile,
  setUserProfile,
}) {
  // const [favorites, setFavorites] = useLocalStorage('Favorites', []);
  // const [userProfile, setUserProfile] = useLocalStorage('UserProfile', []);
  // const [userProfile, setUserProfile] = useState({});

  const userUrl = `${requests.user}${userProfile._id}`;
  // const userUrl = 'http://localhost:4000/users/606cf9a9c9f55958a11d9f32';
  // const userUrl = `${apiServerURL}/users/${userProfile?._id}`;
  // const usersUrl = 'http://localhost:4000/users';

  const initialProfile = {
    age: userProfile?.age ?? '',
    email: userProfile?.email ?? '',
    favorites: [...favorites],
    favoritesNumber: favorites?.length,
    friendsNumber: friends?.length,
    name: userProfile?.name ?? '',
    tags: userProfile?.tags ?? [],
    watchlist: [...watchlist],
    watchlistNumber: watchlist.length,
  };
  const [profile, setProfile] = useState(initialProfile);

  const handleChange = (event) => {
    const field = event.target;
    let value = event.target.value;
    setProfile({
      ...profile,
      [field.name]: value,
    });
  };

  async function updateUserInfos(profile) {
    const response = await dataBase.put(userUrl, {
      age: profile.age,
      email: profile.email,
      name: profile.name,
      tags: profile.tags,
    });
    const data = response.data;
    setUserProfile(data);
  }

  function createProfile(event) {
    event.preventDefault();
    if (isValidForm(profile)) {
      creator(profile);
    } else {
      alert('Please submit valid credentials');
    }
  }

  function upDateProfile(event) {
    event.preventDefault();
    if (isValidForm(profile)) {
      updateUserInfos(profile);
    } else {
      alert('Please submit valid credentials');
    }
  }

  //isLoggedIn ? updateUserInfos(profile) :

  const addProfileTag = (tag) => {
    setProfile({
      ...profile,
      tags: [...profile.tags, tag],
    });
  };

  const removeProfileTag = (deletetag) => {
    const remainingTags = profile.tags.filter((tag) => tag !== deletetag);
    setProfile({ ...profile, tags: remainingTags });
  };

  return (
    <>
      <HeadlineWrapper>
        <h2>{isLoggedIn ? 'Edit Profile' : 'Create Profile'}</h2>
      </HeadlineWrapper>
      <PageWrapper>
        <h2>{profile.name}</h2>
        <Form>
          <label htmlFor="name">
            <p>Name</p>
            <br />
            <InputStyler
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder={userProfile?.name}
            />
          </label>
          <label htmlFor="age">
            <p>Age</p>
            <br />
            <InputStyler
              type="text"
              name="age"
              value={profile.age}
              onChange={handleChange}
              placeholder={userProfile?.age}
            />
          </label>
          <label htmlFor="age">
            <p>E-Mail</p>
            <br />
            <InputStyler
              type="text"
              name="email"
              value={profile.email}
              onChange={handleChange}
              placeholder={userProfile?.email}
            />
          </label>
          <label htmlFor="tags">
            <p>User Tags</p>
            <br />

            <Tags
              headline="User Tags"
              addProfileTag={addProfileTag}
              tags={profile.tags}
              removeProfileTag={removeProfileTag}
            />
          </label>
          <ButtonContainer isLoggedIn={isLoggedIn}>
            <FormButton onClick={createProfile} text="Submit" />
            <FormButton onClick={upDateProfile} text="Edit" />
          </ButtonContainer>
        </Form>

        <button onClick={() => console.log(isLoggedIn)}>CLICK ME!</button>
        {/* <button onClick={() => createProfile(profile)}>CLICK ME!</button> */}
      </PageWrapper>
    </>
  );
}

CreateProfile.propTypes = {
  friends: PropTypes.array,
  creator: PropTypes.func,
  favorites: PropTypes.array,
  watchlist: PropTypes.array,
  isLoggedIn: PropTypes.bool,
  userProfile: PropTypes.object,
  setUserProfile: PropTypes.func,
};

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  p {
    margin: 0;
  }

  label {
    margin: 0;
    margin-bottom: 1rem;
    max-width: 20rem;
    width: 100%;
  }
`;

const PageWrapper = styled.div`
  margin: 0 auto;
  width: 80%;
`;

const HeadlineWrapper = styled.div`
  margin-left: 20px;
`;

const InputStyler = styled.input`
  border: none;
  border-radius: 5px;
  height: 25px;
  max-width: 20rem;
  outline: none;
  padding: 10px;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  width: 80%;
  max-width: 10rem;
  margin-top: 1.5rem;

  button:first-child {
    display: ${({ isLoggedIn }) => (isLoggedIn ? 'none' : '')};
  }

  button:last-child {
    display: ${({ isLoggedIn }) => (isLoggedIn ? '' : 'none')};
  }
`;

// async function updateUser(profile) {
//   return fetch(userUrl, {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(profile),
//   })
//     .then((response) => response.json())
//     .then((updatedUser) => setUserProfile(updatedUser));
// }
