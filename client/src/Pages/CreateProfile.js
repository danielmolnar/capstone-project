import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import FormButton from '../components/Ui/Button/FormButton';
import isValidForm from '../lib/validateFunctions';
import Tags from '../components/Tags';

export default function CreateProfile({
  createProfile,
  updateProfile,
  watchlist,
  friends,
}) {
  const [favorites, setFavorites] = useLocalStorage('Favorites', []);
  // const [myProfile, setMyProfile] = useLocalStorage('My Profile', []);
  const [myProfile, setMyProfile] = useState({});

  // const [user, setUser] = useLocalStorage('UserProfile', []);

  // const apiServerURL = 'http://localhost:4000';

  // useEffect(() => {
  //   fetch(apiServerURL + '/users/60646e28278c5d29fd3a041f')
  //     .then((result) => result.json())
  //     .then((user) => setUser(user))
  //     .catch((error) => console.error(error.message));
  // }, []);

  const isExistingProfile = myProfile.name;

  const initialProfile = {
    name: '',
    age: '',
    tags: [],
    email: '',
    favorites: [...favorites],
    watchlistNumber: watchlist.length,
    friendsNumber: friends.length,
    favoritesNumber: favorites.length,
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

  function submitProfile(event) {
    event.preventDefault();
    if (isValidForm(profile)) {
      createProfile(profile);
      setMyProfile(profile);
      // setProfile(initialProfile);
    } else {
      alert('Please submit valid credentials');
    }
  }

  function updateMyProfile(profile) {
    setMyProfile({ ...profile, favorites: [...favorites] });
    updateProfile(profile);
  }

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
        <h2>{myProfile.name ? 'Edit Profile ' : 'Create Profile'}</h2>
      </HeadlineWrapper>
      <PageWrapper>
        <Form onSubmit={submitProfile}>
          <label htmlFor="name">
            <p>Name</p>
            <br />
            <InputStyler
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder={profile.name}
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
              placeholder={profile.age}
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
              placeholder={profile.email}
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
          <ButtonContainer isExistingProfile={isExistingProfile}>
            <FormButton type="submit" text="Submit" />
            <FormButton type="submit" text="Edit" onClick={updateMyProfile} />
          </ButtonContainer>
        </Form>
        <button onClick={() => updateMyProfile(myProfile)}>CLICK ME!</button>
        <button onClick={() => setMyProfile({})}>CLICK ME!</button>
      </PageWrapper>
    </>
  );
}

CreateProfile.propTypes = {
  createProfile: PropTypes.func,
  updateProfile: PropTypes.func,
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
    display: ${({ isExistingProfile }) => (isExistingProfile ? 'none' : '')};
  }

  button:last-child {
    display: ${({ isExistingProfile }) => (isExistingProfile ? '' : 'none')};
  }
`;
